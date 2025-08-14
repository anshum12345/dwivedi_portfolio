import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import Footer from '../Nav/Footer';

export default function Layout({ children }) {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const target = document.querySelector(location.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);
    return (
        <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-brand-50 to-white text-black dark:from-slate-950 dark:to-black dark:text-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
            <div className="noise" />
            <Navbar />
            <main className="pt-20 overflow-x-hidden">{children}</main>
            <Footer />
        </div>
    );
}


