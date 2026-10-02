/* Super JinX dashboard add-on
   1) Sidebar = exactly: Dashboard, Users, API Keys, Templates, Bulk Actions, Settings, Support.
      Everything else (Nodes, Hosts, Cores, Admins, Groups, Roles, Statistics...) is hidden for everyone.
   2) "API Keys" page: 5-minute owner key.
   3) "Settings" page: change the panel password (owner and resellers, each for their own account). */
(function () {
  "use strict";
  var ZWNJ = String.fromCharCode(8204);
  function norm(t) { return String(t || "").split(ZWNJ).join(" ").replace(/[0-9۰-۹]+/g, "").replace(/\s+/g, " ").trim().toLowerCase(); }

  /* ---------- 1) sidebar: whitelist of top-level items + blacklist by link ---------- */
  var KEEP = ["داشبورد", "dashboard", "کاربران", "users", "کلیدهای api", "کلید های api", "api keys",
              "قالب ها", "قالبها", "templates", "عملیات گروهی", "bulk actions", "bulk", "تنظیمات", "settings",
              "پشتیبانی از ما", "پشتیبانی", "support", "support us"].map(norm);
  var HIDE_TXT = ["نودها", "نود", "nodes", "node", "هاست ها", "هاستها", "میزبان ها", "hosts", "host settings",
                  "هسته ها", "هسته", "پیکربندی هسته", "تنظیمات هسته", "cores", "core", "core settings", "core config",
                  "مدیران", "ادمین ها", "admins", "admin", "گروه ها", "گروهها", "groups", "نقش ها", "roles", "admin roles",
                  "آمار", "statistics", "stats", "usage"].map(norm);
  var HIDE_HREF = /\/(nodes?|hosts?|cores?|core-?settings|admins?|admin-roles|roles|groups|statistics|stats)(\/|\?|#|$)/i;
  function label(el) { var t = el.querySelector("span, p") || el; return norm(t.textContent); }
  function hideItem(el) { if (el && el.style.display !== "none") { el.style.display = "none"; el.setAttribute("data-jx", "hidden"); } }
  function sweep() {
    var side = document.querySelector('[data-sidebar="sidebar"], aside, nav'); if (!side) return;
    var top = side.querySelectorAll('[data-sidebar="menu-item"]');
    for (var i = 0; i < top.length; i++) {
      var btn = top[i].querySelector('[data-sidebar="menu-button"], a, button'); if (!btn) continue;
      var t = label(btn);
      if (t && KEEP.indexOf(t) === -1 && !KEEP.some(function (k) { return t.indexOf(k) === 0; })) hideItem(top[i]);
    }
    var links = side.querySelectorAll('a, [data-sidebar="menu-sub-button"], [data-sidebar="menu-button"]');
    for (var j = 0; j < links.length; j++) {
      var a = links[j], href = a.getAttribute("href") || "", txt = label(a);
      if (HIDE_HREF.test(href) || HIDE_TXT.indexOf(txt) > -1) hideItem(a.closest('[data-sidebar="menu-sub-item"], [data-sidebar="menu-item"], li') || a);
    }
  }

  /* ---------- helpers ---------- */
  function findToken() {
    var jwt = /(eyJ[\w-]+\.[\w-]+\.[\w-]+)/, stores = [];
    try { stores.push(localStorage); } catch (e) {}
    try { stores.push(sessionStorage); } catch (e) {}
    for (var s = 0; s < stores.length; s++) for (var i = 0; i < stores[s].length; i++) {
      var m = jwt.exec(String(stores[s].getItem(stores[s].key(i)) || "")); if (m) return m[1];
    }
    var c = jwt.exec(document.cookie || ""); return c ? c[1] : null;
  }
  var OWNER = null, askedFor = null, busy = false;
  function whoAmI() {                       /* once per login token */
    var t = findToken();
    if (!t) { OWNER = null; askedFor = null; return; }
    if (t === askedFor || busy) return;
    busy = true;
    fetch("/api/admin", { headers: { Authorization: "Bearer " + t } })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (me) { busy = false; askedFor = t; OWNER = me ? !!(me.role && me.role.is_owner) : null; schedule(); })
      .catch(function () { busy = false; setTimeout(schedule, 30000); });
  }
  function fa(n) { return String(n).replace(/[0-9]/g, function (d) { return "۰۱۲۳۴۵۶۷۸۹"[d]; }); }
  function post(url, body, token) {
    var hd = { "Content-Type": "application/json" }; if (token) hd.Authorization = "Bearer " + token;
    return fetch(url, { method: "POST", headers: hd, body: JSON.stringify(body || {}), credentials: "same-origin" })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return [r.status, j]; }); });
  }
  var CSS = ".jx-ok{margin:0 0 16px;padding:16px;border:1px solid rgba(127,127,127,.28);border-radius:14px;background:rgba(127,127,127,.06);font:inherit;color:inherit}" +
    ".jx-ok .r{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.jx-ok .t{flex:1;min-width:180px}.jx-ok b{display:block;font-size:15px}" +
    ".jx-ok small{display:block;opacity:.7;font-size:13px;margin-top:2px;line-height:1.7}" +
    ".jx-ok a.g{cursor:pointer;font-weight:700;font-size:14px;text-decoration:underline;text-underline-offset:4px;color:inherit;white-space:nowrap}" +
    ".jx-ok code{display:inline-block;margin-top:10px;padding:6px 10px;border-radius:8px;background:rgba(127,127,127,.14);font-weight:800;letter-spacing:.03em;direction:ltr;user-select:all;cursor:pointer}" +
    ".jx-ok .f{display:none;gap:8px;margin-top:12px;flex-wrap:wrap}.jx-ok .f.on{display:flex}" +
    ".jx-ok input{flex:1;min-width:140px;height:40px;padding:0 12px;border-radius:10px;border:1px solid rgba(127,127,127,.35);background:transparent;color:inherit;font:inherit;direction:ltr}" +
    ".jx-ok button.s{height:40px;padding:0 18px;border-radius:10px;border:1px solid currentColor;cursor:pointer;font:inherit;font-weight:700;background:transparent;color:inherit}.jx-ok button.s:disabled{opacity:.5}" +
    ".jx-ok .e{font-size:13px;margin-top:8px;display:none}.jx-ok .e.bad{display:block;color:#e5484d}.jx-ok .e.good{display:block;color:#30a46c}";
  function css() { if (!document.getElementById("jx-ok-css")) { var st = document.createElement("style"); st.id = "jx-ok-css"; st.textContent = CSS; document.head.appendChild(st); } }
  function heading(words, pathRe) {
    var hs = document.querySelectorAll("main h1, main h2, h1, h2");
    for (var i = 0; i < hs.length; i++) if (words.indexOf(norm(hs[i].textContent)) > -1) return hs[i];
    if (pathRe.test(location.pathname + location.hash)) return document.querySelector("main h1, main h2, h1, h2") || null;
    return null;
  }
  function place(box, h) { var anchor = h.closest("header") || h.parentElement || h; if (!anchor.parentNode) return false; anchor.parentNode.insertBefore(box, anchor.nextSibling); return true; }
  function msg(el, cls, t) { el.className = "e " + cls; el.textContent = t; }

  /* ---------- 2) owner key inside "API Keys" ---------- */
  function mountKey() {
    var old = document.getElementById("jx-owner-key");
    if (OWNER === false) { if (old) old.remove(); return; }
    if (old) return;
    var h = heading(["کلیدهای api", "کلید های api", "api keys", "api key"].map(norm), /api[-_]?keys?/i); if (!h) return;
    css();
    var box = document.createElement("section"); box.id = "jx-owner-key"; box.className = "jx-ok"; box.dir = "rtl";
    box.innerHTML = '<div class="r"><div class="t"><b>کلید ۵ دقیقه‌ای مالک</b><small>برای بازیابی رمز از صفحه‌ی ورود («دسترسی مالک»). برای تغییر عادی رمز برو «تنظیمات».</small></div><a class="g" role="button" tabindex="0">دریافت کلید</a></div>' +
      '<div class="f"><input placeholder="username" autocomplete="username"><input type="password" placeholder="password" autocomplete="current-password"><button class="s" type="button"><span>تأیید</span></button></div>' +
      '<div class="e"></div><div class="k"></div>';
    if (!place(box, h)) return;
    var get = box.querySelector(".r .g"), form = box.querySelector(".f"), ins = form.querySelectorAll("input"),
        ok = form.querySelector("button"), err = box.querySelector(".e"), out = box.querySelector(".k"), timer;
    function request(body, token) {
      err.className = "e"; get.textContent = "…";
      post("/jinx/key", body, token).then(function (x) {
        get.textContent = "دریافت کلید";
        if (x[0] === 200) return show(x[1]);
        if (x[0] === 401 && !body) { form.classList.add("on"); ins[0].focus(); return; }
        msg(err, "bad", x[1].detail || "خطا");
      }).catch(function () { get.textContent = "دریافت کلید"; msg(err, "bad", "ارتباط با سرور برقرار نشد"); });
    }
    function show(j) {
      form.classList.remove("on");
      out.innerHTML = '<code title="کپی"></code> <small class="l"></small>';
      var c = out.querySelector("code"), l = out.querySelector(".l"), end = Date.now() + (j.ttl || 300) * 1000;
      c.textContent = j.key;
      c.onclick = function () { try { navigator.clipboard.writeText(j.key); l.textContent = "کپی شد"; } catch (e) {} };
      clearInterval(timer);
      timer = setInterval(function () {
        var s = Math.max(0, Math.round((end - Date.now()) / 1000));
        l.textContent = s ? "اعتبار " + fa(Math.floor(s / 60) + ":" + ("0" + s % 60).slice(-2)) : "منقضی شد، دوباره بگیر";
        if (!s) clearInterval(timer);
      }, 500);
    }
    get.onclick = function () { request(null, findToken()); };
    ok.onclick = function () { request({ username: ins[0].value.trim(), password: ins[1].value }); };
  }

  /* ---------- 3) change password inside "Settings" ---------- */
  function mountPass() {
    if (document.getElementById("jx-pass")) return;
    var h = heading(["تنظیمات", "settings", "تنظیمات عمومی", "general settings"].map(norm), /settings/i); if (!h) return;
    css();
    var box = document.createElement("section"); box.id = "jx-pass"; box.className = "jx-ok"; box.dir = "rtl";
    box.innerHTML = '<div class="r"><div class="t"><b>تغییر رمز پنل</b><small>رمز اکانت خودت رو عوض کن. بعد از ذخیره، با رمز جدید وارد شو.</small></div></div>' +
      '<div class="f on"><input type="password" placeholder="رمز فعلی" autocomplete="current-password"><input type="password" placeholder="رمز جدید" autocomplete="new-password"><input type="password" placeholder="تکرار رمز جدید" autocomplete="new-password"><button class="s" type="button"><span>ذخیره‌ی رمز</span></button></div>' +
      '<div class="e"></div>';
    if (!place(box, h)) return;
    var ins = box.querySelectorAll("input"), btn = box.querySelector("button"), err = box.querySelector(".e");
    btn.onclick = function () {
      var cur = ins[0].value, nw = ins[1].value, rp = ins[2].value;
      if (!cur || !nw) return msg(err, "bad", "رمز فعلی و رمز جدید رو وارد کن");
      if (nw.length < 4) return msg(err, "bad", "رمز جدید حداقل ۴ کاراکتر باشه");
      if (nw !== rp) return msg(err, "bad", "تکرار رمز جدید یکی نیست");
      btn.disabled = true; msg(err, "", "");
      post("/jinx/password", { current: cur, new: nw }, findToken()).then(function (x) {
        btn.disabled = false;
        if (x[0] === 200) { ins[0].value = ins[1].value = ins[2].value = ""; return msg(err, "good", "رمز عوض شد. دفعه‌ی بعد با رمز جدید وارد شو."); }
        msg(err, "bad", x[1].detail || "خطا");
      }).catch(function () { btn.disabled = false; msg(err, "bad", "ارتباط با سرور برقرار نشد"); });
    };
  }

  /* ---------- run + keep up with page changes ---------- */
  var queued = false;
  function tick() { try { whoAmI(); sweep(); mountKey(); mountPass(); } catch (e) { /* never break the panel */ } }
  function schedule() { if (queued) return; queued = true; requestAnimationFrame(function () { queued = false; tick(); }); }
  function start() { tick(); new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true }); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
