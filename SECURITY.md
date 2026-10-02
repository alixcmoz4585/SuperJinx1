# Security

- The first login is `admin / admin`. Change it right away with the OWNER KEY printed in the Railway logs (API Keys page > owner key, then login page > Owner access). After that the password is never reset automatically.
- The panel, the Xray core and all internal ports (8000, 10001-10005, 62050) listen on `127.0.0.1` only. The only public entry is nginx on port 8080 behind Railway's TLS.
- Every install generates its own random config paths on first boot (stored on the volume), so forks never share paths.
- The demo reseller `reseller / reseller` is created once. Change its password or delete it; it is never re-created. Set `DEMO_RESELLER=off` to skip it.
- The sidebar hides Admins, Nodes, Hosts, Cores, Groups, Roles and Statistics for everyone.
- Password change in Settings needs the current password and is rate limited (5 tries / 10 min).
- The internal node API key and TLS certificate are generated on first boot and stored on the volume.

Found a problem? Report it in the [Super JinX channel](https://t.me/+WvKFv0lU_i5lNGE0).
