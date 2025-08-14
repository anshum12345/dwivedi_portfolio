import React from 'react';
import Section from '../components/Sections/Section';

export default function Contact() {
    return (
        <div>
            <Section eyebrow="Contact" title="Let’s talk">
                <form className="grid gap-4 max-w-xl">
                    <input className="rounded-lg border border-slate-300 dark:border-slate-700 bg-gradient-to-br from-brand-50 to-white text-black dark:from-slate-950 dark:to-black dark:text-white/70 dark:bg-slate-900/70 px-4 py-2.5" placeholder="Your name" />
                    <input type="email" className="rounded-lg border border-slate-300 dark:border-slate-700 bg-gradient-to-br from-brand-50 to-white text-black dark:from-slate-950 dark:to-black dark:text-white/70 dark:bg-slate-900/70 px-4 py-2.5" placeholder="Email" />
                    <textarea rows="5" className="rounded-lg border border-slate-300 dark:border-slate-700 bg-gradient-to-br from-brand-50 to-white text-black dark:from-slate-950 dark:to-black dark:text-white/70 dark:bg-slate-900/70 px-4 py-2.5" placeholder="Project details" />
                    <button className="inline-flex w-fit items-center justify-center px-5 py-2.5 rounded-full bg-brand-600 text-white hover:bg-brand-700">Send</button>
                </form>
            </Section>
        </div>
    );
}


