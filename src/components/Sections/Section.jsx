import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Section({ id, eyebrow, title, children }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                el.querySelectorAll('[data-animate]'),
                { y: 24, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                    },
                }
            );
        }, el);
        return () => ctx.revert();
    }, []);

    return (
        <section id={id} ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-transparent dark:border-transparent">
            <div className="mb-10" data-animate>
                {eyebrow && <div className="uppercase tracking-widest text-xs text-brand-600 dark:text-brand-400 mb-2">{eyebrow}</div>}
                {title && <h2 className="text-2xl sm:text-4xl font-bold">{title}</h2>}
            </div>
            <div className="space-y-6" data-animate>
                {children}
            </div>
        </section>
    );
}


