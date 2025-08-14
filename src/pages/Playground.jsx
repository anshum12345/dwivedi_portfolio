import React, { useEffect, useRef } from 'react';
import Section from '../components/Sections/Section';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Playground() {
    const wrapRef = useRef(null);
    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;
        const ctx = gsap.context(() => {
            gsap.to('.marquee', {
                xPercent: -100,
                repeat: -1,
                ease: 'none',
                duration: 15,
            });
        }, el);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={wrapRef}>
            <Section eyebrow="Playground" title="Motion experiments">
                <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                    <div className="marquee whitespace-nowrap text-6xl font-black py-6 px-4 bg-gradient-to-r from-brand-600 to-brand-400 text-transparent bg-clip-text">
                        GSAP · THREE · CANVAS · INTERACTION · DESIGN ·
                    </div>
                </div>
            </Section>
        </div>
    );
}


