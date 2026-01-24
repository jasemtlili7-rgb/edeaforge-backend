const chat = document.getElementById("chat");
const input = document.getElementById("messageInput");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerText = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  // رد سريع (تجريبي)
  setTimeout(() => {
    addMessage(generateReply(text), "bot");
  }, 400);
}

function generateReply(message) {
  const lower = message.toLowerCase();

  if (lower.includes("hello") || lower.includes("hi") || lower.includes("مرحبا")) {
    return "مرحبا 👋 كيف نجم نعاونك اليوم؟";
  }

  if (lower.includes("صباح الخير")) {
    return "صباح النور ☀️ إن شاء الله نهارك يكون مليان طاقة ونجاح 💛";
  }

  if (lower.includes("idea") || lower.includes("فكرة")) {
    return "أعطيني الفكرة متاعك ونحوّلها لمشروع ناجح 🔥";
  }

  return "فهمتك 👍 أحكيلي أكثر باش نعاونك بدقة.";
}
