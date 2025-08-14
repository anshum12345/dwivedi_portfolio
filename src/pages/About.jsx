import React from 'react';
import Section from '../components/Sections/Section';

export default function About() {
    return (
        <div>
            <Section eyebrow="About" title="Who I am">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p>
                        I’m a creative full-stack engineer focused on building expressive products with a strong
                        foundation in performance, accessibility, and motion. I blend design thinking with code to
                        craft delightful, functional experiences.
                    </p>
                    <p>
                        My toolbox includes React, GSAP, Three.js, and Tailwind. I enjoy translating complex ideas
                        into intuitive, animated interfaces and leading design-system driven builds.
                    </p>
                </div>
            </Section>
        </div>
    );
}


