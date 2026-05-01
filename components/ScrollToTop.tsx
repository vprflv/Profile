'use client';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 
                       w-12 h-12 md:w-14 md:h-14 
                       bg-white border border-slate-200 
                       hover:bg-emerald-50 hover:border-emerald-300 
                       rounded-2xl shadow-lg 
                       flex items-center justify-center text-slate-700 hover:text-emerald-600 
                       transition-all duration-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}
        >
            <ArrowUp size={24} className="md:size-7" />
        </button>
    );
}