import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
	Code,
	Database,
	Cloud,
	Smartphone,
	Globe,
	Palette,
	Zap,
	TrendingUp,
	Award,
	Rocket,
	Server,
	GitBranch,
	Leaf,
	FileCode,
	RefreshCcw,
	LayoutGrid,
	Boxes,
	Terminal,
	Wind,
	Shapes,
	Settings,
	MessageSquare,
	FileText,
	Package,
	Send,
    Braces,
    Layers,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function SkillsRich() {
	const sectionRef = useRef(null);
	const titleRef = useRef(null);
	const skillsRef = useRef(null);
	const categoriesRef = useRef(null);
	const additionalRef = useRef(null);

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: 'top 80%',
				end: 'bottom 20%',
				toggleActions: 'play none none reverse',
			},
		});

		tl.fromTo(titleRef.current, { opacity: 0, y: 80, scale: 0.8 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' })
			.fromTo(
				skillsRef.current,
				{ opacity: 0, x: -80, scale: 0.95 },
				{ opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power2.out' },
				'-=0.6'
			)
			.fromTo(
				categoriesRef.current,
				{ opacity: 0, x: 80, scale: 0.95 },
				{ opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power2.out' },
				'-=0.6'
			)
			.fromTo(
				additionalRef.current,
				{ opacity: 0, y: 50, scale: 0.95 },
				{ opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power2.out' },
				'-=0.4'
			);

		gsap.fromTo(
			'.skill-tile',
			{ opacity: 0, y: 24, scale: 0.98 },
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.6,
				stagger: 0.06,
				ease: 'power2.out',
				scrollTrigger: { trigger: '.skill-tile', start: 'top 85%' },
			}
		);

		gsap.fromTo(
			'.skill-category',
			{ opacity: 0, y: 50, scale: 0.95 },
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.8,
				stagger: 0.1,
				ease: 'back.out(1.7)',
				scrollTrigger: { trigger: '.skill-category', start: 'top 85%' },
			}
		);
	}, []);

	const technicalSkills = [
		{ name: 'React.js', icon: Code, color: 'from-blue-500 to-cyan-500' },
		{ name: 'JavaScript', icon: Code, color: 'from-gray-700 to-black' },
		{ name: 'TypeScript', icon: Code, color: 'from-sky-600 to-sky-700' },
		{ name: 'Node.js', icon: Server, color: 'from-green-500 to-green-600' },
		{ name: 'Express.js', icon: Server, color: 'from-gray-500 to-gray-600' },
		{ name: 'MongoDB', icon: Database, color: 'from-green-600 to-green-700' },
		{ name: 'MySQL / PostgreSQL', icon: Database, color: 'from-blue-700 to-blue-800' },
		{ name: 'Git & GitHub', icon: GitBranch, color: 'from-orange-500 to-red-500' },
		{ name: 'API Design', icon: Globe, color: 'from-indigo-500 to-indigo-600' },
	];

	const designSkills = [
		{ name: 'Tailwind CSS', icon: Palette, color: 'from-sky-500 to-sky-600' },
		{ name: 'SCSS', icon: Palette, color: 'from-pink-500 to-pink-600' },
		{ name: 'ShadCN UI', icon: Palette, color: 'from-purple-500 to-purple-600' },
		{ name: 'Responsive Design', icon: Smartphone, color: 'from-green-500 to-green-600' },
		{ name: 'Figma', icon: Palette, color: 'from-violet-500 to-fuchsia-500' },
		{ name: 'Design Systems', icon: Palette, color: 'from-rose-500 to-rose-600' },
	];

	const skillCategories = [
		{
			title: 'Frontend Development',
			description: 'Modern web technologies & frameworks for rich UI',
			skills: ['React.js', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'TypeScript', 'Redux', 'ShadCN'],
			icon: Globe,
			color: 'from-blue-500 to-blue-600',
			bgColor: 'from-blue-50 to-blue-100',
			darkBgColor: 'from-blue-900/20 to-blue-800/20',
		},
		{
			title: 'Backend Development',
			description: 'Server-side programming & API design',
			skills: ['Node.js', 'Express.js', 'Spring Boot', 'Django REST', 'MongoDB', 'MySQL', 'PostgreSQL'],
			icon: Database,
			color: 'from-green-500 to-green-600',
			bgColor: 'from-green-50 to-green-100',
			darkBgColor: 'from-green-900/20 to-green-800/20',
		},
		{
			title: 'DevOps & Cloud',
			description: 'Deployment, infrastructure & cloud services',
			skills: ['AWS', 'GCP', 'Git', 'Docker', 'CI/CD', 'Linux', 'Nginx'],
			icon: Cloud,
			color: 'from-orange-500 to-orange-600',
			bgColor: 'from-orange-50 to-orange-100',
			darkBgColor: 'from-orange-900/20 to-orange-800/20',
		},
		{
			title: 'UI/UX & Styling',
			description: 'Modern design frameworks & responsive layouts',
			skills: ['Tailwind CSS', 'SCSS', 'ShadCN UI', 'Figma', 'Adobe XD'],
			icon: Palette,
			color: 'from-purple-500 to-purple-600',
			bgColor: 'from-purple-50 to-purple-100',
			darkBgColor: 'from-purple-900/20 to-purple-800/20',
		},
	];

	// Map skill/tool names to icons (fallback to Code)
	const getIconFor = (label) => {
		const key = String(label).toLowerCase().trim();
		const map = {
			// frontend
			'react.js': Code,
			'next.js': Globe,
			'vue.js': Leaf,
			'html5': FileCode,
			'css3': Palette,
			'typescript': FileCode,
			'redux': RefreshCcw,
			'shadcn': LayoutGrid,
			'shadcn ui': LayoutGrid,

			// backend
			'node.js': Server,
			'express.js': Server,
			'spring boot': Leaf,
			'django rest': Braces, // fallback below via alias
			'mongodb': Database,
			'mysql': Database,
			'postgresql': Database,

			// devops & cloud
			'aws': Cloud,
			'gcp': Cloud,
			'git': GitBranch,
			'docker': Boxes,
			'ci/cd': Settings,
			'linux': Terminal,
			'nginx': Server,

			// ui/ux
			'tailwind css': Wind,
			'scss': Palette,
			'figma': Shapes,
			'adobe xd': Palette,

			// tools (marquee)
			'github': GitBranch,
			'vs code': Code,
			'postman': Send,
			'webpack': Package,
			'vite': Zap,
			'npm': Package,
			'yarn': Package,
			'jenkins': Settings,
			'adobe creative suite': Palette,
			'slack': MessageSquare,
			'jira': Layers,
			'notion': FileText,
			'miro': LayoutGrid,
			'lucidchart': Settings,
		};
		// alias for 'Django REST'
		if (key.startsWith('django')) return Braces;
		const Icon = map[key] || Code;
		return Icon;
	};

	return (
		<section
			id="skills"
			ref={sectionRef}
			className="py-24 relative overflow-hidden bg-gradient-to-br from-brand-50 to-white text-black dark:from-slate-950 dark:to-black dark:text-white"
		>
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-5 bg-gradient-to-br from-blue-600 to-purple-600 animate-pulse" />
				<div
					className="absolute bottom-20 right-10 w-40 h-40 rounded-full opacity-5 bg-gradient-to-br from-green-600 to-blue-600 animate-pulse"
					style={{ animationDelay: '1s' }}
				/>
				<div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 bg-gradient-to-br from-purple-600 to-pink-600 animate-pulse"
					style={{ animationDelay: '2s' }}
				/>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-24">
					<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border mb-6">
						<Zap className="w-5 h-5 text-accent" />
						<span className="text-sm font-medium text-accent">Technical Expertise</span>
					</div>
					<h2 ref={titleRef} className="text-6xl md:text-7xl font-black mb-8 text-accent-gradient">
						My Skills
					</h2>
					<p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
						A focused overview of the tools and technologies I use to build quality products
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-20 mb-24">
					<div ref={skillsRef} className="space-y-8">
						<div className="flex items-center space-x-3 mb-3">
							<div className="w-12 h-12 rounded-2xl bg-accent-gradient flex items-center justify-center shadow-lg">
								<TrendingUp className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-3xl font-bold">Technical Stack</h3>
						</div>

						<div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
							{technicalSkills.map((skill) => (
								<div key={skill.name} className="skill-tile p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur shadow-md hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1">
									<div className="flex flex-col items-center text-center space-y-3">
										<div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}>
											<skill.icon className="w-6 h-6 text-white" />
										</div>
										<span className="font-semibold text-sm sm:text-base text-gray-800 dark:text-gray-200">{skill.name}</span>
									</div>
								</div>
							))}
						</div>
					</div>

					<div ref={categoriesRef} className="space-y-8">
						<div className="flex items-center space-x-3 mb-3">
							<div className="w-12 h-12 rounded-2xl bg-accent-gradient flex items-center justify-center shadow-lg">
								<Award className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-3xl font-bold">Design & Creative</h3>
						</div>

						<div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
							{designSkills.map((skill) => (
								<div key={skill.name} className="skill-tile p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur shadow-md hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1">
									<div className="flex flex-col items-center text-center space-y-3">
										<div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}>
											<skill.icon className="w-6 h-6 text-white" />
										</div>
										<span className="font-semibold text-sm sm:text-base text-gray-800 dark:text-gray-200">{skill.name}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="mt-24">
						<div className="text-center mb-20">
							<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border mb-6">
								<Rocket className="w-5 h-5 text-accent" />
								<span className="text-sm font-medium text-accent">Specialized Areas</span>
							</div>
							<h3 className="text-5xl font-black mb-6 text-accent-gradient">
								Skill Categories
							</h3>
						</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
	{skillCategories.map((category) => (
		<div
			key={category.title}
			className={`skill-category p-8 rounded-3xl transition-all duration-500 group hover:scale-105 hover:shadow-2xl ${
				'dark:bg-gradient-to-br ' + category.darkBgColor + ' dark:hover:bg-gray-700'
			} bg-gradient-to-br ${category.bgColor} hover:bg-gradient-to-br from-brand-50 to-white text-black dark:from-slate-950 dark:to-black dark:text-white shadow-xl`}
		>
			<div
				className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-2xl`}
			>
				<category.icon className="w-10 h-10 text-white" />
			</div>
			<h4 className="text-2xl font-bold mb-4 text-center">{category.title}</h4>
			<p className="text-center mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
				{category.description}
			</p>
			<div className="flex flex-wrap justify-center gap-2">
				{category.skills.map((skill) => {
					const Icon = getIconFor(skill);
					return (
						<span
							key={skill}
							className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full font-medium transition-all duration-300 hover:scale-110 bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
						>
							<Icon className="w-4 h-4 opacity-80" />
							{skill}
						</span>
					);
				})}
			</div>
		</div>
	))}
</div>

				</div>

				<div ref={additionalRef} className="mt-24">
					<div className="text-center mb-16">
						<h3 className="text-4xl font-bold mb-6">Additional Skills & Tools</h3>
						<p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
							A comprehensive toolkit that supports my development workflow
						</p>
					</div>

					{(() => {
						const tools = [
							'Git','GitHub','VS Code','Postman','Webpack','Vite','npm','yarn',
							'Docker','Linux','Jenkins','Figma','Adobe Creative Suite','Slack',
							'Jira','Notion','Miro','Lucidchart',
						];
						const rows = [[], [], []];
						tools.forEach((t, i) => rows[i % 3].push(t));

						return (
							<div className="space-y-6">
								{rows.map((row, idx) => (
									<div key={idx} className="marquee-row marquee-mask py-2">
										<div
											className={`marquee-track ${idx % 2 ? 'reverse' : ''}`}
											style={{ ['--duration']: `${24 + idx * 4}s` }}
										>
											{[...row, ...row].map((tool, i) => {
												const Icon = getIconFor(tool);
												return (
													<span
														key={`${tool}-${i}`}
														className="inline-flex items-center gap-2 mx-3 px-4 py-2 rounded-full border border-gray-200/60 bg-white/60 text-gray-800 shadow-sm dark:border-gray-700 dark:bg-slate-800/60 dark:text-gray-200"
													>
														<Icon className="w-4 h-4 opacity-80" />
														{tool}
													</span>
												);
											})}
										</div>
									</div>
								))}
							</div>
						);
					})()}
				</div>
			</div>
		</section>
	);
}