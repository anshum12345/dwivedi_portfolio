import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Eye, Filter, Code, Globe, Smartphone, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsRich() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const projectsRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: 'DocAppointment',
            description: 'A scalable doctor appointment scheduling system with secure authentication, dynamic directories, and admin interface, improving scheduling efficiency by 40%.',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'web',
            technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
            liveUrl: 'https://doc-appoinment08.onrender.com',
            githubUrl: 'https://github.com/anshum12345/doc_appoinment',
            features: [
                'Advanced search and filter for specialists',
                'Instant booking confirmations',
                'Secure authentication and role-based access',
                'Real-time admin scheduling',
                'Dynamic doctor directories'
            ],
            status: 'completed',
        },
        {
            id: 2,
            title: 'CodeArt',
            description: 'A real-time code editor enabling snippet downloads as GIFs/images, live code execution, and collaborative blogging for DSA discussion.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'web',
            technologies: ['JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Express.js', 'SCSS'],
            liveUrl: 'https://code-art-ad.vercel.app/',
            githubUrl: 'https://github.com/anshum12345/CodeArt',
            features: [
                'Real-time code execution',
                'Export code as GIF/image',
                'Collaborative DSA blog',
                'Voice-to-text and image-to-text accessibility',
                'Improved project sharing'
            ],
            status: 'completed',
        },
        {
            id: 3,
            title: 'Hotel Booking System',
            description: 'A full-stack hotel booking system with JWT authentication, real-time room search, reservations, and admin management.',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'web',
            technologies: ['React.js', 'Redux', 'Tailwind CSS', 'Java', 'Spring Boot', 'MySQL'],
            liveUrl: 'https://github.com/anshum12345/Lakehouse_Resort',
            githubUrl: 'https://github.com/anshum12345/Lakehouse_Resort',
            features: [
                'JWT authentication and role-based access',
                'Real-time room availability search',
                'Reservation management',
                'Spring Boot REST APIs',
                'Hibernate/JPA for persistence'
            ],
            status: 'completed',
        },
        {
            id: 4,
            title: 'Vastu-based Home Planning Website',
            description: 'A MERN stack platform for designing and booking custom house plans with interactive 2D/3D previews based on Vastu principles.',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'web',
            technologies: ['React.js', 'Three.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Socket.io', 'WhatsApp API', 'Firebase', 'Vastu'],
            liveUrl: '#',
            githubUrl: '#',
            features: [
                '2D/3D floor plan previews with React Three Fiber',
                'WhatsApp inquiry integration',
                'Daily Vastu tips and personalized plans',
                'Real-time layout updates from backend',
                'Booking status tracking'
            ],
            status: 'completed',
        },
        {
            id: 5,
            title: 'Game Khelo',
            description: 'A gaming website with 10+ games and an interactive chatbot, boosting engagement with feedback collection and modular updates.',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'web',
            technologies: ['JavaScript', 'React.js', 'API', 'SCSS'],
            liveUrl: 'https://game-khelo.vercel.app/',
            githubUrl: 'https://github.com/anshum12345/Game-khelo',
            features: [
                '10+ interactive games',
                'Integrated chatbot',
                'Feedback collection system',
                'Modular content updates',
                'Responsive design'
            ],
            status: 'completed',
        },
        {
            id: 6,
            title: 'Resume Maker',
            description: 'A resume builder for 10+ career paths, improving job seeker presentation and boosting employer response rates.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'web',
            technologies: ['React.js', 'Node.js', 'Firebase'],
            liveUrl: 'https://resume-maker-livid-rho.vercel.app/',
            githubUrl: 'https://github.com/anshum12345/resume-maker',
            features: [
                'Multiple career path templates',
                'Customizable sections',
                'PDF export functionality',
                'Firebase authentication',
                'Optimized for performance'
            ],
            status: 'completed',
        },
        {
            id: 7,
            title: 'Book Library',
            description: 'A library website with Google Books API, featuring over 5,000 books and optimized load times.',
            image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'web',
            technologies: ['React.js', 'Google API', 'Firebase', 'Node.js'],
            liveUrl: 'https://book-library-rose.vercel.app/',
            githubUrl: 'https://github.com/anshum12345/Book-library',
            features: [
                'Browse and search 5,000+ books',
                'Optimized API calls',
                'Reduced load time by 40%',
                'User authentication',
                'Responsive design'
            ],
            status: 'completed',
        },
        {
            id: 8,
            title: 'Apple Vision',
            description: 'An interactive Apple Vision Pro clone with 3D animations using Three.js and GSAP.',
            image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'web',
            technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'GSAP', 'Three.js'],
            liveUrl: 'https://applevision-clone.netlify.app/',
            githubUrl: 'https://github.com/anshum12345/Apple-vision-Clone',
            features: [
                '3D animations with Three.js',
                'Smooth GSAP transitions',
                'Responsive UI',
                'Interactive product showcase',
                'Immersive experience'
            ],
            status: 'completed',
        },
        {
            id: 9,
            title: 'Nike Shoes Store',
            description: 'A Nike e-commerce store with dynamic filtering and cart functionality.',
            image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'web',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            liveUrl: 'https://new-shoes-tawny.vercel.app/',
            githubUrl: 'https://github.com/anshum12345/NewShoes',
            features: [
                'Dynamic product filtering',
                'Cart and checkout system',
                'Responsive design',
                'Optimized performance',
                'Modern UI'
            ],
            status: 'completed',
        },
    ];

    const filters = [
        { key: 'all', label: 'All Projects', icon: Filter },
        { key: 'web', label: 'Web Apps', icon: Globe },
        { key: 'mobile', label: 'Mobile Apps', icon: Smartphone },
        { key: 'ai', label: 'AI/ML', icon: Code },
    ];

    useEffect(() => {
        setFilteredProjects(projects);
    }, []);

    useEffect(() => {
        if (activeFilter === 'all') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter((project) => project.category === activeFilter));
        }
    }, [activeFilter]);

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
                projectsRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
                '-=0.4'
            );
    }, [filteredProjects]);

    const getStatusColor = (status) =>
        status === 'completed'
            ? 'chip-accent'
            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';

    const getStatusText = (status) => (status === 'completed' ? 'Completed' : 'In Progress');

    return (
        <section id="projects" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gradient-to-br from-brand-50 to-white dark:from-slate-950 dark:to-black text-black dark:text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
                    <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                        A showcase of my work and technical expertise
                    </p>
                </div>

                {/* Filter buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter.key}
                            onClick={() => setActiveFilter(filter.key)}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                activeFilter === filter.key
                                    ? 'bg-accent-gradient text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200'
                            }`}
                        >
                            <filter.icon className="w-4 h-4" />
                            <span>{filter.label}</span>
                        </button>
                    ))}
                </div>

                {/* Project cards */}
                <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="project-card group">
                            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-brand-50 to-white dark:from-slate-950 dark:to-black shadow-sm h-full flex flex-col">
                                <div className="relative overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                                        {getStatusText(project.status)}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent">{project.title}</h3>
                                    <p className="mb-4 flex-1 leading-relaxed text-gray-600 dark:text-gray-400">{project.description}</p>
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="px-3 py-1 text-sm rounded-full chip-accent">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3 mt-auto">
                                        {project.title === 'Vastu-based Home Planning Website' ? (
                                            <>
                                                <button onClick={() => setShowModal(true)} className="btn-secondary inline-flex items-center justify-center flex-1">
                                                    <Eye className="w-4 h-4 mr-2" />
                                                    Live Demo
                                                </button>
                                                <button onClick={() => setShowModal(true)} className="btn-primary inline-flex items-center justify-center flex-1">
                                                    <Github className="w-4 h-4 mr-2" />
                                                    Code
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center flex-1">
                                                    <Eye className="w-4 h-4 mr-2" />
                                                    Live Demo
                                                </a>
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center flex-1">
                                                    <Github className="w-4 h-4 mr-2" />
                                                    Code
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full relative">
                            <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-white">
                                <X className="w-5 h-5" />
                            </button>
                            <h2 className="text-xl font-bold mb-4">Coming Soon!</h2>
                            <p className="text-gray-600 dark:text-gray-300">This project is still under development. Stay tuned for updates.</p>
                        </div>
                    </div>
                )}

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="p-8 max-w-2xl mx-auto rounded-2xl bg-gradient-to-br from-brand-50 to-white dark:from-slate-950 dark:to-black shadow-sm">
                        <h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
                        <p className="mb-6 text-gray-600 dark:text-gray-400">
                            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#contact" className="btn-primary inline-flex items-center justify-center">
                                <ExternalLink className="w-5 h-5 mr-2" />
                                Start a Project
                            </a>
                            <a href="https://github.com/anshum12345" target="_blank" rel="noreferrer" className="btn-secondary inline-flex items-center justify-center">
                                <Github className="w-5 h-5 mr-2" />
                                View More on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
