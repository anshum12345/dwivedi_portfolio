import React from 'react';
import Section from '../components/Sections/Section';

export default function Blog() {
    return (
        <div>
            <Section eyebrow="Notes" title="Writing & snippets">
                <div className="grid gap-6 md:grid-cols-2">
                    {[1,2,3,4].map((i) => (
                        <a key={i} href="#" className="block p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-brand-400/60 dark:hover:border-brand-400/40">
                            <div className="text-lg font-semibold mb-1">Post Title {i}</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">A short description about a concept, technique, or case study.</div>
                        </a>
                    ))}
                </div>
            </Section>
        </div>
    );
}


