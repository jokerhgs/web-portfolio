import { useState, useRef, useEffect } from "react";
import { FaRegComments, FaTimes } from "react-icons/fa";
import { sendMessage } from "../_actions";

// Define a type for messages to avoid type errors
type Message = {
  from: "user" | "ai";
  text: string;
};

export const AIChatBox = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "ai", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [state, setState] = useState<"loading" | "error" | "">("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  // Use aiChatRepository for AI response with promise chain
  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    const userMessage: Message = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput("");
    setState("loading");
    sendMessage(input)
      .then((aiResponse) => {
        const message = aiResponse.candidates[0].content.parts[0].text;
        setMessages((msgs) => [
          ...msgs,
          {
            from: "ai",
            text: message,
          },
        ]);
      })
      .catch(() => {
        setMessages((msgs) => [
          ...msgs,
          {
            from: "ai",
            text: "Sorry, there was an error. Please try again.",
          },
        ]);
      })
      .finally(() => {
        setState("");
      });
  };

  const isLoading = state === "loading";

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        aria-label="Open AI Chat Support"
        onClick={() => setOpen((v) => !v)}
        className="fixed z-50 bottom-6 right-6 bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-accent transition-all focus:outline-none shadow-[0_4px_24px_0_rgba(0,0,0,0.15)]"
      >
        <FaRegComments size={28} />
      </button>
      {/* Chat Box */}
      {open && (
        <div className="fixed z-50 bottom-24 right-6 w-80 max-w-[95vw] bg-white dark:bg-zinc-900 border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-white">
            <span className="font-semibold">AI Chat Support</span>
            <button
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="text-white hover:text-accent focus:outline-none"
            >
              <FaTimes size={20} />
            </button>
          </div>
          <div className="flex-1 px-4 py-3 overflow-y-auto max-h-72 bg-background">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${
                    msg.from === "user"
                      ? "bg-primary text-white"
                      : "bg-accent/10 text-primary"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form
            onSubmit={handleSend}
            className="flex items-center border-t border-border bg-background px-2 py-2"
          >
            <input
              type="text"
              className="flex-1 px-3 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-white dark:bg-zinc-800"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) handleSend(e);
              }}
              autoComplete="off"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="ml-2 px-3 py-2 rounded-lg bg-primary text-white hover:bg-accent transition-all text-sm font-medium"
              disabled={!input.trim() || isLoading}
            >
              Send
            </button>
          </form>
          {/* Powered by Gemini note */}
          <div className="text-xs text-muted-foreground text-center py-2 bg-background border-t border-border">
            Powered by <span className="font-semibold">Gemini</span>
          </div>
        </div>
      )}
      {/* Tailwind animation for fade-in */}
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeInChat 0.25s;
        }
        @keyframes fadeInChat {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
};
