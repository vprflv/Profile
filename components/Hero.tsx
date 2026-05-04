'use client';
import { motion } from 'framer-motion';

export default function Hero() {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-stone-600 via-white to-emerald-200 flex items-center relative overflow-hidden pt-16 md:pt-0 pb-12 md:pb-20">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                {/* Левый блок с текстом */}
                <div className="space-y-4 md:space-y-8 text-center md:text-left order-2 md:order-1">
                    <h1 className="text-[2.1rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] heading-font text-stone-900">
                        Привет! Я — <span className="bg-emerald-600 bg-clip-text text-transparent">Виктор</span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-lg sm:text-xl md:text-2xl text-stone-800 font-medium">
                            Full Stack Developer
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="max-w-md mx-auto md:mx-0"
                    >
                        <p className="text-[15px] sm:text-base md:text-lg text-stone-700 leading-relaxed">
                            Создаю современные, быстрые и удобные веб-приложения на Next.js
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="pt-2 md:pt-6"
                    >
                        <button
                            onClick={scrollToProjects}
                            className="group mx-auto md:mx-0 px-7 sm:px-10 py-5 cursor-pointer bg-gradient-to-r from-emerald-700 to-emerald-900
                             hover:from-emerald-800 hover:to-emerald-950 text-white
                             font-semibold text-lg sm:text-xl rounded-3xl shadow-xl hover:shadow-2xl
                             transition-all duration-300 flex items-center gap-3 active:scale-95"
                        >
                            Мои проекты
                            <span className="text-2xl group-hover:translate-y-1 transition-transform">↓</span>
                        </button>
                    </motion.div>
                </div>

                {/* Фото — ещё меньше на телефоне */}
                <div className="flex justify-center md:justify-end order-1 md:order-2">
                    <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
                        <img
                            src="/avatar.jpg"
                            alt="Виктор"
                            className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white relative z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}