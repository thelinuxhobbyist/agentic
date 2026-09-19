# BrightSmile Dental — Demo Website

Simple static site for a fictional dental practice, with a chat-style assistant page ready to connect to a backend later.

## Local development

```bash
npm install
npm run dev
```

Then open the local Wrangler URL (usually `http://127.0.0.1:8787`).

## Deploy to Cloudflare Workers

This project uses [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/). There is no Worker script: Wrangler uploads `public/` and Cloudflare serves the files.

```bash
npx wrangler login
npm run deploy
```

Pushes to `main` also deploy through `.github/workflows/deploy.yml` when the `CF_API_TOKEN` GitHub secret is set (Cloudflare API token with Workers edit permission).

## Structure

- `public/index.html` — Home page
- `public/ask.html` — Ask BrightSmile assistant
- `public/styles.css` — Shared styles and colour palette
- `public/app.js` — Navigation, chat UI, and `sendMessage` boundary
- `public/logo.svg` — Logo
- `wrangler.jsonc` — Workers static-asset config

The `sendMessage(message)` function in `app.js` is the boundary to replace with an API call later.
