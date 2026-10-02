<div align="center">

<img src="banner.svg" width="100%" alt="Super JinX Panel">

<br>

<h1>Super JinX Panel</h1>

<p><b>پنل نمایندگی حرفه‌ای، رایگان و متن‌باز بر پایه‌ی PasarGuard</b><br>
یک کلیک تا یک سرویس کامل: پنل، هسته‌ی Xray و ۵ کانفیگ آماده، همه روی Railway</p>

<a href="https://t.me/+WvKFv0lU_i5lNGE0"><img src="https://img.shields.io/badge/Telegram-Super%20JinX%20Channel-26A5E4?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram"></a>
<img src="https://img.shields.io/badge/Version-6.2.0-5b6cff?style=for-the-badge" alt="Version">
<img src="https://img.shields.io/badge/Price-Free-16a34a?style=for-the-badge" alt="Free">
<br>
<img src="https://img.shields.io/badge/Deploy-Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white" alt="Railway">
<img src="https://img.shields.io/badge/Panel-PasarGuard-1e3a8a?style=for-the-badge" alt="PasarGuard">
<img src="https://img.shields.io/badge/Core-Xray-7c4dff?style=for-the-badge" alt="Xray">
<img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">

<br><br>

<a href="#install"><b>نصب</b></a> &nbsp;·&nbsp;
<a href="#features"><b>امکانات</b></a> &nbsp;·&nbsp;
<a href="#configs"><b>کانفیگ‌ها</b></a> &nbsp;·&nbsp;
<a href="#reseller"><b>نمایندگی</b></a> &nbsp;·&nbsp;
<a href="#docs"><b>مستندات</b></a> &nbsp;·&nbsp;
<a href="https://t.me/+WvKFv0lU_i5lNGE0"><b>کانال</b></a>

</div>

<br>

> [!NOTE]
> **Super JinX** کاملاً رایگانه. ریپو رو Fork کن، روی Railway بساز و در کمتر از ۵ دقیقه پنل نمایندگی خودت رو تحویل بگیر. بدون VPS، بدون ترمینال، بدون تنظیم دستی.

<br>

## فهرست مطالب

| | | |
|---|---|---|
| [معرفی](#intro) | [امکانات](#features) | [معماری](#arch) |
| [نصب](#install) | [ورود و امنیت](#login) | [کلید مالک](#owner-key) |
| [گروه‌ها و کانفیگ‌ها](#configs) | [اپ‌های پشتیبانی‌شده](#apps) | [پنل نمایندگی](#reseller) |
| [صفحه‌ی اشتراک](#sub) | [خودترمیمی](#heal) | [سرعت و پینگ](#speed) |
| [متغیرها](#vars) | [آپدیت](#update) | [عیب‌یابی سریع](#fix) |
| [مستندات](#docs) | [همکاری](#collab) | [پشتیبانی](#support) |

<br>

<a id="intro"></a>
## <img src="ic-intro.svg" width="26" align="center"> &nbsp;معرفی

**Super JinX** یک پنل نمایندگی کامل و آماده‌ی فروشه که روی [PasarGuard](https://github.com/PasarGuard/panel) ساخته شده. پنل، هسته‌ی Xray و وب‌سرور همه داخل **یک سرویس** روی Railway اجرا میشن و همه‌ی تنظیمات، از اینباندها و هاست‌ها تا گروه‌ها، قالب‌های فروش و نقش نماینده، **خودکار** انجام میشه.

کافیه ریپو رو Fork کنی و به Railway وصلش کنی. چند دقیقه بعد یک پنل فارسی با دو گروه کانفیگ، صفحه‌ی اشتراک اختصاصی و سیستم نمایندگی آماده داری.

<br>

<a id="features"></a>
## <img src="ic-features.svg" width="26" align="center"> &nbsp;امکانات

<table>
<tr>
<td width="50%" valign="top">

### <img src="ic-install.svg" width="20" align="center"> &nbsp;نصب بدون دردسر
- Fork و Deploy، بدون ویرایش حتی یک فایل
- پنل، هسته‌ی Xray و nginx در **یک سرویس**
- بدون نیاز به VPS یا نصب نود جداگانه
- همه چیز روی پورت `8080`

</td>
<td width="50%" valign="top">

### <img src="ic-configs.svg" width="20" align="center"> &nbsp;کانفیگ‌های حرفه‌ای
- **۵ کانفیگ** با ۳ پروتکل: VLESS، Trojan و VMess
- دو نوع انتقال: WebSocket و HTTPUpgrade
- TLS روی پورت 443 با `alpn=http/1.1`
- Early Data (`ed=2560`) برای پینگ کمتر

</td>
</tr>
<tr>
<td valign="top">

### <img src="ic-reseller.svg" width="20" align="center"> &nbsp;سیستم نمایندگی
- نقش آماده‌ی **«نماینده»** با سهمیه‌ی حجم
- هر نماینده فقط کاربرهای خودش رو می‌بینه
- ۱۰ قالب فروش آماده برای هر دو گروه
- منوی تمیز و ساده برای نماینده‌ها

</td>
<td valign="top">

### <img src="ic-sub.svg" width="20" align="center"> &nbsp;صفحه‌ی اشتراک اختصاصی
- طراحی شیشه‌ای تیره با حلقه‌ی مصرف
- پینگ زنده‌ی سرور و تاریخ شمسی
- **QR داخلی** با ذخیره‌ی تصویر
- اتصال با یک لمس به ۶ اپ محبوب

</td>
</tr>
<tr>
<td valign="top">

### <img src="ic-heal.svg" width="20" align="center"> &nbsp;خودترمیمی و پایداری
- ری‌استارت خودکار هسته در صورت قطعی
- نگهبان سرویس با بازگشت خودکار
- اصلاح خودکار تنظیمات به‌هم‌ریخته هر ۱۰ دقیقه
- بدون ذخیره‌سازی‌های بی‌دلیل و قطعی‌های کوتاه

</td>
<td valign="top">

### <img src="ic-login.svg" width="20" align="center"> &nbsp;امنیت
- مسیرهای کانفیگ **اختصاصی برای هر نصب**
- همه‌ی پورت‌های داخلی فقط روی `127.0.0.1`
- کلید ۵ دقیقه‌ای مالک با محافظت در برابر حدس رمز
- **تغییر رمز از داخل تنظیمات پنل**، برای مالک و هر نماینده

</td>
</tr>
</table>

<br>

<a id="arch"></a>
## <img src="ic-arch.svg" width="26" align="center"> &nbsp;معماری

```mermaid
flowchart LR
    U["User App<br/>V2Box · v2rayNG · Hiddify"] -- "TLS 443" --> R["Railway Edge"]
    R -- "8080" --> N["nginx"]
    N -- "/dashboard · /api · /sub" --> P["PasarGuard Panel"]
    N -- "5 secret paths" --> X["Xray Core"]
    P -- "gRPC 127.0.0.1" --> X
    B["JinX Bootstrap<br/>auto setup + self-heal"] --> P
    X --> I(("Internet"))
```

<br>

<a id="install"></a>
## <img src="ic-install.svg" width="26" align="center"> &nbsp;نصب

> [!TIP]
> زمان نصب حدود **۵ دقیقه**ست. فقط یک اکانت [GitHub](https://github.com) و یک اکانت [Railway](https://railway.com) لازم داری.

**مرحله‌ی ۱: Fork**

بالای همین صفحه روی **Fork** بزن تا یک نسخه از ریپو در اکانت خودت ساخته بشه.

**مرحله‌ی ۲: Deploy روی Railway**

| | کار | مسیر در Railway |
|:---:|---|---|
| ۱ | ساخت پروژه از ریپوی خودت | **New Project ← Deploy from GitHub repo** |
| ۲ | اتصال Volume با مسیر `/var/lib/pasarguard` | **راست‌کلیک روی سرویس ← Attach Volume** |
| ۳ | ساخت دامنه با پورت `8080` | **Settings ← Networking ← Generate Domain** |
| ۴ | انتخاب نزدیک‌ترین Region به ایران | **Settings ← Deploy ← Region ← EU West (Amsterdam)** |
| ۵ | یک بار اجرای دوباره | **Deployments ← Redeploy** |

**مرحله‌ی ۳: تمام**

توی **Deploy Logs** این خط یعنی پنل آماده‌ست:

```text
[bootstrap] DONE -> https://YOUR-DOMAIN/dashboard/
```

> [!IMPORTANT]
> بدون **Volume** با هر ری‌استارت همه‌ی کاربرها و تنظیمات پاک میشن. مرحله‌ی ۲ رو جا نندازید.

> [!NOTE]
> **هر نصب، مسیرهای اختصاصی خودش رو داره.** موقع اولین اجرا مسیر هر ۵ کانفیگ به‌صورت تصادفی ساخته و روی Volume نگه داشته میشه. هر Fork روی سرور جداگانه‌ی خودش اجرا میشه، پس پنل‌ها هیچ منبعی رو با هم شریک نیستن و از سرعت هم کم نمی‌کنن.

<br>

<a id="login"></a>
## <img src="ic-login.svg" width="26" align="center"> &nbsp;ورود و امنیت

| نقش | آدرس | نام کاربری | رمز |
|---|---|---|---|
| **مالک** | `https://YOUR-DOMAIN/dashboard/` | `admin` | `admin` |
| **نماینده‌ی نمونه** (۵۰ گیگ) | `https://YOUR-DOMAIN/dashboard/` | `reseller` | `reseller` |

> [!WARNING]
> `admin` / `admin` فقط برای **اولین ورود** هست. همون اول رمز مالک رو عوض کن و رمز نماینده‌ی نمونه رو هم تغییر بده یا پاکش کن (دیگه ساخته نمیشه). رمزی که خودت بذاری هیچ وقت خودکار عوض نمیشه.

<a id="owner-key"></a>
### <img src="ic-key.svg" width="22" align="center"> &nbsp;تغییر رمز

**از داخل پنل (پیشنهادی):** برو **«تنظیمات»**. بالای صفحه بخش **«تغییر رمز پنل»** هست. رمز فعلی و رمز جدید رو بزن و **«ذخیره‌ی رمز»**. مالک و نماینده‌ها هر کدوم رمز خودشون رو از همینجا عوض می‌کنن.

**بازیابی با کلید ۵ دقیقه‌ای مالک:** توی **«کلیدهای API»** روی **«دریافت کلید»** بزن، بعد توی صفحه‌ی ورود **«دسترسی مالک»** رو بزن و با کلید رمز جدید بذار.

رمز یادت رفته و وارد پنل نمیشی؟ سرویس رو توی Railway **Restart** کن و کلید رو از خط **`OWNER KEY`** توی لاگ بردار.

<br>

<a id="configs"></a>
## <img src="ic-configs.svg" width="26" align="center"> &nbsp;گروه‌ها و کانفیگ‌ها

دو گروه آماده داری و موقع ساخت هر کاربر، گروهش رو خودت انتخاب می‌کنی:

| گروه | کانفیگ | پروتکل | انتقال | اثرانگشت TLS | ویژگی |
|---|---|---|---|---|---|
| **جینکس پرو** | 𝗣𝗿𝗼 | VLESS | WebSocket + Early Data | Chrome | تک‌کانفیگ با کمترین پینگ |
| **𝗝𝗶𝗻𝗫** | ⚡ 𝗙𝗹𝗮𝘀𝗵 | VLESS | WebSocket | Firefox | سریع و سبک |
| | 🔥 𝗙𝗶𝗿𝗲 | Trojan | WebSocket | Safari | مناسب iOS |
| | 💎 𝗗𝗶𝗮𝗺𝗼𝗻𝗱 | VMess | WebSocket | Edge | سازگاری با اپ‌های قدیمی |
| | 🌙 𝗡𝗶𝗴𝗵𝘁 | VLESS | HTTPUpgrade | iOS | پایدار در شبکه‌های سخت |

اسم هر کانفیگ توی اپ کاربر اینجوری دیده میشه: `𝗣𝗿𝗼 | جینکس | 𝙎𝙪𝙥𝙚𝙧 𝗝𝗶𝗻𝗫`

> [!TIP]
> پنل هیچ وقت خودش کاربر یا کانفیگ نمی‌سازه. موقع ساخت کاربر یک **قالب** انتخاب کن تا گروه و کانفیگ‌هاش خودکار درست بشه. (اگه خواستی کاربرهای بدون گروه خودکار به 𝗝𝗶𝗻𝗫 برن، متغیر `AUTO_GROUP=on` رو بذار.)

**لینک اشتراک**

```text
https://YOUR-DOMAIN/sub/<token>
```

<a id="apps"></a>
### <img src="ic-apps.svg" width="22" align="center"> &nbsp;اپ‌های پشتیبانی‌شده

| اپ | Android | iOS | Windows | اتصال با یک لمس |
|---|:---:|:---:|:---:|:---:|
| **V2Box** | ✓ | ✓ | | ✓ |
| **v2rayNG** | ✓ | | | ✓ |
| **Hiddify** | ✓ | ✓ | ✓ | ✓ |
| **Streisand** | | ✓ | | ✓ |
| **Happ** | ✓ | ✓ | ✓ | ✓ |
| **NekoBox** | ✓ | | ✓ | ✓ |
| **Clash Meta / sing-box** | ✓ | ✓ | ✓ | |

<br>

<a id="reseller"></a>
## <img src="ic-reseller.svg" width="26" align="center"> &nbsp;پنل نمایندگی

**ساخت نماینده**
1. یک نماینده‌ی آماده با ۵۰ گیگ سهمیه ساخته شده: `reseller` / `reseller`. برای نماینده‌ی جدید، صفحه‌ی مدیران پنل رو باز کن و **افزودن مدیر** رو بزن. این صفحه توی منو نیست تا منو دقیقاً مثل پنل‌های نمایندگی تمیز بمونه.
2. نقش رو **«نماینده»** بذار و سهمیه‌ی حجم رو مشخص کن (مثلاً **50 GB**).
3. ذخیره کن و یوزر و رمز رو به نماینده بده.

**ساخت کاربر**
**کاربران ← ساخت کاربر**، یک قالب انتخاب کن و ذخیره کن. قالب‌های Pro به گروه **جینکس پرو** و بقیه به گروه **𝗝𝗶𝗻𝗫** وصل میشن.

**قالب‌های فروش آماده**

| گروه | قالب‌ها |
|---|---|
| **𝗝𝗶𝗻𝗫** | 10، 30، 50 و 100 گیگ (۳۰ روزه) · 200 گیگ (۶۰ روزه) · نامحدود (۳۰ روزه) |
| **جینکس پرو** | Pro 30، 50 و 100 گیگ · Pro نامحدود (همه ۳۰ روزه) |

**منوی پنل** دقیقاً مثل پنل‌های نمایندگی، برای همه: داشبورد · کاربران · کلیدهای API · قالب‌ها · عملیات گروهی · تنظیمات · پشتیبانی از ما

<br>

<a id="sub"></a>
## <img src="ic-sub.svg" width="26" align="center"> &nbsp;صفحه‌ی اشتراک

صفحه‌ای که کاربر با باز کردن لینک اشتراک می‌بینه، مخصوص Super JinX طراحی شده:

- حلقه‌ی مصرف با حجم مصرف‌شده، باقی‌مانده و روزهای باقی‌مانده
- تاریخ انقضا به **تقویم شمسی** و هشدار نزدیک شدن به پایان
- **پینگ زنده‌ی سرور** با برچسب کیفیت
- اتصال با یک لمس به V2Box، v2rayNG، Hiddify، Streisand، Happ و NekoBox
- فهرست کانفیگ‌ها با برچسب پروتکل، **QR داخلی** و کپی سریع
- بدون نیاز به هیچ سرویس بیرونی برای QR

<br>

<a id="heal"></a>
## <img src="ic-heal.svg" width="26" align="center"> &nbsp;خودترمیمی

| مشکل | واکنش خودکار پنل |
|---|---|
| قطع شدن هسته‌ی Xray | ری‌استارت خودکار هسته و اتصال دوباره‌ی نود |
| جواب ندادن پنل یا nginx به مدت ۳ دقیقه | ری‌استارت کامل سرویس |
| خطا در اسکریپت راه‌اندازی | اجرای دوباره‌ی خودکار بعد از ۱۰ ثانیه |
| تغییر یا حذف اشتباهی گروه‌ها و هاست‌ها | بررسی هر ۱۰ دقیقه و اصلاح خودکار |
| پاک شدن یا تغییر اشتباهی تنظیمات اشتراک | برگشت خودکار با هر راه‌اندازی |

پنل فقط وقتی چیزی رو دوباره ذخیره می‌کنه که **واقعاً** تغییر کرده باشه، پس اتصال کاربرها بی‌دلیل قطع نمیشه.

<br>

<a id="speed"></a>
## <img src="ic-speed.svg" width="26" align="center"> &nbsp;سرعت و پینگ

- **Region**: سرویس رو روی **EU West (Amsterdam)** بذار، بهترین مسیر برای ایران.
- **Early Data**: یک رفت‌وبرگشت کمتر در هر اتصال.
- **پینگ واقعی در V2Box**: حدود ۱۵۰ تا ۲۵۰ میلی‌ثانیه روی اینترنت خوب و ۲۵۰ تا ۴۰۰ روی اینترنت همراه. عدد دقیق به اپراتور و مسیر کاربر بستگی داره.
- **تنظیمات سرعت داخلی**: مسیریابی بدون DNS اضافه (`AsIs`)، DNS سیستم با کش، `tcpNoDelay` و Keep-Alive روی همه‌ی اتصال‌ها، WebSocket بدون بافر در nginx.
- برای تست پینگ توی V2Box از **Real Delay / URL Test** استفاده کن.

<br>

<a id="vars"></a>
## <img src="ic-vars.svg" width="26" align="center"> &nbsp;متغیرهای اختیاری

هیچ متغیری الزامی نیست. اگه خواستی، از **Variables** سرویس در Railway اضافه‌شون کن:

| متغیر | پیش‌فرض | کاربرد |
|---|---|---|
| `CONFIG_TITLE` | `جینکس \| 𝙎𝙪𝙥𝙚𝙧 𝗝𝗶𝗻𝗫` | متنی که بعد از اسم هر کانفیگ توی اپ دیده میشه |
| `SUBSCRIPTION_PATH` | `sub` | مسیر لینک اشتراک |
| `PUBLIC_DOMAIN` | دامنه‌ی Railway | فقط برای دامنه‌ی شخصی یا Cloudflare |
| `DEMO_RESELLER` | `on` | با `off` نماینده‌ی نمونه ساخته نمیشه |
| `AUTO_GROUP` | `off` | با `on` کاربرهای بدون گروه خودکار به 𝗝𝗶𝗻𝗫 وصل میشن |

<br>

<a id="update"></a>
## <img src="ic-update.svg" width="26" align="center"> &nbsp;آپدیت

هر وقت نسخه‌ی جدید منتشر شد، توی ریپوی خودت روی **Sync fork ← Update branch** بزن. Railway خودکار Deploy می‌کنه و **کاربرها، رمزها و کانفیگ‌ها دست نمی‌خورن.**

<br>

<a id="fix"></a>
## <img src="ic-fix.svg" width="26" align="center"> &nbsp;عیب‌یابی سریع

| خطا | راه‌حل |
|---|---|
| `Application failed to respond` | پورت دامنه رو **8080** بذار |
| کانفیگ‌ها وصل نمیشن | دامنه بعد از اولین Deploy ساخته شده، یک بار **Redeploy** کن |
| کاربرها بعد از Deploy پاک شدن | Volume روی `/var/lib/pasarguard` وصل نیست |
| `Incorrect username or password` | یک دقیقه صبر کن تا سرویس کامل بالا بیاد |

راهنمای کامل: [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

<br>

<a id="docs"></a>
## <img src="ic-docs.svg" width="26" align="center"> &nbsp;مستندات

| فایل | محتوا |
|---|---|
| [INSTALL.md](INSTALL.md) | نصب قدم‌به‌قدم |
| [FAQ.md](FAQ.md) | سوال‌های رایج: پینگ، رمز، نماینده |
| [TROUBLESHOOTING.md](TROUBLESHOOTING.md) | حل خطاهای Railway |
| [SECURITY.md](SECURITY.md) | نکات امنیتی |
| [CHANGELOG.md](CHANGELOG.md) | تغییرات هر نسخه |
| [env.example](env.example) | نمونه‌ی متغیرها |

<br>

<a id="collab"></a>
## <img src="ic-collab.svg" width="26" align="center"> &nbsp;همکاری

<div align="center">

<h3>X4G &nbsp;×&nbsp; 𝗝𝗶𝗻𝗫</h3>

این پروژه با همکاری **X4G** و **𝗝𝗶𝗻𝗫** طراحی، ساخته و منتشر شده.

</div>

<br>

<a id="support"></a>
## <img src="ic-channel.svg" width="26" align="center"> &nbsp;پشتیبانی و کانال رسمی

<div align="center">

<a href="https://t.me/+WvKFv0lU_i5lNGE0"><img src="https://img.shields.io/badge/Join-%D8%AC%DB%8C%D9%86%DA%A9%D8%B3%20%7C%20Super%20JinX-26A5E4?style=for-the-badge&logo=telegram&logoColor=white" alt="Join Channel"></a>

آپدیت‌ها، آموزش‌ها و پشتیبانی فقط از طریق کانال رسمی
**[جینکس | 𝙎𝙪𝙥𝙚𝙧 𝗝𝗶𝗻𝗫](https://t.me/+WvKFv0lU_i5lNGE0)**

اگه این پروژه به کارت اومد، با یک **Star** حمایتش کن.

</div>

<br>

## <img src="ic-license.svg" width="26" align="center"> &nbsp;مجوز و قدردانی

- استفاده و نصب **رایگانه**. تغییر نام، فروش یا انتشار دوباره‌ی این پروژه به اسم خودتون مجاز نیست. جزئیات در [LICENSE](LICENSE).
- ساخته‌شده بر پایه‌ی [PasarGuard Panel](https://github.com/PasarGuard/panel) و [PasarGuard Node](https://github.com/PasarGuard/node) (مجوز AGPL-3.0) و هسته‌ی [Xray-core](https://github.com/XTLS/Xray-core).

<br>

<div align="center">

<sub><b>Super JinX Panel</b> · X4G × 𝗝𝗶𝗻𝗫 · ساخته‌شده برای اینترنت آزاد</sub>

</div>
