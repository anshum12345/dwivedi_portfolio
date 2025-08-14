import React from 'react';
import Section from '../components/Sections/Section';

export default function Services() {
    return (
        <div>
            <Section eyebrow="Services" title="How I can help">
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: 'Product UI Engineering', desc: 'Robust, accessible, and fast UI with design systems.' },
                        { title: 'Motion & Interaction', desc: 'GSAP/Three.js micro-interactions and scroll narratives.' },
                        { title: 'Performance', desc: 'Ship fast pages with CWV best practices and profiling.' },
                    ].map(card => (
                        <div key={card.title} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <div className="text-lg font-semibold mb-1">{card.title}</div>
                            <div className="text-slate-600 dark:text-slate-400">{card.desc}</div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}


