import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
    const getInitialTheme = () => {
        const stored = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null;
        if (stored === 'light' || stored === 'dark') return stored;
        const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    const value = useMemo(() => ({
        theme,
        toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    }), [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}


