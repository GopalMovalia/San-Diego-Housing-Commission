import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchKnowledge, type SearchResult } from '../data/knowledgeBase';
import './AIAssistantWidget.css';

interface Message {
  role: 'user' | 'assistant';
  text: string;
  results?: SearchResult[];
}

const WELCOME: Message = {
  role: 'assistant',
  text: "Hi! I'm the SDHC AI Assistant 👋\n\nI can help you find housing programs, explain eligibility rules, or guide you through the application process. What can I help you with today?",
};

const SUGGESTIONS = [
  'How do I apply for Section 8?',
  'Am I eligible for rental assistance?',
  'What documents do I need?',
  'Veterans housing programs',
  'First-time homebuyer down payment',
];

function buildReply(query: string, results: SearchResult[]): string {
  if (results.length === 0) {
    return `I couldn't find specific information about "${query}". Please call us at (619) 231-9400 or visit our Contact page for personalized help.`;
  }
  const top = results[0];
  return `Here's what I found about **${top.title}**:\n\n${top.summary}${results.length > 1 ? `\n\nI also found ${results.length - 1} more related result${results.length > 2 ? 's' : ''} below.` : ''}`;
}

const AIAssistantWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    // Simulate latency then reply
    setTimeout(() => {
      const results = searchKnowledge(text);
      const replyText = buildReply(text, results);
      setMessages(prev => [...prev, { role: 'assistant', text: replyText, results }]);
      setTyping(false);
    }, 900 + Math.random() * 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* FAB Button */}
      <button
        className={`ai-fab${open ? ' is-open' : ''}`}
        onClick={() => setOpen(prev => !prev)}
        aria-label={open ? 'Close AI assistant' : 'Open AI assistant'}
        aria-expanded={open}
        aria-controls="ai-chat-panel"
      >
        <div className="ai-fab__pulse" aria-hidden="true" />
        <span className="ai-fab__icon" aria-hidden="true">
          {open ? (
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16v-4H8l4-8v4h4l-4 8z" fill="currentColor"/>
            </svg>
          )}
        </span>
        <span className="ai-fab__label">AI Help</span>
      </button>

      {/* Chat Panel */}
      <div
        id="ai-chat-panel"
        className={`ai-panel${open ? ' is-open' : ''}`}
        role="dialog"
        aria-label="SDHC AI Assistant"
        aria-modal="false"
      >
        {/* Header */}
        <div className="ai-panel__header">
          <div className="ai-panel__header-info">
            <div className="ai-panel__avatar" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{width:18,height:18}}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16v-4H8l4-8v4h4l-4 8z"/>
              </svg>
            </div>
            <div>
              <div className="ai-panel__name">SDHC AI Assistant</div>
              <div className="ai-panel__status">
                <span className="ai-panel__status-dot" aria-hidden="true" />
                Online — powered by local knowledge
              </div>
            </div>
          </div>
          <button
            className="ai-panel__close"
            onClick={() => setOpen(false)}
            aria-label="Close AI assistant"
          >
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="ai-panel__messages" role="log" aria-live="polite" aria-label="Chat messages">
          {messages.map((msg, i) => (
            <div key={i} className={`ai-msg ai-msg--${msg.role}`}>
              <div className="ai-msg__bubble">
                {msg.text.split('\n').map((line, j) => (
                  line ? <p key={j}>{line.replace(/\*\*(.*?)\*\*/g, '$1')}</p> : <br key={j} />
                ))}
              </div>
              {/* Results links */}
              {msg.results && msg.results.length > 0 && (
                <div className="ai-msg__results">
                  {msg.results.map((r, k) => (
                    <button
                      key={k}
                      className="ai-msg__result-link"
                      onClick={() => { navigate(r.link); setOpen(false); }}
                    >
                      <span className="ai-msg__result-cat">{r.category}</span>
                      <span className="ai-msg__result-title">{r.title}</span>
                      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {typing && (
            <div className="ai-msg ai-msg--assistant">
              <div className="ai-msg__bubble ai-typing">
                <span /><span /><span />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        {messages.length <= 1 && (
          <div className="ai-suggestions" aria-label="Quick questions">
            {SUGGESTIONS.map(s => (
              <button key={s} className="ai-suggestion-chip" onClick={() => sendMessage(s)}>
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form className="ai-panel__input" onSubmit={handleSubmit}>
          <label htmlFor="ai-input" className="sr-only">Ask a question</label>
          <input
            id="ai-input"
            ref={inputRef}
            type="text"
            placeholder="Ask about housing programs..."
            value={input}
            onChange={e => setInput(e.target.value)}
            autoComplete="off"
            className="ai-input-field"
          />
          <button
            type="submit"
            className="ai-send-btn"
            aria-label="Send message"
            disabled={!input.trim() || typing}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" style={{width:18,height:18}}>
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default AIAssistantWidget;
