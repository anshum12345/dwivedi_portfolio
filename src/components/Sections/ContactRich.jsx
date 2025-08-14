import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react'; // Removed Twitter import

gsap.registerPlugin(ScrollTrigger);

export default function ContactRich() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const formRef = useRef(null);
    const infoRef = useRef(null);

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
                formRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
                '-=0.4'
            )
            .fromTo(
                infoRef.current,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
                '-=0.4'
            );
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitStatus(null), 3000);
        }, 1200);
    };

    const contactInfo = [
        { icon: Mail, title: 'Email', value: 'anshumdwivedi8@gmail.com', link: 'mailto:anshumdwivedi8@gmail.com' },
        { icon: Phone, title: 'Phone', value: '+91 8052078680', link: 'tel:+918052078680' },
        { icon: MapPin, title: 'Location', value: 'Noida, India', link: '#' },
    ];

    const socialLinks = [
        { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/anshum-dwivedi-67530922a/', color: 'hover:bg-blue-600 hover:text-white' },
        { name: 'GitHub', icon: Github, url: 'https://github.com/anshum12345', color: 'hover:bg-gray-800 hover:text-white' },
        { 
            name: 'X', 
            icon: () => (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2H21l-6.34 7.257L22 22h-5.76l-4.4-6.504L6.8 22H4l6.64-7.602L2 2h5.88l4.06 5.94L18.244 2zM6.8 4l10.4 14h1.6L8.4 4H6.8z" />
                </svg>
            ), 
            url: 'https://x.com/AnshumDwivedi08', 
            color: 'hover:bg-sky-500 hover:text-white' 
        },
    ];

    return (
        <section id="contact" ref={sectionRef} className="py-20 bg-gray-50 text-black dark:bg-black dark:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h2>
                    <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        I’m open to roles, collaborations, and freelance work. Reach out via email or the form below.
                    </p>
                </div>

                {/* Form + Info */}
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Form */}
                    <div ref={formRef}>
                        <div className="p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800">
                            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Name *</label>
                                        <input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your name" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email *</label>
                                        <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="your.email@example.com" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Subject *</label>
                                    <input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="What's this about?" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message *</label>
                                    <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleInputChange} required placeholder="Tell me about your project or opportunity..." className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
                                </div>

                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-lg">
                                        Thank you! Your message has been sent successfully. I'll get back to you soon.
                                    </div>
                                )}

                                <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full bg-brand-600 text-white hover:bg-brand-700">
                                    {isSubmitting ? (
                                        <div className="flex items-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                                            Sending...
                                        </div>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div ref={infoRef}>
                        <div className="space-y-8">
                            <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info) => (
                                        <div key={info.title} className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 chip-accent">
                                                <info.icon className="w-6 h-6 text-accent" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">{info.title}</h4>
                                                <a href={info.link} className="text-accent hover:opacity-80">{info.value}</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800">
                                <h3 className="text-2xl font-bold mb-6">Connect</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {socialLinks.map((social) => (
                                        <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className={`flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ${social.color}`}>
                                            <social.icon />
                                            <span className="font-medium">{social.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800">
                                <h3 className="text-2xl font-bold mb-6">Availability</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Current Status:</span>
                                        <span className="px-3 py-1 text-sm rounded-full font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Available for Work</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Response Time:</span>
                                        <span className="font-medium">Within 24 hours</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Preferred Contact:</span>
                                        <span className="font-medium">Email</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="p-8 max-w-2xl mx-auto rounded-2xl shadow-lg bg-white dark:bg-gray-800">
                        <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
                        <p className="mb-6 text-gray-600 dark:text-gray-300">
                            Whether you have a project in mind or want to discuss an opportunity, I’d love to hear from you.
                        </p>
                        <a href="mailto:anshumdwivedi8@gmail.com" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-brand-600 text-white hover:bg-brand-700">
                            <Mail className="w-5 h-5 mr-2" />
                            Email Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
