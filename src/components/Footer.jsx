import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import resumePdf from "../assets/resume.pdf";

const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jonah-tran", Icon: Linkedin },
    { label: "GitHub", href: "https://github.com/jonahjtran", Icon: Github },
    { label: "Email", href: "mailto:jonahjtran@gmail.com", Icon: Mail },
];

export default function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="mx-auto max-w-6xl px-6 py-14">
                <div className="flex flex-col items-center gap-6 text-center">
                    <h2 className="text-2xl sm:text-3xl font-semibold">Let's connect</h2>
                    <p className="max-w-md text-sm text-muted-foreground">
                        Open to software engineering, product, and tech consulting opportunities —
                        the fastest way to reach me is email or LinkedIn.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {links.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                target={l.href.startsWith("http") ? "_blank" : undefined}
                                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold transition hover:text-primary focus-visible:ring-focus"
                            >
                                <l.Icon className="h-4 w-4" aria-hidden="true" />
                                {l.label}
                            </a>
                        ))}
                        <a
                            href={resumePdf}
                            download="Jonah_Tran_Resume.pdf"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 focus-visible:ring-focus"
                        >
                            <FileDown className="h-4 w-4" aria-hidden="true" />
                            Resume
                        </a>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Jonah Tran
                    </p>
                </div>
            </div>
        </footer>
    );
}
