'use client';
import { useState } from 'react';
import { plans } from "@/lib/data";

export default function Pricing() {
    const [activePlan, setActivePlan] = useState(2); // по умолчанию средний

    return (
        <section id="pricing" className="py-16 md:py-24 bg-emerald-900">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
                <span className="uppercase tracking-widest text-emerald-600 text-sm font-medium">
                    06 / Цены
                </span>
                <h2 className="section-header text-4xl sm:text-5xl md:text-5xl font-semibold tracking-tighter mt-3 mb-10 md:mb-12 text-white">
                    Примерная стоимость
                </h2>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            onClick={() => setActivePlan(plan.id)}
                            className={`rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-300 border ${
                                activePlan === plan.id
                                    ? 'bg-slate-900 text-white border-slate-700 shadow-2xl scale-[1.03]'
                                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                            }`}
                        >
                            <h3 className="text-xl sm:text-2xl font-semibold">{plan.title}</h3>

                            <p className={`text-4xl sm:text-5xl font-bold mt-6 ${activePlan === plan.id ? 'text-white' : 'text-slate-900'}`}>
                                {plan.price}
                            </p>

                            <ul className="mt-8 space-y-3 text-base">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="text-emerald-500 text-lg">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <p className={`text-xs mt-8 ${activePlan === plan.id ? 'text-slate-400' : 'text-slate-500'}`}>
                                {plan.period}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="text-center text-white mt-12 text-sm px-4">
                    Точная стоимость зависит от сложности и объёма работ.<br />
                    Напишите — сделаем расчёт под ваш проект.
                </p>
            </div>
        </section>
    );
}