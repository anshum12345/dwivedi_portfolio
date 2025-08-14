import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StickyTimeline() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const ctx = gsap.context(() => {
            const panels = el.querySelectorAll('.panel');
            const totalPanels = panels.length;
            gsap.to(panels, {
                xPercent: -100 * (totalPanels - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: el,
                    pin: true,
                    scrub: 1,
                    end: () => `+=${el.offsetWidth}`,
                },
            });
        }, el);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={ref} className="relative w-full overflow-hidden">
            <div className="flex">
                {[1,2,3].map((i) => (
                    <div key={i} className="panel shrink-0 w-full h-[60vh] sm:h-[70vh] grid place-items-center border border-slate-200 dark:border-slate-800 rounded-2xl mr-4">
                        <div className="text-3xl font-bold">Milestone {i}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}


