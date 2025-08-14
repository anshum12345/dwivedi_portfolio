import React from 'react';
import Section from '../components/Sections/Section';

const groups = [
    { title: 'Core', items: ['React', 'TypeScript', 'JavaScript (ES2023+)', 'HTML/CSS'] },
    { title: 'Motion', items: ['GSAP + ScrollTrigger', 'Framer Motion', 'Lottie'] },
    { title: '3D / Graphics', items: ['Three.js', 'React Three Fiber', 'WebGL basics'] },
    { title: 'Styling', items: ['Tailwind CSS', 'Design Systems', 'CSS Architecture'] },
    { title: 'Tooling', items: ['Vite', 'CRA', 'Webpack', 'Babel'] },
    { title: 'Quality', items: ['Lighthouse / CWV', 'Testing Library', 'Jest'] },
];

export default function Skills() {
    return (
        <div>
            <Section eyebrow="Skills" title="What I work with">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groups.map((g) => (
                        <div key={g.title} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <div className="text-lg font-semibold mb-3">{g.title}</div>
                            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                                {g.items.map((i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-brand-600 dark:bg-brand-400" />
                                        {i}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}


