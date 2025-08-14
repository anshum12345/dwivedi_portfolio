import React from 'react';
import Hero3D from './Hero3D';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Hero() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
            <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
                <motion.div 
                    className="space-y-6 md:space-y-8"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full chip-accent">
                            Design × Engineering
                        </span>
                    </motion.div>
                    
                    <motion.h1 
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                        variants={itemVariants}
                    >
                        <span className="block text-slate-900 dark:text-white">Crafting immersive</span>
                        <span className="block text-accent-gradient">digital experiences</span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
                        variants={itemVariants}
                    >
                        Specializing in performant React applications with advanced animations using Framer Motion, GSAP, and Three.js for engaging user experiences.
                    </motion.p>
                    
                    <motion.div className="flex flex-wrap gap-4 pt-2" variants={itemVariants}>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary"
                        >
                            View my work
                            <ArrowRightIcon className="h-5 w-5 ml-2 inline" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-secondary"
                        >
                            About me
                        </motion.button>
                    </motion.div>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-brand-600/10 to-cyan-400/10 blur-lg opacity-50 dark:opacity-30"></div>
                    <Hero3D />
                </motion.div>
            </div>
        </div>
    );
}