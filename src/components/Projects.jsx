export default function Projects() {
    const projects = [
        {
            title: "Jamtown (CUBE Consulting Client)",
            description:
                "Built a RAG system over a Supabase vector store, improving artist-matching retrieval across 100+ artists. Engineered a semantic-search embedding pipeline with HuggingFace all-mpnet-base-v2 and the Gemini API for generation and ranking.",
            tags: ["Python", "HuggingFace", "Gemini API", "Supabase", "RAG"],
            links: [],
        },
        {
            title: "Mental Health Tracker",
            description:
                "Exposed 23 versioned REST endpoints across 5 resource areas via a FastAPI backend with layered architecture (routes, services, repositories, schemas). Achieved 74% code coverage with 60+ automated tests; secured routes with JWT + Google OAuth and generated AI journal insights via Google GenAI API.",
            tags: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT", "Google OAuth"],
            links: [{ label: "GitHub", href: "https://github.com/jonahjtran" }],
        },
        {
            title: "Basketball Stat Tracker",
            description:
                "Built a full-stack analytics platform (Django REST + Next.js/React) with a 7-entity schema exposing 30+ API routes; renders Matplotlib shot-chart heatmaps in ~40 ms persisted to Supabase PostgreSQL.",
            tags: ["Python", "Django REST", "Next.js", "React", "PostgreSQL", "Matplotlib"],
            links: [{ label: "GitHub", href: "https://github.com/jonahjtran/Basketball-Stat-Tracker" }],
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => (
                <article key={proj.title} className="soft-card p-5">
                    <h3 className="text-lg font-semibold text-white">{proj.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{proj.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {proj.tags.map((t) => (
                            <span key={t} className="badge bg-slate-800/60 text-white">{t}</span>
                        ))}
                    </div>
                    {proj.links?.length ? (
                        <div className="mt-4 flex gap-4">
                            {proj.links.map((l) => (
                                <a target="_blank" rel="noopener noreferrer"
                                    key={l.label}
                                    href={l.href}
                                    className="text-sm font-medium text-blue-400 hover:text-blue-300"
                                >
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    ) : null}
                </article>
            ))}
        </div>
    );
}


