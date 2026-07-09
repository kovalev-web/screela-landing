Deploy this to VPS, then delete this file:

```
cd /opt/screela-landing && git pull && npm install && npm run build && pm2 restart screela-landing
```

Pending commit: 043cdb5 — fixes scroll-reveal animation triggering too late on fast mobile scroll.
