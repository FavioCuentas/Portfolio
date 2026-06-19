"use client";

import React, { useState, useRef, useEffect } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '¡Hola! Soy el Gemelo Digital de Favio. ¿En qué te puedo ayudar hoy o qué te gustaría saber sobre mi trayectoria?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMsg }].map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) throw new Error('Network error');

      const data = await response.json();
      const assistantMsg = data.choices?.[0]?.message?.content || "Hubo un error al procesar mi respuesta.";
      
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMsg }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Lo siento, tuve un problema de conexión. ¿Podrías intentar nuevamente?' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    "¿Cuáles fueron tus principales logros en Datec Corp?",
    "¿Qué significa ser Master Black Belt en Lean Six Sigma?",
    "¿Cómo aplicas la Inteligencia de Negocios en tus proyectos?",
    "Cuéntame sobre tu rol actual en Force One System Technologies."
  ];

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  return (
    <section id="ai-chat" className="section" style={{ background: 'rgba(0,0,0,0.1)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="animate-fade-in text-gradient" style={{ display: 'inline-block', fontSize: '2.5rem' }}>
            Habla con mi Gemelo Digital
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--accent-primary)', margin: '1rem auto', borderRadius: '2px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto' }}>
            He entrenado a este asistente de Inteligencia Artificial con mi currículum, experiencia y filosofía de trabajo. Puedes hacerle cualquier pregunta profesional.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
          
          {/* Suggestions Side */}
          <div className="animate-fade-in delay-100">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>Preguntas sugeridas</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>
              Haz clic en cualquiera de estas sugerencias para comenzar la conversación:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {suggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="glass-panel"
                  style={{
                    padding: '1rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    background: 'rgba(255, 255, 255, 0.02)',
                    transition: 'all 0.3s ease',
                    color: 'rgba(255,255,255,0.9)',
                    border: '1px solid rgba(0, 229, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 229, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{ color: 'var(--accent-primary)' }}>→</span>
                  <span>{suggestion}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Interface Side */}
          <div className="glass-panel animate-fade-in delay-200" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '600px', border: '1px solid rgba(124, 77, 255, 0.3)' }}>
            {/* Header */}
            <div style={{
              padding: '1.25rem',
              background: 'linear-gradient(90deg, rgba(124, 77, 255, 0.15), rgba(0, 229, 255, 0.15))',
              borderBottom: '1px solid var(--glass-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00E5FF', boxShadow: '0 0 12px #00E5FF' }}></div>
              <div>
                <h3 style={{ fontSize: '1.1rem', margin: 0, fontFamily: 'var(--font-display)', color: '#fff' }}>Favio (Gemelo Digital)</h3>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>En línea - Inteligencia Artificial</span>
              </div>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  style={{
                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '85%',
                    padding: '0.85rem 1.25rem',
                    borderRadius: '12px',
                    background: msg.role === 'user' ? 'linear-gradient(90deg, rgba(124, 77, 255, 0.3), rgba(0, 229, 255, 0.3))' : 'rgba(255, 255, 255, 0.05)',
                    border: msg.role === 'user' ? '1px solid rgba(0, 229, 255, 0.2)' : '1px solid var(--glass-border)',
                    fontSize: '0.95rem',
                    lineHeight: 1.5,
                    borderBottomRightRadius: msg.role === 'user' ? '4px' : '12px',
                    borderBottomLeftRadius: msg.role === 'assistant' ? '4px' : '12px',
                  }}
                >
                  {msg.content}
                </div>
              ))}
              {isLoading && (
               <div style={{
                  alignSelf: 'flex-start',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  borderBottomLeftRadius: '4px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }}></div>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }}></div>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }}></div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} style={{
              padding: '1.25rem',
              background: 'rgba(0,0,0,0.4)',
              borderTop: '1px solid var(--glass-border)',
              display: 'flex',
              gap: '0.75rem'
            }}>
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Escribe tu pregunta aquí..."
                disabled={isLoading}
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '25px',
                  padding: '0.75rem 1.5rem',
                  color: '#fff',
                  outline: 'none',
                  fontFamily: 'inherit',
                  fontSize: '0.95rem'
                }}
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                aria-label="Enviar mensaje"
                style={{
                  background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                  border: 'none',
                  borderRadius: '50%',
                  width: '45px',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: (isLoading || !input.trim()) ? 'not-allowed' : 'pointer',
                  opacity: (isLoading || !input.trim()) ? 0.5 : 1,
                  transition: 'transform 0.2s ease',
                  transform: (isLoading || !input.trim()) ? 'scale(1)' : 'scale(1.05)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
