import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function EducationRich() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const educationRef = useRef(null);
    const certificationsRef = useRef(null);

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
                educationRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
                '-=0.4'
            )
            .fromTo(
                certificationsRef.current,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
                '-=0.4'
            );

        gsap.utils.toArray('.education-card').forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    delay: index * 0.2,
                    scrollTrigger: { trigger: card, start: 'top 80%' },
                }
            );
        });
    }, []);

    const education = [
        {
            degree: 'B.Tech in Information Technology',
            institution: 'Rajiv Gandhi Institute of Petroleum Technology',
            duration: 'Dec 2021 – May 2025',
            location: 'Bangalore, India',
            gpa: '7.26/10',
            description:
                'Focused on software engineering, full-stack development, and problem-solving. Engaged in multiple academic projects and internships involving MERN stack, Spring Boot, Django REST, and cloud technologies.',
            achievements: [
                'Completed multiple production-level full-stack projects',
                'Solved 600+ DSA problems across LeetCode, GFG, and CodeChef',
                'Top 300 Global Rank in CodeChef Weekly Contest',
                'Top 2500 in LeetCode Weekly Contest among 30,000+ participants',
            ],
            relevantCourses: [
                'Data Structures & Algorithms',
                'Database Management Systems',
                'Operating Systems',
                'Web Technologies',
                'Software Engineering',
            ],
        },
   
    ];

    const certifications = [
        {
            name: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            date: '2024',
           
            description: 'Expertise in designing distributed systems and applications on AWS platform.',
            skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Scalability'],
        },
        {
            name: 'Google Cloud Professional Developer',
            issuer: 'Google Cloud',
            date: '2023',
            
            description: 'Advanced knowledge of Google Cloud Platform development and deployment.',
            skills: ['GCP', 'Cloud Development', 'DevOps', 'Microservices'],
        },
    ];

    return (
        <section id="education" ref={sectionRef} className="py-20 bg-gray-50 text-black dark:bg-gradient-to-br from-brand-50 to-white text-black dark:from-slate-950 dark:to-black dark:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4">Education & Certifications</h2>
                    <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">My academic background and professional certifications</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    <div ref={educationRef}>
                        <h3 className="text-3xl font-bold mb-8 flex items-center">
                            <GraduationCap className="w-8 h-8 mr-3 text-accent" />
                            Academic Background
                        </h3>
                        <div className="space-y-8">
                            {education.map((edu) => (
                                <div key={edu.degree} className="education-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 bg-white dark:bg-gray-800">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                                            <p className="text-lg font-semibold text-accent">{edu.institution}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-gray-600 dark:text-gray-400">GPA/Marks: {edu.gpa}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm mb-4 text-gray-600 dark:text-gray-400">
                                        <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>{edu.duration}</span></div>
                                        <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /><span>{edu.location}</span></div>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">{edu.description}</p>
                                    <div className="mb-4">
                                        <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Achievements:</h5>
                                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                            {edu.achievements.map((achievement) => (
                                                <li key={achievement} className="flex items-start gap-2">
                                                    <span className="mt-1 bullet-accent">•</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Relevant Courses:</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.relevantCourses.map((course) => (
                                                <span key={course} className="px-3 py-1 text-sm rounded-full chip-accent">
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div ref={certificationsRef}>
                        <h3 className="text-3xl font-bold mb-8 flex items-center">
                            <Award className="w-8 h-8 mr-3 text-accent" />
                            Professional Certifications
                        </h3>
                        <div className="space-y-6">
                            {certifications.map((cert) => (
                                <div key={cert.name} className="education-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 bg-white dark:bg-gray-800">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h4 className="text-lg font-bold mb-1">{cert.name}</h4>
                                            <p className="font-medium text-accent">{cert.issuer}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-gray-600 dark:text-gray-400">{cert.date}</div>
                                           
                                        </div>
                                    </div>
                                    <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{cert.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill) => (
                                            <span key={skill} className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800">
                            <h4 className="text-xl font-bold mb-4">Continuous Learning</h4>
                            <p className="mb-4 text-gray-600 dark:text-gray-300">I'm committed to staying updated with the latest technologies and industry trends through:</p>
                            <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                                <li>• Online courses on platforms like Coursera, Udemy, and Pluralsight</li>
                                <li>• Regular participation in tech conferences and workshops</li>
                                <li>• Reading technical blogs and research papers</li>
                                <li>• Contributing to open-source projects</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
