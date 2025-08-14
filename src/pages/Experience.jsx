import React from 'react';
import Section from '../components/Sections/Section';

const roles = [
    { role: 'Senior Frontend Engineer', company: 'Creative Studio', period: '2023 — Present', points: ['Lead motion/3D initiatives', 'Architected design system', 'Shipped 90+ Lighthouse scores'] },
    { role: 'Frontend Engineer', company: 'Tech Startup', period: '2021 — 2023', points: ['Scaled React app', 'Improved CWV by 35%', 'Built feature flags + A/B infra'] },
    { role: 'Web Developer', company: 'Freelance', period: '2019 — 2021', points: ['Brand sites with animation', 'Optimized SEO + performance'] },
];

export default function Experience() {
    return (
        <div>
            <Section eyebrow="Experience" title="Where I’ve worked">
                <div className="space-y-4">
                    {roles.map((e) => (
                        <div key={e.role} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                                <div className="font-semibold">{e.role} · <span className="text-brand-600 dark:text-brand-400">{e.company}</span></div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">{e.period}</div>
                            </div>
                            <ul className="mt-3 list-disc pl-5 text-slate-700 dark:text-slate-300">
                                {e.points.map((p) => <li key={p}>{p}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}


