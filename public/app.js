function createMessageElement(text, cls) {
  const el = document.createElement("div");
  el.className = "message " + cls;
  const inner = document.createElement("div");
  inner.className = "message-content";
  inner.textContent = text;
  el.appendChild(inner);
  return el;
}

async function sendMessage(message) {
  await new Promise((r) => setTimeout(r, 600));
  return "Thanks for your question — this is a placeholder response from BrightSmile assistant. Replace sendMessage() with your API call to get real answers.";
}

function initNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("primary-nav");
  const backdrop = document.querySelector(".nav-backdrop");
  if (!toggle || !nav) return;

  function isOpen() {
    return toggle.getAttribute("aria-expanded") === "true";
  }

  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    nav.classList.remove("is-open");
    backdrop?.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  }

  function openMenu() {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    nav.classList.add("is-open");
    backdrop?.classList.add("is-open");
    document.body.classList.add("nav-open");
  }

  toggle.addEventListener("click", () => {
    if (isOpen()) closeMenu();
    else openMenu();
  });

  backdrop?.addEventListener("click", closeMenu);
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) closeMenu();
  });
}

function initChat() {
  const chat = document.getElementById("chat");
  const form = document.getElementById("chat-form");
  const input = document.getElementById("message");
  const examples = document.querySelectorAll(".example");
  if (!chat || !form || !input) return;

  function appendUserMessage(text) {
    chat.appendChild(createMessageElement(text, "user"));
    chat.scrollTop = chat.scrollHeight;
  }

  function appendAssistantMessage(text) {
    chat.appendChild(createMessageElement(text, "assistant"));
    chat.scrollTop = chat.scrollHeight;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    appendUserMessage(text);
    input.value = "";
    const loading = createMessageElement("Thinking...", "assistant");
    chat.appendChild(loading);
    chat.scrollTop = chat.scrollHeight;
    try {
      const resp = await sendMessage(text);
      loading.remove();
      appendAssistantMessage(resp);
    } catch (err) {
      loading.remove();
      appendAssistantMessage("Sorry, something went wrong.");
      console.error(err);
    }
  });

  examples.forEach((btn) => {
    btn.addEventListener("click", () => {
      input.value = btn.textContent.trim();
      input.focus();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initChat();
});

window.sendMessage = sendMessage;
