import { Mail } from "lucide-react";

const skillGroups = [
    {
        label: "Languages",
        skills: ["Python", "JavaScript / TypeScript", "C/C++", "SQL", "Java", "Swift", "ASM"],
    },
    {
        label: "Frameworks & Libraries",
        skills: ["React", "Next.js", "Node.js", "FastAPI", "Django", "Scikit-learn", "NumPy", "Pandas", "NetworkX", "Matplotlib"],
    },
    {
        label: "Data & Infrastructure",
        skills: ["PostgreSQL", "Supabase", "Neo4j", "MongoDB", "Snowflake", "Sigma", "AWS", "Docker"],
    },
    {
        label: "AI / ML",
        skills: ["RAG", "MCP", "Gemini API", "Google GenAI", "HuggingFace"],
    },
    {
        label: "Practices & Tools",
        skills: ["Git / GitHub", "Agile/Scrum", "Jira", "Confluence", "Bitbucket", "Claude Code", "Cursor"],
    },
];

export default function About() {
    return (
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr]">
            <div className="soft-card p-6 sm:p-8 h-fit">
                <h3 className="text-lg font-semibold">Currently</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Software Engineering Intern at Synchrony Financial's Emerging Technology
                    Center and Technical Lead & Solutions Architect for GTMShift at CUBE
                    Consulting. Open to opportunities in software engineering, product
                    management, and tech consulting.
                </p>
                <a
                    href="mailto:jonahjtran@gmail.com"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold transition hover:text-primary focus-visible:ring-focus"
                >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    jonahjtran@gmail.com
                </a>
            </div>

            <div className="space-y-6">
                {skillGroups.map((group) => (
                    <div key={group.label}>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                            {group.label}
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <span key={skill} className="badge">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
