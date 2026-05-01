import { skills } from '@/lib/data';

export default function Skills() {
    return (
        <section id="skills" className="py-16 md:py-24 bg-stone-200">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
                <span className="uppercase tracking-widest text-emerald-600 text-sm font-medium">
                    02 / Навыки
                </span>
                <h2 className="section-header text-4xl sm:text-5xl md:text-5xl font-semibold tracking-tighter mt-3 mb-10 md:mb-12 text-slate-900">
                    Технологии, которыми владею
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white cursor-pointer border border-slate-200 hover:border-emerald-400
                                       rounded-3xl p-6 sm:p-8 text-center card-hover transition-all hover:shadow-md"
                        >
                            <span className="text-lg sm:text-xl font-medium text-slate-800">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}