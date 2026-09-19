# BrightSmile Dental — Demo Website

Simple static site for a fictional dental practice. Includes a chat-style AI assistant page ready to connect to a backend later.

To run locally, open `index.html` in a browser or serve the folder with a static server (e.g., `npx http-server`).

Deploying to Cloudflare Workers (Workers Sites)
1. Install Wrangler: https://developers.cloudflare.com/workers/cli-wrangler
2. Log in and set your account: `wrangler login`
3. Replace `YOUR_ACCOUNT_ID_HERE` in `wrangler.toml` with your Cloudflare Account ID.
4. Publish:

```bash
cd agentic
./publish.sh
```

Git push (run locally):

```bash
git init
git add .
git commit -m "Initial BrightSmile Dental demo"
git remote add origin git@github.com:thelinuxhobbyist/agentic.git
git branch -M main
git push -u origin main
```


Structure:
- `index.html` — Home page
- `ask.html` — Ask BrightSmile assistant
- `styles.css` — Global styles
- `app.js` — Frontend JS (chat UI and `sendMessage` boundary)
- `logo.svg` — Simple logo

The `sendMessage(message)` function in `app.js` is the boundary to replace with an API call later.
