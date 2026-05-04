'use client';
import { useState } from 'react';
import { Mail } from 'lucide-react';


export default function Navbar() {
    const [open, setOpen] = useState(false);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        setOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setOpen(false);
    };

    const smoothScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const navbarHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/50 backdrop-blur-3xl">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-4 md:py-5 flex items-center justify-between">

                {/* Logo */}
                <button
                    onClick={scrollToTop}
                    className="flex items-center gap-3 sm:gap-4 cursor-pointer transition-transform active:scale-95"
                >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-3xl flex items-center justify-center shadow-xl flex-shrink-0">
                        <span className="text-2xl font-bold text-white tracking-tighter">ВП</span>
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-sm text-stone-700 -mt-1">Full Stack Developer</p>
                    </div>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-lg font-medium">
                    <button onClick={() => smoothScrollTo('about')} className="nav-link cursor-pointer text-stone-700 hover:text-emerald-900 transition-colors">Обо мне</button>
                    <button onClick={() => smoothScrollTo('projects')} className="nav-link cursor-pointer text-stone-700 hover:text-emerald-900 transition-colors">Проекты</button>
                    <button onClick={() => smoothScrollTo('experience')} className="nav-link cursor-pointer text-stone-700 hover:text-emerald-900 transition-colors">Опыт</button>
                    <button onClick={() => smoothScrollTo('contact')} className="nav-link cursor-pointer text-stone-700 hover:text-emerald-900 transition-colors">Контакты</button>
                </div>

                {/* Кнопки справа */}
                <div className="flex items-center gap-3 sm:gap-4">
                    {/* Большая кнопка на md+ */}
                    <button
                        onClick={scrollToContact}
                        className="hidden md:flex items-center gap-2 cursor-pointer px-6 py-3 bg-emerald-900 hover:bg-emerald-800 text-white font-semibold rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                    >
                        <Mail size={20} />
                        Связаться со мной
                    </button>

                    {/* Компактная кнопка на мобильных */}
                    <button
                        onClick={scrollToContact}
                        className="md:hidden flex items-center gap-2 px-5 py-2.5 bg-emerald-900 hover:bg-emerald-800 text-white font-medium rounded-2xl text-sm active:scale-95 transition-all"
                    >
                        <Mail size={18} />
                        Написать
                    </button>

                    {/* Гамбургер */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-3xl text-slate-700 w-10 h-10 flex items-center justify-center active:scale-95"
                    >
                        {open ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden border-t border-slate-200 bg-white px-4 sm:px-6 py-8">
                    <div className="flex flex-col gap-6 text-lg text-slate-700">
                        <a href="#about" onClick={() => setOpen(false)} className="hover:text-emerald-700 transition-colors">Обо мне</a>
                        <a href="#skills" onClick={() => setOpen(false)} className="hover:text-emerald-700 transition-colors">Навыки</a>
                        <a href="#projects" onClick={() => setOpen(false)} className="hover:text-emerald-700 transition-colors">Проекты</a>
                        <a href="#experience" onClick={() => setOpen(false)} className="hover:text-emerald-700 transition-colors">Опыт</a>
                        <a href="#contact" onClick={() => setOpen(false)} className="hover:text-emerald-700 transition-colors">Контакты</a>

                        <button
                            onClick={scrollToContact}
                            className="mt-6 w-full py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-3xl flex items-center justify-center gap-2 active:scale-95 transition-all"
                        >
                            <Mail size={22} />
                            Связаться со мной
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}