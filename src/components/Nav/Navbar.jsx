import React, { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X, Code } from 'lucide-react';
import gsap from 'gsap';
import { useTheme } from '../../theme/ThemeProvider';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const darkMode = theme === 'dark';
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            gsap.fromTo(
                '.nav-item',
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
            );
        } else {
            gsap.to('.nav-item', { y: -20, opacity: 0, duration: 0.2 });
        }
    }, [isMenuOpen]);

    const navItems = [
        { name: 'Home', href: '#home', icon: '🏠' },
        { name: 'About', href: '#about', icon: '👨‍💻' },
        { name: 'Skills', href: '#skills', icon: '⚡' },
           { name: 'Projects', href: '#projects', icon: '🚀' },
        { name: 'Experience', href: '#experience', icon: '💼' },
        { name: 'Education', href: '#education', icon: '🎓' },
     
        { name: 'Contact', href: '#contact', icon: '📧' },
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? `${
                          darkMode
                              ? 'bg-black/90 backdrop-blur-xl shadow-2xl'
                              : 'bg-gradient-to-br from-brand-50 to-white text-black dark:from-slate-950 dark:to-black dark:text-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200'
                      }`
                    : 'bg-transparent'
            }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div
                        className="flex items-center space-x-3 group cursor-pointer"
                        onClick={() => scrollToSection('#home')}
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                            <Code className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                                Anshum Dwivedi
                            </span>
                            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
                                Developer & Designer
                            </span>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium group ${
                                    activeSection === item.name.toLowerCase()
                                        ? `${darkMode ? 'text-blue-400 bg-blue-900/20' : 'text-blue-600 bg-blue-100'}`
                                        : `${
                                              darkMode
                                                  ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                                                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                                          }`
                                }`}
                            >
                                <span className="flex items-center space-x-2">
                                    <span className="text-sm">{item.icon}</span>
                                    <span>{item.name}</span>
                                    {activeSection === item.name.toLowerCase() && (
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" />
                                    )}
                                </span>
                                <div
                                    className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                                        darkMode
                                            ? 'bg-gradient-to-r from-blue-600/0 to-purple-600/0'
                                            : 'bg-gradient-to-r from-blue-100/0 to-purple-100/0'
                                    } group-hover:from-blue-600/10 group-hover:to-purple-600/10`}
                                />
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center space-x-3">
                        <button
                            onClick={toggleTheme}
                            className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                                darkMode
                                    ? 'bg-gray-800 hover:bg-gray-700 shadow-lg hover:shadow-xl'
                                    : 'bg-gray-100 hover:bg-gray-200 shadow-md hover:shadow-lg'
                            }`}
                            aria-label="Toggle theme"
                        >
                            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`lg:hidden p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                                darkMode
                                    ? 'bg-gray-800 hover:bg-gray-700 shadow-lg hover:shadow-xl'
                                    : 'bg-gray-100 hover:bg-gray-200 shadow-md hover:shadow-lg'
                            }`}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                            ) : (
                                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div
                        className={`lg:hidden py-6 ${
                            !darkMode ? 'border-t border-gray-200' : ''
                        } bg-gradient-to-b ${darkMode ? 'from-gray-900/95 to-black/95' : 'from-white/95 to-gray-50/95'} backdrop-blur-xl`}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`nav-item p-4 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                                        activeSection === item.name.toLowerCase()
                                            ? `${
                                                  darkMode
                                                      ? 'bg-blue-900/30 text-blue-400 border border-blue-700'
                                                      : 'bg-blue-100 text-blue-600 border border-blue-200'
                                              }`
                                            : `${
                                                  darkMode
                                                      ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                                                      : 'bg-gray-100/50 text-gray-700 hover:bg-gray-200/50 hover:text-gray-900'
                                              }`
                                    }`}
                                >
                                    <div className="flex items-center space-x-3">
                                        <span className="text-lg">{item.icon}</span>
                                        <span className="font-medium">{item.name}</span>
                                    </div>
                                    {activeSection === item.name.toLowerCase() && (
                                        <div className="mt-2 w-full h-0.5 bg-blue-500 rounded-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}


