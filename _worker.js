addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  // Serve static files embedded as KV or in Wrangler, but for this simple demo
  // we return a 301 to the origin's index. In production, use Wrangler to upload static assets.
  if (url.pathname === '/' || url.pathname === '/index.html') {
    return fetch('https://raw.githubusercontent.com/thelinuxhobbyist/agentic/main/index.html')
  }
  return new Response('Not implemented in worker stub', { status: 404 })
}
