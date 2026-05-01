export default function Experience() {
    return (
        <section id="experience" className="py-16 md:py-24 bg-stone-200">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
                <span className="uppercase tracking-widest text-emerald-600 text-sm font-medium">
                    04 / Опыт
                </span>
                <h2 className="section-header text-4xl sm:text-5xl md:text-5xl font-semibold tracking-tighter mt-3 mb-10 md:mb-12 text-slate-900">
                    Мой путь
                </h2>

                <div className="space-y-8 md:space-y-10 max-w-3xl">
                    {/* Первый блок опыта */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                        <div className="md:w-56 text-slate-500 font-medium shrink-0">
                            2015 — 2025
                        </div>
                        <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8">
                            <h3 className="text-xl font-semibold text-slate-900">Менеджер</h3>
                            <p className="text-slate-600 mt-4 leading-relaxed">
                                10 лет работы в сфере продаж и поставок автозапчастей.
                                Хорошо знаю бизнес-процессы автосервисов, магазинов и поставщиков изнутри.
                                Это помогает мне создавать технические решения, которые реально закрывают боли
                                владельцев и менеджеров автобизнеса.
                            </p>

                            <p className="text-slate-600 mt-6 text-[15px] leading-relaxed">
                                Всё это время параллельно изучал веб-разработку: начинал с нативного JavaScript,
                                WordPress, немного рисовал в Photoshop. Позже перешёл на React и TypeScript.
                                Next.js открыл для себя примерно полтора года назад и с тех пор активно работаю именно на нём.
                                Периодически писал pet-проекты и небольшие скрипты — готовил фундамент для перехода в разработку.
                            </p>
                        </div>
                    </div>

                    {/* Второй блок опыта */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                        <div className="md:w-56 text-slate-500 font-medium shrink-0">
                            2025 — настоящее время
                        </div>
                        <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8">
                            <h3 className="text-xl font-semibold text-slate-900">
                                Full Stack Developer (Фриланс)
                            </h3>
                            <p className="text-slate-600 mt-4 leading-relaxed">
                                Разработка современных веб-приложений и сайтов на Next.js.
                                Специализируюсь на проектах для малого и среднего бизнеса.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}