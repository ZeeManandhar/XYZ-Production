import { Bot, CalendarCheck, MessageCircle, Send, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const quickPrompts = [
  "What services do you offer?",
  "Show packages",
  "How do I book?",
  "Contact studio"
];

const getBotReply = (message) => {
  const text = message.toLowerCase();

  if (text.includes("package") || text.includes("price") || text.includes("cost")) {
    return "Our packages start with Basic, Standard, and Premium options. Basic is best for short sessions, Standard works well for most portraits and events, and Premium is ideal for full-day coverage.";
  }

  if (text.includes("book") || text.includes("appointment") || text.includes("date") || text.includes("shoot")) {
    return "You can book a shoot by sharing your name, email, phone, shoot type, preferred date, and message. The studio team will follow up to confirm availability and creative direction.";
  }

  if (text.includes("service") || text.includes("wedding") || text.includes("portrait") || text.includes("event") || text.includes("product") || text.includes("studio")) {
    return "XYZ Production offers wedding photography, portrait photography, event photography, product photography, and studio shoots with professional editing and guided session planning.";
  }

  if (text.includes("portfolio") || text.includes("work") || text.includes("gallery")) {
    return "You can explore our portfolio by category: Wedding, Portrait, Event, Product, and Studio. Use the filter buttons on the Portfolio page to browse each style.";
  }

  if (text.includes("contact") || text.includes("message") || text.includes("phone") || text.includes("email") || text.includes("location") || text.includes("address")) {
    return "Contact XYZ Production: Phone: +91 98765 43210. Email: hello@xyzproduction.com. Address: 123 Studio Street, Creative City, 110001. You can also use the Contact page form to send a message directly to the studio.";
  }

  return "I can help with services, packages, portfolio, booking, and contact details. Ask me what you need for your photography session.";
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi, I am the XYZ studio assistant. How can I help with your photography shoot?"
    }
  ]);

  const lastMessage = useMemo(() => messages[messages.length - 1], [messages]);

  const sendMessage = (message = input) => {
    const trimmed = message.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "bot", text: getBotReply(trimmed) }
    ]);
    setInput("");
    setOpen(true);
  };

  return (
    <div className="chatbot">
      {open && (
        <section className="chatbot-panel" aria-label="XYZ Production chatbot">
          <header className="chatbot-header">
            <span><Bot size={20} /> Studio Assistant</span>
            <button aria-label="Close chatbot" onClick={() => setOpen(false)} type="button">
              <X size={18} />
            </button>
          </header>

          <div className="chatbot-messages" aria-live="polite">
            {messages.map((message, index) => (
              <p className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>
                {message.text}
              </p>
            ))}
          </div>

          <div className="chatbot-prompts">
            {quickPrompts.map((prompt) => (
              <button key={prompt} onClick={() => sendMessage(prompt)} type="button">
                {prompt}
              </button>
            ))}
          </div>

          <form
            className="chatbot-form"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <input
              aria-label="Type your question"
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about services or booking"
              value={input}
            />
            <button aria-label="Send message" type="submit"><Send size={17} /></button>
          </form>

          <Link className="chatbot-book-link" to="/book">
            <CalendarCheck size={17} /> Book a Shoot
          </Link>
        </section>
      )}

      <button
        aria-label={open ? "Close chatbot" : `Open chatbot. Last message: ${lastMessage.text}`}
        className="chatbot-toggle"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
