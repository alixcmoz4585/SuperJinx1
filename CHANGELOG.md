# Changelog

## v6.2.0
- Sidebar exactly like reseller panels for everyone: Dashboard, Users, API Keys, Templates, Bulk Actions, Settings, Support (Admins, Nodes, Hosts, Cores, Groups, Roles, Statistics and their sub-items are hidden, matched by name and by link)
- New: change the panel password from Settings (owner and resellers, own account, current password required, brute-force protection)
- The panel never creates users or configs by itself (old test user removed once; auto-group is now optional with AUTO_GROUP=on)
- Faster configs: routing without extra DNS lookups, system DNS first with cache, tcpNoDelay + keep-alive, unbuffered WebSocket in nginx, more nginx connections
- README cleaned up for GitHub (alerts and tables render correctly)

## v6.1.0
- New README: official icon set, banner, architecture diagram, full guide, X4G × 𝗝𝗶𝗻𝗫 collaboration
- Config names in the app: `𝗣𝗿𝗼 | جینکس | 𝙎𝙪𝙥𝙚𝙧 𝗝𝗶𝗻𝗫` for Pro, and 𝗙𝗹𝗮𝘀𝗵, 𝗙𝗶𝗿𝗲, 𝗗𝗶𝗮𝗺𝗼𝗻𝗱, 𝗡𝗶𝗴𝗵𝘁 (with icons) for the 𝗝𝗶𝗻𝗫 group
- Settings, reseller role, groups and hosts are only written when they actually differ
- Dashboard asks "who am I" once per login and handles expired sessions correctly
- Public release: fork the repo and deploy on Railway, no file edits needed
- Every install gets its own random config paths on first boot (saved on the volume), so no two panels share configs
- Panels already running keep their old paths: existing users' configs keep working after the update
- Update with GitHub "Sync fork", users and settings stay untouched
- No more micro-disconnects: core, groups and hosts are only rewritten when something actually changed
- "Admins" menu visible to the owner only (to create resellers); resellers see the clean menu and no owner-key box
- Demo reseller is created once: if you delete it or change its password, it stays that way (`DEMO_RESELLER=off` to skip)
- Self-heal fallback: if a core restart fails, the node reconnects cleanly
- Lower memory per connection (Xray buffer 512 KB): more stable on Railway's small plans

## v6.0.0
- New subscription page (approved design): usage gauge, live server ping, one-tap app import, built-in QR, smooth animations, no emojis
- Dashboard menu trimmed to: Dashboard, Users, API Keys, Templates, Bulk Actions, Settings, Support
- Faster panel: keep-alive connections to the panel and gzip for dashboard files
- Config names without emojis: Pro, Flash, Fire, Diamond, Night
- Owner password is yours: admin/admin only on first boot, change it any time with the OWNER KEY from the logs (API Keys page)
- 5-minute owner key now lives inside the "API Keys" page (no extra menu items), with brute-force protection
- 𝗝𝗶𝗻𝗫 configs are now really different: VLESS-WS, Trojan-WS, VMess-WS, VLESS-HTTPUpgrade (all clients supported)
- Two groups: "جینکس پرو" (1 Pro config) and "𝗝𝗶𝗻𝗫" (4 different configs), each with its own templates; old group upgraded in place
- Users list starts empty (no auto test user); old test user from earlier versions is removed
- Self-healing: core auto-restart when disconnected, hosts/group re-checked every 10 min, setup script restarts itself, watchdog restarts the service if the panel stops answering

## v5.0.0
- New subscription page, rebuilt from scratch: live usage ring, days left, Persian expiry date, warnings, one-tap import for V2Box / v2rayNG / Hiddify / Streisand / Happ / NekoBox
- QR codes are generated inside the page (no external service), sharp and downloadable as PNG
- WebSocket early data (`ed=2560`) on all 5 configs: one round trip less per connection, lower ping
- Each config has its own path, TLS fingerprint and name
- Users created in the panel without a group get the 5 configs automatically
- Docker health check for nginx and panel

## v4.0.0
- Fixed owner login `admin / admin`, re-applied on every boot
- Reseller role and a ready reseller account with 50 GB quota
- Port fixed to 8080

## v3.0.0
- 5 × VLESS + WS + TLS configs with `alpn=http/1.1` and `fp=chrome`
- Ready-made sales templates

## v2.0.0
- Owner account created in the database (env admins are blocked in production)

## v1.0.0
- First release: PasarGuard + Xray + nginx in one Railway service
