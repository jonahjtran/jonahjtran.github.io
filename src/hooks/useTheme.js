import { useCallback, useEffect, useState } from "react";

function getCurrentTheme() {
    return document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark";
}

export default function useTheme() {
    const [theme, setThemeState] = useState(getCurrentTheme);

    const setTheme = useCallback((next) => {
        document.documentElement.setAttribute("data-theme", next);
        try {
            localStorage.setItem("theme", next);
        } catch {
            /* private browsing */
        }
        setThemeState(next);
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme(getCurrentTheme() === "light" ? "dark" : "light");
    }, [setTheme]);

    // Follow system changes only while the user has no manual override
    useEffect(() => {
        let stored = null;
        try {
            stored = localStorage.getItem("theme");
        } catch {
            /* private browsing */
        }
        if (stored === "light" || stored === "dark") return;

        const mq = window.matchMedia("(prefers-color-scheme: light)");
        const onChange = (e) => {
            const next = e.matches ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", next);
            setThemeState(next);
        };
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    return { theme, setTheme, toggleTheme };
}
