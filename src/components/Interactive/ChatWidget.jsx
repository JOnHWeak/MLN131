import React, { useEffect, useRef, useState } from 'react';

const SYSTEM_PROMPT = `Bạn là trợ lý AI cho ứng dụng học tập về "Tôn giáo và ý thức hệ".
Trả lời ngắn gọn, chuẩn mực, bám sát nội dung các mục: quan điểm Mác-Lênin về tôn giáo; tôn giáo trong XHCN; chính sách tôn giáo ở Việt Nam; thực tiễn và giải pháp.
Nếu câu hỏi vượt ngoài phạm vi, hãy trả lời khái quát và hướng người dùng đến các mục tương ứng trong ứng dụng.`;

const ChatWidget = () => {
    const [open, setOpen] = useState(false);
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
    const [loading, setLoading] = useState(false);
    const modelId = import.meta.env.VITE_GEMINI_MODEL || 'gemini-1.5-flash-latest';
    const [messages, setMessages] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('chat_messages') || '[]');
        } catch {
            return [];
        }
    });
    const inputRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('chat_messages', JSON.stringify(messages));
    }, [messages]);

    const sendMessage = async (text) => {
        if (!text.trim()) return;
        const userMsg = { role: 'user', content: text.trim(), ts: Date.now() };
        setMessages((m) => [...m, userMsg]);
        setLoading(true);

        try {
            let reply = '';

            if (apiKey) {
                const contents = [];
                // System prompt as primer
                contents.push({ role: 'user', parts: [{ text: SYSTEM_PROMPT }] });
                // Previous messages condensed
                messages.forEach(m => {
                    contents.push({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] });
                });
                contents.push({ role: 'user', parts: [{ text }] });

                // Use v1beta endpoint which supports generateContent for these models
                const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`;
                const resp = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ contents, generationConfig: { temperature: 0.2, maxOutputTokens: 300 } })
                });
                const data = await resp.json();
                if (!resp.ok) {
                    const errMsg = data?.error?.message || 'Yêu cầu thất bại.';
                    reply = `Không thể trả lời: ${errMsg}`;
                    console.error('Gemini API error:', data);
                } else {
                    reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Xin lỗi, hiện không thể trả lời.';
                }
            } else {
                reply = 'Bạn có thể xem mục tương ứng trong thanh điều hướng: Giới thiệu, Quan điểm Mác-Lênin, XHCN, Chính sách VN, Thực tiễn, Giải pháp, Kết luận. Thêm VITE_GEMINI_API_KEY trong .env hoặc Vercel Env để bật trả lời AI.';
            }

            setMessages((m) => [...m, { role: 'assistant', content: reply, ts: Date.now() }]);
        } catch (e) {
            console.error('Chat error:', e);
            setMessages((m) => [...m, { role: 'assistant', content: 'Có lỗi kết nối (CORS/Network). Hãy tải lại trang hoặc kiểm tra .env.', ts: Date.now() }]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current?.value || '';
        inputRef.current.value = '';
        sendMessage(value);
    };

    return (
        <>
            {/* Floating chat bubble button */}
            <button
                onClick={() => setOpen(true)}
                aria-label="Chat với AI"
                className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 flex items-center justify-center shadow-glow btn-primary-portfolio"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12c0 3.866-3.582 7-8 7-1.03 0-2.01-.16-2.91-.45L5 20l1.52-3.04C5.58 15.88 5 14.5 5 13c0-3.866 3.582-7 8-7s8 3.134 8 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9.5" cy="12" r="1.25" fill="white" />
                    <circle cx="13" cy="12" r="1.25" fill="white" />
                    <circle cx="16.5" cy="12" r="1.25" fill="white" />
                </svg>
            </button>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 z-50">
                    <div className="absolute inset-0" onClick={() => setOpen(false)} />
                    <div className="absolute bottom-20 right-6 w-[95vw] max-w-sm glass rounded-2xl overflow-hidden animate-slide-up shadow-xl">
                        <div className="px-4 py-3 border-b border-gray-700 flex items-center justify-between bg-gray-900/40">
                            <h3 className="text-white font-semibold">Trợ lý học tập</h3>
                            <button onClick={() => setOpen(false)} className="text-gray-300 hover:text-white">✕</button>
                        </div>

                        {!apiKey && (
                            <div className="mb-3 text-xs text-yellow-300">
                                Chưa cấu hình API key. Thêm biến môi trường VITE_GEMINI_API_KEY để bật trả lời AI.
                            </div>
                        )}

                        {/* Messages */}
                        <div className="h-72 overflow-y-auto px-3 pt-3 bg-gray-900/20">
                            {messages.length === 0 && (
                                <div className="text-sm text-gray-400">Hỏi mình về các mục học: Mác-Lênin, tôn giáo trong XHCN, chính sách VN, thực tiễn, giải pháp...</div>
                            )}
                            {messages.map((m, i) => {
                                const isAI = m.role === 'assistant';
                                return (
                                    <div key={i} className={`mb-2 flex ${isAI ? 'justify-start' : 'justify-end'}`}>
                                        <div className={`max-w-[85%] whitespace-pre-wrap leading-relaxed px-3 py-2 rounded-2xl ${isAI ? 'bg-gray-800 text-blue-100 rounded-bl-sm' : 'bg-blue-600 text-white rounded-br-sm'}`}>
                                            {m.content}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-3 border-t border-gray-700 bg-gray-900/40 flex gap-2">
                            <input ref={inputRef} className="flex-1 input-field" placeholder="Nhập câu hỏi..." />
                            <button disabled={loading} className="btn-primary-portfolio">{loading ? 'Đang trả lời...' : 'Gửi'}</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatWidget;


