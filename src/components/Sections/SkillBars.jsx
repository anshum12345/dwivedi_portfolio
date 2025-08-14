import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    { name: 'React', value: 95 },
    { name: 'GSAP', value: 90 },
    { name: 'Three.js', value: 85 },
    { name: 'TypeScript', value: 80 },
    { name: 'Tailwind CSS', value: 95 },
];

export default function SkillBars() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.skill-bar').forEach((bar) => {
                const value = Number(bar.getAttribute('data-value'));
                gsap.fromTo(bar, { width: '0%' }, {
                    width: `${value}%`,
                    duration: 1.2,
                    ease: 'power2.out',
                    scrollTrigger: { trigger: bar, start: 'top 85%' },
                });
            });
        }, el);
        return () => ctx.revert();
    }, []);
    return (
        <div ref={ref} className="space-y-4">
            {skills.map((s) => (
                <div key={s.name}>
                    <div className="flex items-center justify-between text-sm mb-1">
                        <span>{s.name}</span>
                        <span>{s.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div className="h-2 rounded-full bg-gradient-to-r from-brand-600 to-cyan-400 dark:from-brand-500 dark:to-cyan-300 skill-bar" data-value={s.value} />
                    </div>
                </div>
            ))}
        </div>
    );
}


