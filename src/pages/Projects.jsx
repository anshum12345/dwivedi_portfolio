import React from 'react';
import Section from '../components/Sections/Section';

const projects = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    tags: ['UI', 'Animation', 'Performance'].slice(0, (i % 3) + 1),
}));

export default function Projects() {
    return (
        <div>
            <Section eyebrow="Projects" title="Selected case studies">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p) => (
                        <a key={p.id} href="#" className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
                            <div className="h-40 rounded-xl bg-gradient-to-br from-brand-200/60 to-brand-400/60 dark:from-brand-700/50 dark:to-brand-500/50 mb-4" />
                            <div className="font-semibold group-hover:text-brand-600 dark:group-hover:text-brand-400">{p.title}</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">{p.tags.join(' · ')}</div>
                        </a>
                    ))}
                </div>
            </Section>
        </div>
    );
}


