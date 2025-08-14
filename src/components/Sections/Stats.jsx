import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Stats() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const nums = el.querySelectorAll('[data-num]');
        nums.forEach((n) => {
            const end = parseInt(n.getAttribute('data-num'), 10);
            gsap.fromTo(n, { innerText: 0 }, {
                innerText: end,
                duration: 1.6,
                ease: 'power3.out',
                snap: { innerText: 1 },
                scrollTrigger: { trigger: n, start: 'top 85%' },
            });
        });
    }, []);
    return (
        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-3xl font-black"><span data-num="30">30</span>+</div>
                <div className="text-slate-500 dark:text-slate-400 text-sm">Projects</div>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-3xl font-black"><span data-num="6">6</span>+</div>
                <div className="text-slate-500 dark:text-slate-400 text-sm">Years</div>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-3xl font-black"><span data-num="12">12</span>+</div>
                <div className="text-slate-500 dark:text-slate-400 text-sm">Awards</div>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-3xl font-black"><span data-num="100">100</span>%</div>
                <div className="text-slate-500 dark:text-slate-400 text-sm">Client sat.</div>
            </div>
        </div>
    );
}


