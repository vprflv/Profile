export default function Projects() {
    return (
        <section id="projects" className="py-16 md:py-24 bg-emerald-900">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
                <span className="uppercase tracking-widest text-emerald-600 text-sm font-medium">
                    03 / Портфолио
                </span>
                <h2 className="section-header text-4xl sm:text-5xl md:text-5xl font-semibold tracking-tighter mt-3 mb-10 md:mb-12 text-white">
                    Избранные проекты
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* проект */}
                    <div className="bg-white border-3 cursor-pointer border-stone-300 rounded-3xl overflow-hidden card-hover group">
                        <div className="h-56 sm:h-64 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                            <span className="text-6xl">🛠️</span>
                        </div>
                        <div className="p-6 sm:p-8">
                            <h3 className="text-xl sm:text-2xl font-semibold text-stone-900">
                                Интернет-магазин автозапчастей
                            </h3>
                            <p className="text-stone-600 mt-3 text-[15px] sm:text-base">
                                Магазин автозапчастей с фильтрами, корзиной и интеграциями.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-6">
                                <span className="text-xs bg-stone-100 px-4 py-2 rounded-3xl">Next.js </span>
                                <span className="text-xs bg-stone-100 px-4 py-2 rounded-3xl">Supabase</span>
                                <span className="text-xs bg-stone-100 px-4 py-2 rounded-3xl">TanStack Query</span>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 mt-8">
                                <a
                                    href="https://auto-parts-beige.vercel.app/?page=1"
                                    target="_blank"
                                    className="flex-1 text-center py-4 border border-stone-300 rounded-3xl hover:bg-slate-50 font-medium transition-colors"
                                >
                                    Посмотреть сайт
                                </a>
                                <a
                                    href="https://github.com/viktorprf234/AutoParts.git"
                                    target="_blank"
                                    className="flex-1 text-center py-4 border border-stone-300 rounded-3xl hover:bg-slate-50 font-medium transition-colors"
                                >
                                    🐙 GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* проект 2 */}
                    <div className="bg-white border-3 cursor-pointer border-stone-300 rounded-3xl overflow-hidden card-hover group">
                        <div className="h-56 sm:h-64 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                            <span className="text-6xl">🛠️</span>
                        </div>
                        <div className="p-6 sm:p-8">
                            <h3 className="text-xl sm:text-2xl font-semibold text-stone-900">
                                Одностраничный сайт для подбора автомобилей

                            </h3>
                            <p className="text-stone-600 mt-3 text-[15px] sm:text-base">
                                Сайт для подора автомобиля с фильтрами, поиском и отправкой письма
                            </p>
                            <div className="flex flex-wrap gap-2 mt-6">
                                <span className="text-xs bg-stone-100 px-4 py-2 rounded-3xl">Next.js</span>
                                <span className="text-xs bg-stone-100 px-4 py-2 rounded-3xl">Supabase</span>

                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 mt-8">
                                <a
                                    href="https://auto-pick.vercel.app"
                                    target="_blank"
                                    className="flex-1 text-center py-4 border border-stone-300 rounded-3xl hover:bg-slate-50 font-medium transition-colors"
                                >
                                    Посмотреть сайт
                                </a>
                                <a
                                    href="https://github.com/viktorprf234/AutoPick.git"
                                    target="_blank"
                                    className="flex-1 text-center py-4 border border-stone-300 rounded-3xl hover:bg-slate-50 font-medium transition-colors"
                                >
                                    🐙 GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}