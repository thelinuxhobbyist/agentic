// App JS for BrightSmile Dental demo
// Exposes sendMessage(message) as the API boundary to replace later.

function createMessageElement(text, cls){
  const el = document.createElement('div');
  el.className = 'message ' + cls;
  const inner = document.createElement('div');
  inner.className = 'message-content';
  inner.textContent = text;
  el.appendChild(inner);
  return el;
}

async function sendMessage(message){
  // API boundary: replace this implementation with a real backend call.
  // For now, return a simple placeholder response after a short delay.
  await new Promise(r => setTimeout(r, 600));
  return "Thanks for your question — this is a placeholder response from BrightSmile assistant. Replace sendMessage() with your API call to get real answers.";
}

// Chat wiring
document.addEventListener('DOMContentLoaded', () => {
  const chat = document.getElementById('chat');
  const form = document.getElementById('chat-form');
  const input = document.getElementById('message');
  const examples = document.querySelectorAll('.example');
  const menuToggle = document.querySelectorAll('.menu-toggle');

  function appendUserMessage(text){
    const msg = createMessageElement(text, 'user');
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
  }

  function appendAssistantMessage(text){
    const msg = createMessageElement(text, 'assistant');
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if(!text) return;
    appendUserMessage(text);
    input.value = '';
    const loading = createMessageElement('Thinking...', 'assistant');
    chat.appendChild(loading);
    chat.scrollTop = chat.scrollHeight;
    try{
      const resp = await sendMessage(text);
      loading.remove();
      appendAssistantMessage(resp);
    }catch(err){
      loading.remove();
      appendAssistantMessage('Sorry, something went wrong.');
      console.error(err);
    }
  });

  examples.forEach(btn => {
    btn.addEventListener('click', () => {
      input.value = btn.textContent.trim();
      input.focus();
    });
  });

  // Mobile menu toggle
  menuToggle.forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = document.getElementById('primary-nav');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('show');
    });
  });
});

// Export for external usage (e.g., tests or other scripts)
window.sendMessage = sendMessage;
