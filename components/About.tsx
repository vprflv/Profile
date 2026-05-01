export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-emerald-900">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-12 gap-10 md:gap-16">
                    {/* Левая колонка — заголовок */}
                    <div className="md:col-span-5">
                        <span className="uppercase tracking-widest text-emerald-600 text-sm font-medium">
                            01 / Обо мне
                        </span>
                        <h2 className="section-header text-4xl sm:text-5xl md:text-5xl font-semibold tracking-tighter mt-3 text-white">
                            Кто я
                        </h2>
                    </div>

                    {/* Правая колонка — текст */}
                    <div className="md:col-span-7 space-y-6 text-base sm:text-lg text-white">
                        <p>
                            Привет! Я Full Stack разработчик. Специализируюсь на Next.js, TypeScript и современных веб-технологиях.
                        </p>
                        <p>
                            Занимаюсь разработкой как фронтенда, так и бэкенда — могу сделать проект от идеи до полностью рабочего продукта.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}