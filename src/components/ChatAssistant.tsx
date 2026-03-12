"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
    role: "user" | "assistant" | "system";
    content: string;
}

export default function ChatAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hello! I am AI, your open-source learning companion powered by SkillNest. I can accurately answer any coding query, explain course details, or assist with anything else. What's on your mind?",
        },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim() || isTyping) return;

        const userMessage = input.trim();
        setInput("");

        // Add user message to state
        const updatedMessages: Message[] = [...messages, { role: "user", content: userMessage }];
        setMessages(updatedMessages);
        setIsTyping(true);

        // Prepare a placeholder for the assistant's response
        setMessages(prev => [...prev, { role: "assistant", content: "" }]);

        try {
            // Build the prompt context
            const apiMessages = [
                { role: "system", content: "You are 'AI', a highly intelligent learning assistant for SkillNest. You provide accurate, detailed, and professional responses. You specialize in web development (React, Next.js, Node.js), Data Science (Python, ML), and UI/UX design. When asked about pricing, mention they range from ₹349 to ₹449 with lifetime access." },
                ...updatedMessages.map(m => ({ role: m.role, content: m.content }))
            ];

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: apiMessages,
                }),
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();
            let assistantResponse = "";

            if (reader) {
                setIsTyping(false); // Stop typing indicator once stream starts
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    const chunk = decoder.decode(value, { stream: true });
                    const lines = chunk.split("\n");

                    for (const line of lines) {
                        if (line.startsWith("data: ") && line !== "data: [DONE]") {
                            try {
                                const parsed = JSON.parse(line.substring(6));
                                const content = parsed.choices[0]?.delta?.content || "";
                                assistantResponse += content;

                                // Update the last message (the assistant's response)
                                setMessages(prev => {
                                    const newMessages = [...prev];
                                    const lastIdx = newMessages.length - 1;
                                    newMessages[lastIdx] = { role: "assistant", content: assistantResponse };
                                    return newMessages;
                                });
                            } catch (e) {
                                console.error("Error parsing JSON chunk", e);
                            }
                        }
                    }
                }
            }
        } catch (error) {
            console.error("AI Error:", error);
            setMessages(prev => {
                const newMessages = [...prev];
                const lastIdx = newMessages.length - 1;
                newMessages[lastIdx] = {
                    role: "assistant",
                    content: "I apologize, but I encountered an error connecting to my core brain. Please try again in a moment."
                };
                return newMessages;
            });
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            {/* Floating Toggle Icon (AI Logo) */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-8 right-8 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 border border-purple-500/50 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-110 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] group"
                >
                    <div className="text-sm font-black tracking-tighter bg-gradient-to-br from-purple-400 to-sky-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                        AI
                    </div>
                    <div className="absolute -inset-1 rounded-full bg-purple-500/10 blur opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
            )}

            {/* ChatGPT-Style Sidebar */}
            <div
                className={`fixed inset-y-0 right-0 z-[100] w-full max-w-md border-l border-slate-800 bg-slate-950/95 shadow-2xl backdrop-blur-2xl transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex h-full flex-col">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 p-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 text-[10px] font-black tracking-tighter text-white shadow-lg">
                                AI
                            </div>
                            <div>
                                <h2 className="text-sm font-bold text-slate-50">AI Assistant</h2>
                                <div className="flex items-center gap-1.5">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Open Way</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-900 hover:text-slate-200"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Chat Interface Area */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
                        {messages.map((msg, i) => (
                            msg.role !== 'system' && (
                                <div key={i} className={`flex gap-4 ${msg.role === "assistant" ? "items-start" : "items-end flex-row-reverse"}`}>
                                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold ${msg.role === "assistant"
                                        ? "bg-slate-800 text-purple-400 border border-slate-700"
                                        : "bg-purple-600 text-white"
                                        }`}>
                                        {msg.role === "assistant" ? "AI" : "YOU"}
                                    </div>
                                    <div className={`flex flex-col gap-2 max-w-[85%] ${msg.role === "user" ? "items-end" : "items-start"}`}>
                                        <div className={`rounded-2xl px-5 py-3 text-sm leading-relaxed ${msg.role === "assistant"
                                            ? "text-slate-300"
                                            : "bg-slate-800/80 text-white border border-slate-700/50"
                                            }`}>
                                            {msg.content || (msg.role === "assistant" ? "..." : "")}
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                        {isTyping && (
                            <div className="flex gap-4 items-start">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-[10px] font-bold text-purple-400 border border-slate-700">
                                    AI
                                </div>
                                <div className="flex gap-1.5 p-3 rounded-2xl bg-slate-800/30">
                                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-500" />
                                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-500 [animation-delay:0.2s]" />
                                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-500 [animation-delay:0.4s]" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggestions Layer */}
                    <div className="px-6 pb-2">
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={() => { setInput("Explain Next.js App Router vs Pages Router"); }}
                                className="rounded-xl border border-slate-800 p-2.5 text-left text-[10px] text-slate-400 transition hover:border-purple-500/30 hover:bg-slate-900"
                            >
                                Next.js Routers
                            </button>
                            <button
                                onClick={() => { setInput("How is Python used in Machine Learning?"); }}
                                className="rounded-xl border border-slate-800 p-2.5 text-left text-[10px] text-slate-400 transition hover:border-purple-500/30 hover:bg-slate-900"
                            >
                                Python in ML
                            </button>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-6">
                        <div className="relative">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSend();
                                    }
                                }}
                                rows={1}
                                placeholder="Ask AI anything..."
                                className="w-full resize-none rounded-2xl border border-slate-800 bg-slate-900 p-4 pr-14 text-sm text-slate-100 outline-none transition focus:border-purple-500/50 focus:shadow-[0_0_20px_rgba(168,85,247,0.1)]"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!input.trim() || isTyping}
                                className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-xl bg-purple-600 text-white transition-all hover:bg-purple-500 active:scale-90 disabled:opacity-50 disabled:grayscale"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                        <p className="mt-4 text-center text-[10px] text-slate-600 font-medium">
                            AI can make mistakes. Powered by Llama-3.2
                        </p>
                    </div>
                </div>
            </div>

            {/* Backdrop for closing */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300"
                />
            )}
        </>
    );
}
