import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero3D from '../components/Hero/Hero3D';
import Section from '../components/Sections/Section';
import AboutRich from '../components/Sections/AboutRich';
import ExperienceRich from '../components/Sections/ExperienceRich';
import ProjectsRich from '../components/Sections/ProjectsRich';
import EducationRich from '../components/Sections/EducationRich';
import SkillsRich from '../components/Sections/SkillsRich';
import ContactRich from '../components/Sections/ContactRich';
import { ArrowUp } from 'lucide-react';
 

export default function Home() {
	// const yearsOfExperience = new Date().getFullYear() - 2018; // Example: calculate from start year
	const currentProject = "Fintech SaaS Platform"; // Replace with your actual project
	const RESUME_URL = process.env.REACT_APP_RESUME_URL || 'https://drive.google.com/file/d/1C29nBdgqL9Eu7R3q0MHT3aCO6igE3Yoe/view?usp=drive_link';

	const roles = ["Software Developer", "Full-Stack Engineer"];
	const [roleIndex, setRoleIndex] = useState(0);
	const [showTop, setShowTop] = useState(false);

	useEffect(() => {
		const id = setInterval(() => {
			setRoleIndex((i) => (i + 1) % roles.length);
		}, 2500);
		return () => clearInterval(id);
	}, []);

	useEffect(() => {
		const onScroll = () => setShowTop(window.scrollY > 300);
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<div>
			<div id="home">
				<Section eyebrow="Full-Stack Engineer" title={<span>Building <span className="text-brand-600 dark:text-brand-400">Scalable</span> Web Solutions</span>}>
					<div className="grid gap-8 lg:grid-cols-2 items-center">
						<div className="space-y-5">
							<h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
								I am{" "}
								<span className="text-brand-600 dark:text-brand-400">
									<AnimatePresence mode="wait">
										<motion.span
											key={roles[roleIndex]}
											initial={{ opacity: 0, y: 6 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -6 }}
											transition={{ duration: 0.35 }}
										>
											{roles[roleIndex]}
										</motion.span>
									</AnimatePresence>
								</span>
							</h2>

							<p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
								I develop full-stack applications with React, Node.js, and cloud technologies. 
								Focused on clean code and efficient solutions that deliver business value.
							</p>
							
							<div className="flex flex-col sm:flex-row gap-3 pt-2">
								<a href="#projects" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 text-white dark:bg-gradient-to-br from-brand-50 to-white text-black dark:from-slate-950 dark:to-black dark:text-white hover:opacity-90 transition-all duration-200 hover:shadow-lg">
									View Projects
								</a>
								<a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors duration-200">
									Contact Me
								</a>
							</div>

				<div className="pt-4">
					<h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">CODING PROFILES</h4>
					<div className="flex flex-wrap gap-3">
						
						
						<a
							href="https://leetcode.com/u/Xavier_2212/"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
						>
							<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
								<path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
							</svg>
							LeetCode
						</a>
						<a
							href="https://www.geeksforgeeks.org/user/debugg08/"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
						>
							<svg className="w-4 h-4 mr-2 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<circle cx="12" cy="12" r="9" />
								<path d="M12 12h5" />
								<path d="M12 7v5" />
							</svg>
							GeeksforGeeks
						</a>
						<a
							href={RESUME_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
						>
							<svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
								<path d="M14 2v6h6" />
								<path d="M16 13H8" />
								<path d="M16 17H8" />
								<path d="M10 9H8" />
							</svg>
							Resume
						</a>
					</div>
				</div>
						</div>
						<div className="relative -mt-6 sm:-mt-8 flex justify-center">
							<Hero3D />
							<div className="absolute -bottom-5 left-0 right-0 flex justify-center">
								<div className="inline-flex items-center px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-md text-xs font-mono">
									<span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
									Currently working on: {currentProject}
								</div>
							</div>
						</div>
					</div>
				</Section>
			</div>

			<AboutRich />
			<SkillsRich />
			<ProjectsRich />
			<ExperienceRich />
			<EducationRich />
            
            <ContactRich />

            {showTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 z-50 rounded-full p-3 md:p-4 bg-accent-gradient text-white shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-110"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
                </button>
            )}
        </div>
    );
}