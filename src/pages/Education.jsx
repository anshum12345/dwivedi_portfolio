import React from 'react';
import Section from '../components/Sections/Section';

const schools = [
    { degree: 'B.Tech in Computer Science', school: 'XYZ University', period: '2016 — 2020', details: ['Graduated with honors', 'Hackathon finalist', 'AI/Graphics electives'] },
    { degree: '12th (Science)', school: 'ABC School', period: '2014 — 2016', details: ['PCM', 'State-level coding contest'] },
];

export default function Education() {
    return (
        <div>
            <Section eyebrow="Education" title="Academic background">
                <div className="space-y-4">
                    {schools.map((e) => (
                        <div key={e.degree} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                                <div className="font-semibold">{e.degree} · <span className="text-brand-600 dark:text-brand-400">{e.school}</span></div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">{e.period}</div>
                            </div>
                            <ul className="mt-3 list-disc pl-5 text-slate-700 dark:text-slate-300">
                                {e.details.map((p) => <li key={p}>{p}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}


