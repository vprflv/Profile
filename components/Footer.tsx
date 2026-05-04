export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="max-w-screen-2xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

                    <div>
                        <p className="text-lg font-medium text-white">Виктор П.</p>
                        <p className="text-sm">Full Stack Developer</p>
                    </div>

                    <div className="text-sm">
                        © 2026 Все права защищены.
                    </div>

                    <div className="flex gap-6 text-sm">
                        <a href="/privacy" className="hover:text-white transition">Политика конфиденциальности</a>
                        <a href="#" className="hover:text-white transition">GitHub</a>
                        <a href="#" className="hover:text-white transition">Telegram</a>
                    </div>

                    <p className="text-xs text-slate-500">Сделано с ❤️ на Next.js</p>
                </div>
            </div>
        </footer>
    );
}