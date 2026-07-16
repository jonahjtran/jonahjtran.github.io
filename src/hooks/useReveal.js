import { useEffect, useRef, useState } from "react";

// One-directional scroll reveal. Returns [ref, revealed].
// Reveals immediately when reduced motion is preferred or IO is unavailable.
export default function useReveal({ threshold = 0.15 } = {}) {
    const ref = useRef(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (
            typeof IntersectionObserver === "undefined" ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            setRevealed(true);
            return;
        }
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setRevealed(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, revealed];
}
