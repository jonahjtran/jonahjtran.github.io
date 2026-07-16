import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Menu, Moon, Search, Sun, X, FileDown } from "lucide-react";
import useTheme from "../hooks/useTheme";
import resumePdf from "../assets/resume.pdf";

const base = import.meta.env.BASE_URL || "/";
const navItems = [
    { name: "Home", href: `${base}#home` },
    { name: "Experience", href: `${base}#experience` },
    { name: "Projects", href: `${base}#projects` },
    { name: "Profile", href: `${base}#professional` },
    { name: "Education", href: `${base}#education` },
    { name: "Blog", href: `${base}#blog` },
    { name: "Contact", href: `${base}#contact` },
];

const contactLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jonah-tran", Icon: Linkedin },
    { label: "GitHub", href: "https://github.com/jonahjtran", Icon: Github },
    { label: "Email", href: "mailto:jonahjtran@gmail.com", Icon: Mail },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [open, setOpen] = useState(false);

    const iconBtn =
        "inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary hover:bg-secondary focus-visible:ring-focus";

    return (
        <nav className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 py-3 w-full">
                <a
                    href={`${base}#home`}
                    className="text-lg font-semibold tracking-tight text-foreground transition hover:text-primary"
                >
                    Jonah Tran
                </a>

                {/* Desktop nav */}
                <ul className="hidden lg:flex items-center gap-1">
                    {navItems.map(({ name, href }) => (
                        <li key={name}>
                            <Link
                                to={href}
                                className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-1 sm:gap-2">
                    {/* Contact cluster */}
                    <div className="hidden sm:flex items-center gap-1">
                        {contactLinks.map((c) => (
                            <a
                                key={c.label}
                                href={c.href}
                                target={c.href.startsWith("http") ? "_blank" : undefined}
                                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                aria-label={c.label}
                                className={iconBtn}
                            >
                                <c.Icon className="h-4.5 w-4.5" aria-hidden="true" />
                            </a>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
                        aria-label="Open command palette (Cmd+K)"
                        title="Search (⌘K)"
                        className={iconBtn}
                    >
                        <Search className="h-4.5 w-4.5" aria-hidden="true" />
                    </button>

                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        className={iconBtn}
                    >
                        {theme === "dark" ? (
                            <Sun className="h-4.5 w-4.5" aria-hidden="true" />
                        ) : (
                            <Moon className="h-4.5 w-4.5" aria-hidden="true" />
                        )}
                    </button>

                    <a
                        href={resumePdf}
                        download="Jonah_Tran_Resume.pdf"
                        className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 focus-visible:ring-focus"
                    >
                        <FileDown className="h-4 w-4" aria-hidden="true" />
                        Resume
                    </a>

                    {/* Mobile menu toggle */}
                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        className={`${iconBtn} lg:hidden`}
                    >
                        {open ? (
                            <X className="h-5 w-5" aria-hidden="true" />
                        ) : (
                            <Menu className="h-5 w-5" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
                    <ul className="px-4 py-3 space-y-1">
                        {navItems.map(({ name, href }) => (
                            <li key={name}>
                                <Link
                                    to={href}
                                    onClick={() => setOpen(false)}
                                    className="block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-primary"
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                        <li className="flex items-center gap-2 px-3 pt-2">
                            {contactLinks.map((c) => (
                                <a
                                    key={c.label}
                                    href={c.href}
                                    target={c.href.startsWith("http") ? "_blank" : undefined}
                                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    aria-label={c.label}
                                    className={iconBtn}
                                >
                                    <c.Icon className="h-5 w-5" aria-hidden="true" />
                                </a>
                            ))}
                            <a
                                href={resumePdf}
                                download="Jonah_Tran_Resume.pdf"
                                className="ml-auto inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                            >
                                <FileDown className="h-4 w-4" aria-hidden="true" />
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
