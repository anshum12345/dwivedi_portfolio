import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceRich() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
            },
        });

        tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
            .fromTo(
                timelineRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
                '-=0.4'
            );

        const items = gsap.utils.toArray('.timeline-item');
        items.forEach((item, index) => {
            gsap.fromTo(
                item,
                { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    delay: index * 0.2,
                    scrollTrigger: { trigger: item, start: 'top 80%' },
                }
            );
        });
    }, []);

    const experiences = [
        {
            company: 'Bricks & Mortar Construction',
            position: 'Full Stack Developer Intern',
            duration: 'Apr 2025 – Jul 2025',
            location: 'Bangalore, India',
            description:
                'Contributed as a full‑stack developer to a Vastu‑based home‑planning platform built on the MERN stack, enabling users to design and book custom house plans aligned with traditional principles.',
            technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Three.js', 'Tailwind CSS','AWS','GCP','Spring Boot','Java','Django','MySQL','REST APIs'],
            achievements: [
                'Implemented interactive 2D/3D floor‑plan previews using React Three Fiber with real‑time backend integration',
                'Delivered a user‑friendly UI with Tailwind CSS and growth features such as WhatsApp inquiry and daily Vastu tips',
                'Improved user engagement by 50% and retention by 35% through UX and performance enhancements',
            ],
        },
        {
            company: 'CodeClause',
            position: 'Web Development Intern',
            duration: 'Aug 2024 – Oct 2024',
            location: 'Remote',
            description:
                'Built and deployed responsive web applications with the MERN stack, focusing on performance, API quality, and production readiness.',
            technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs'],
            achievements: [
                'Designed scalable RESTful APIs and optimized backend logic, reducing server response time by 25%',
                'Integrated third‑party APIs and tuned database queries for faster data access',
                'Shipped production‑ready features that improved internal workflow efficiency by 30%',
            ],
        },
        {
            company: 'Gyanarpan College Program',
            position: 'Volunteer Instructor — Coding & Mathematics',
            duration: 'Jan 2023 – Jan 2024',
            location: 'Social Initiative',
            description:
                'Served as a volunteer instructor teaching foundational coding and mathematics to students, designing structured lessons and facilitating problem‑solving workshops.',
            technologies: ['Programming Fundamentals', 'Mathematics', 'Mentorship', 'Curriculum Design', 'Public Speaking'],
            achievements: [
                'Taught and mentored 500+ students in programming fundamentals and core mathematics concepts',
                'Developed structured learning materials and practice sets for beginners in coding and mathematics',
                'Encouraged student participation in tech events and fostered long‑term learning mindsets',
            ],
        },
    ];

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="py-20 bg-gray-50 text-black bg-gradient-to-br from-brand-50 to-white text-black dark:from-slate-950 dark:to-black dark:text-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
                    <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        My professional journey in software development and community impact
                    </p>
                </div>

                <div ref={timelineRef} className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full timeline-accent hidden md:block" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.company}
                                className={`timeline-item relative flex items-center flex-col ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            >
                                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-600 rounded-full border-4 border-white z-10 hidden md:block" />

                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                                    <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 bg-gradient-to-br from-brand-50 to-white text-black dark:from-slate-950 dark:to-black dark:text-white">
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold mb-2">{exp.position}</h3>
                                            <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                                <div className="flex items-center gap-1"><Building className="w-4 h-4" /><span>{exp.company}</span></div>
                                                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>{exp.duration}</span></div>
                                                <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /><span>{exp.location}</span></div>
                                            </div>
                                        </div>

                                        <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">{exp.description}</p>

                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-2 justify-center">
                                                {exp.technologies.map((tech) => (
                                                    <span key={tech} className="px-3 py-1 text-sm rounded-full chip-accent">{tech}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-center">Key Achievements:</h4>
                                            <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                                                {exp.achievements.map((achievement) => (
                                                    <li key={achievement} className="flex items-start gap-2">
                                                        <span className="mt-1 bullet-accent">•</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

              <div className="text-center mt-16">
    <div className="p-8 max-w-2xl mx-auto rounded-2xl bg-gradient-to-br from-brand-50 to-white text-black dark:from-slate-950 dark:to-black dark:text-white">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">
            Ready to Work Together?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm always open to discussing new opportunities and exciting projects.
        </p>
        <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-brand-600 text-white hover:bg-brand-700"
        >
            <ExternalLink className="w-5 h-5 mr-2" />
            View My Resume
        </a>
    </div>
</div>

            </div>
        </section>
    );
}
