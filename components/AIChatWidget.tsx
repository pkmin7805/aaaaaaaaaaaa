import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Minimize2, Maximize2, Bot, Paperclip } from 'lucide-react';
import { createConstructionChat } from '../services/gemini';
import { ChatMessage } from '../types';
import ReactMarkdown from 'react-markdown';
import { Chat, GenerateContentResponse } from "@google/genai";

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "반갑습니다. **태림지반 업무 지원 AI**입니다.\n\n공사 일보 작성, 안전 규정 조회, 자재 산출 등 업무에 필요한 내용을 지시해 주세요." }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Initialize chat session on mount
  useEffect(() => {
    try {
      const session = createConstructionChat();
      setChatSession(session);
    } catch (error) {
      console.error("Failed to initialize chat session", error);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || !chatSession || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      setMessages(prev => [...prev, { role: 'model', text: "", isStreaming: true }]);

      const result = await chatSession.sendMessageStream({ message: userMessage });
      
      let fullText = "";
      
      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        const textChunk = c.text || "";
        fullText += textChunk;
        
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMsg = newMessages[newMessages.length - 1];
          if (lastMsg.role === 'model' && lastMsg.isStreaming) {
            lastMsg.text = fullText;
          }
          return newMessages;
        });
      }

      setMessages(prev => {
        const newMessages = [...prev];
        const lastMsg = newMessages[newMessages.length - 1];
        lastMsg.isStreaming = false;
        return newMessages;
      });

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [
        ...prev, 
        { role: 'model', text: "시스템 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary-700 hover:bg-primary-800 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center group"
      >
        <Bot size={28} />
        <span className="absolute right-full mr-4 bg-slate-800 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-bold">
          업무 AI 비서
        </span>
      </button>
    );
  }

  return (
    <div 
      className={`fixed z-50 bg-white shadow-2xl rounded-2xl flex flex-col transition-all duration-300 overflow-hidden border border-slate-200
        ${isExpanded 
          ? 'top-0 left-0 w-full h-full md:w-[800px] md:h-[80vh] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2' 
          : 'bottom-6 right-6 w-[400px] h-[600px] max-h-[80vh] max-w-[calc(100vw-48px)]'
        }`}
    >
      {/* Header */}
      <div className="bg-primary-800 p-4 flex justify-between items-center text-white shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 p-1.5 rounded-lg">
            <Bot size={20} className="text-accent-400" />
          </div>
          <div>
            <h3 className="font-bold text-sm">업무 지원 어시스턴트</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-[10px] text-slate-300">Online | Gemini 2.5 Flash</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
           <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 hover:bg-white/10 rounded-lg transition hidden md:block"
          >
            {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-white/10 rounded-lg transition"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] rounded-2xl p-4 shadow-sm text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-primary-600 text-white rounded-br-none' 
                  : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
              }`}
            >
              {msg.role === 'model' ? (
                 <div className="prose prose-sm prose-slate max-w-none dark:prose-invert">
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                    {msg.isStreaming && <span className="inline-block w-1.5 h-4 bg-primary-500 animate-pulse ml-1 align-middle"></span>}
                 </div>
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}
        {isLoading && !messages[messages.length - 1].isStreaming && (
             <div className="flex justify-start">
               <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-slate-200">
                  <Loader2 className="w-5 h-5 animate-spin text-primary-500" />
               </div>
             </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t shrink-0">
        <div className="flex gap-2 items-end">
          <button className="p-3 text-slate-400 hover:text-primary-600 hover:bg-slate-50 rounded-xl transition">
            <Paperclip size={20} />
          </button>
          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-primary-500 focus-within:bg-white transition flex items-center">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="요청사항을 입력하세요 (예: 오늘 강남 현장 일보 작성해줘)"
              className="flex-1 bg-transparent border-none focus:outline-none resize-none h-[24px] max-h-[100px] text-sm"
              disabled={isLoading}
              rows={1}
            />
          </div>
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-primary-700 text-white p-3 rounded-xl hover:bg-primary-800 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-md"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};