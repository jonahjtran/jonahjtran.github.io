import headshot from "../assets/headshot.JPEG";
import resumePdf from "../assets/resume.pdf";
import { FileDown, Linkedin } from "lucide-react";
import Section from "../components/Section";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Footer from "../components/Footer";
import Education from "../components/Education";
import Projects from "../components/Projects";
import BlogList from "../components/BlogList";

const heroStats = [
    { value: "70M+", label: "accounts served by SyPI plugin work at Synchrony" },
    { value: "20K+", label: "monthly active users built for at MeaVana" },
    { value: "7", label: "person team led as Technical Lead at GTMShift" },
];

export default function Home() {
    return <div className="min-h-screen">
        <section id="home" className="section-pad">
            <div className="mx-auto max-w-4xl px-6 flex flex-col items-center text-center">
                <img
                    src={headshot}
                    alt="Jonah Tran"
                    width="160"
                    height="160"
                    className="h-32 w-32 sm:h-40 sm:w-40 rounded-full object-cover ring-2 ring-border shadow-card"
                />
                <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">Jonah Tran</h1>
                <p className="mt-3 max-w-2xl text-lg sm:text-xl text-muted-foreground">
                    Software engineer focused on backend systems and applied AI — CS major,
                    Business minor at UIUC, working at the intersection of technology and business.
                </p>

                <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
                    {heroStats.map((s) => (
                        <div key={s.value} className="soft-card px-4 py-4">
                            <dt className="sr-only">{s.label}</dt>
                            <dd className="text-2xl font-bold text-primary">{s.value}</dd>
                            <p className="mt-1 text-xs text-muted-foreground" aria-hidden="true">{s.label}</p>
                        </div>
                    ))}
                </dl>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <a
                        href={resumePdf}
                        download="Jonah_Tran_Resume.pdf"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 focus-visible:ring-focus"
                    >
                        <FileDown className="h-4 w-4" aria-hidden="true" />
                        Download Resume
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jonah-tran"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:text-primary focus-visible:ring-focus"
                    >
                        <Linkedin className="h-4 w-4" aria-hidden="true" />
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </section>

        <Section
            id="experience"
            eyebrow="Where I've worked"
            title="Experience"
            lead="Internships and technical leadership across fintech, consulting, and startups."
        >
            <WorkExperience />
        </Section>

        <Section
            id="projects"
            eyebrow="What I've built"
            title="Projects"
            lead="Select a project to read the full case study — problem, approach, result, and stack."
        >
            <Projects />
        </Section>

        <Section
            id="professional"
            eyebrow="About & skills"
            title="Profile"
            lead="What I'm doing now and the tools I reach for."
        >
            <About />
        </Section>

        <Section
            id="education"
            eyebrow="Education & leadership"
            title="Education"
        >
            <Education />
        </Section>

        <Section
            id="blog"
            eyebrow="Writing"
            title="Blog"
            lead="Thoughts on software, learning, and projects."
        >
            <BlogList />
        </Section>

        <section id="contact">
            <Footer />
        </section>
    </div>;
}
