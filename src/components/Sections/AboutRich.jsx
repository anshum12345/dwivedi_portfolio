import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Code, Palette, Zap, Globe, Heart, Target, Award, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutAnshum() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const statsRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
            },
        });

        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        )
            .fromTo(
                contentRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
                '-=0.4'
            )
            .fromTo(
                statsRef.current,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
                '-=0.4'
            );
    }, []);

    const stats = [
        { icon: Code, number: '20+', label: 'Full-Stack Projects', color: 'text-accent' },
        { icon: Globe, number: '600+', label: 'DSA Problems Solved', color: 'text-accent' },
        { icon: Users, number: '500+', label: 'Students Taught (Gyanarpan)', color: 'text-accent' },
        { icon: Heart, number: '100%', label: 'Passion for Learning', color: 'text-accent' },
    ];

    const services = [
        {
            icon: Code,
            title: 'Full-Stack Development',
            description:
                'Experienced in MERN stack, Spring Boot, Django REST, and cloud platforms (AWS, GCP) for building scalable, production-grade applications.',
        },
        {
            icon: Palette,
            title: 'UI/UX Implementation',
            description:
                'Designing and developing responsive, modern interfaces with Tailwind CSS, SCSS, ShadCN, Next.js, and React.js for smooth user experiences.',
        },
        {
            icon: Zap,
            title: 'Performance Optimization',
            description:
                'Improving scalability and speed by reducing load times, optimizing backend queries, and fine-tuning frontend rendering.',
        },
        {
            icon: Target,
            title: 'Problem Solving & DSA',
            description:
                'Solved 600+ problems across LeetCode, GFG, and CodeChef — applying algorithmic thinking to practical, real-world challenges.',
        },
    ];

    return (
        <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-brand-50 to-white text-black dark:from-slate-950 dark:to-black dark:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 ref={titleRef} className="text-5xl md:text-6xl font-bold mb-6">
                        About Me
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
                        A passionate and results-driven Full Stack Developer with a proven track record of delivering scalable web solutions, teaching large audiences, and solving challenging problems through technology.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <div ref={contentRef}>
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold mb-6">Who I Am</h3>
                            <div className="space-y-6">
                                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                    I’m <strong>Anshum Dwivedi</strong>, a B.Tech IT student at Rajiv Gandhi Institute of Petroleum Technology, with hands-on experience building production-ready applications during internships at <strong>Bricks & Mortar Construction</strong> and <strong>CodeClause</strong>.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                    My skill set spans React.js, Node.js, Express.js, Spring Boot, Django, MongoDB, MySQL, and cloud services. I enjoy integrating performance optimization, clean architecture, and modern design principles into my projects.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                    From Jan 2023 to Jan 2024, I volunteered as a teacher for the <strong>Gyanarpan College Program</strong>, a social initiative where I taught <strong>500+ students</strong> across various subjects, helping them gain practical skills and academic confidence.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center chip-accent">
                                        <User className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Anshum Dwivedi</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Full Name</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center chip-accent">
                                        <Code className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Full Stack Developer</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Primary Role</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center chip-accent">
                                        <Palette className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">UI/UX Developer</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Secondary Role</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center chip-accent">
                                        <Zap className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Problem Solver</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Core Strength</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={statsRef}>
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold mb-8">My Journey</h3>
                            <div className="grid grid-cols-2 gap-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center group">
                                        <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 chip-accent">
                                            <stat.icon className={`w-10 h-10 ${stat.color}`} />
                                        </div>
                                        <div className="text-3xl font-bold mb-2">{stat.number}</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="text-4xl font-bold text-center mb-16">What I Do</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-2xl transition-all duration-300 group hover:scale-105 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-brand-50 to-white text-black dark:from-slate-950 dark:to-black dark:text-white dark:bg-gray-700">
                                    <service.icon className="w-8 h-8 text-blue-500" />
                                </div>
                                <h4 className="text-xl font-bold mb-4 text-center">{service.title}</h4>
                                <p className="text-center leading-relaxed text-gray-600 dark:text-gray-300">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
