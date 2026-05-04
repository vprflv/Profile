'use client';
import React, { useState } from "react";
import { Send } from "lucide-react";
export default function Contact() {
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!agreed) return;
        alert('✅ Сообщение отправлено! (в реальном проекте подключи Telegram Bot или Email)');
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-screen-2xl mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-16">

                    {/* Левая колонка */}
                    <div className="md:col-span-5">
                        <span
                            className="uppercase tracking-widest text-emerald-900 text-sm font-medium">05 / Контакты</span>
                        <h2 className="section-header text-5xl font-semibold tracking-tighter mt-3 text-slate-900">
                            Давайте работать вместе
                        </h2>
                        <p className="mt-6 text-lg text-slate-600">Отвечу в течение 24 часов.</p>

                        {/* Соцсети */}
                        <div className="mt-10">
                            <p className="text-sm text-slate-500 mb-4">Или пишите напрямую:</p>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://t.me/vp_dev_fs" target="_blank"
                                   className="flex items-center gap-3 px-5 py-3 bg-slate-100 hover:bg-slate-200 rounded-2xl transition">
                                    <Send size={22} className="text-emerald-600"/>
                                    <span className="font-medium">Telegram</span>
                                </a>
                                <a href="https://linkedin.com/in/виктор-перфильев-1ba17ba3" target="_blank"
                                   className="flex items-center gap-3 px-5 py-3 bg-slate-100 hover:bg-slate-200 rounded-2xl transition">
                                    <span className="text-2xl">💼</span>
                                    <span className="font-medium">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Правая колонка — форма */}
                    <div className="md:col-span-7">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-stone-100 border border-slate-200 p-6 sm:p-8 md:p-10 rounded-3xl space-y-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Ваше имя"
                                    required
                                    className="bg-white border-2 border-slate-200 rounded-3xl px-6 py-5 focus:border-emerald-400 outline-none text-base"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="bg-white border-2 border-slate-200 rounded-3xl px-6 py-5 focus:border-emerald-400 outline-none text-base"
                                />
                            </div>

                            <textarea
                                placeholder="Расскажите о вашем проекте..."
                                rows={6}
                                required
                                className="w-full bg-white border-2 border-slate-200 rounded-3xl px-6 py-5 focus:border-emerald-400 outline-none resize-none text-base"
                            />

                            {/* Чекбокс */}
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="mt-1 w-5 h-5 accent-emerald-600 cursor-pointer"
                                />
                                <label
                                    htmlFor="privacy"
                                    className="text-sm text-slate-600 cursor-pointer leading-relaxed"
                                >
                                    Я согласен с{' '}
                                    <a href="/privacy" className="underline hover:text-emerald-600">
                                        политикой конфиденциальности
                                    </a>
                                </label>
                            </div>

                            {/* Кнопка */}
                            <button
                                type="submit"
                                disabled={!agreed}
                                className="w-full py-6 bg-emerald-900 cursor-pointer hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-3xl text-lg transition-all active:scale-[0.985]"
                            >
                                Отправить сообщение
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}