export default function Projects() {
    const projects = [
        {
            title: "Pomodoro Study Suite",
            description:
                "Full-stack study tool with timers, planners, and music integration.",
            tags: ["React", "Node", "Postgres"],
            links: [{ label: "GitHub", href: "#" }],
        },
        {
            title: "Web Scraper for Outreach",
            description:
                "Automated RSO contact scraping to accelerate marketing outreach.",
            tags: ["Python", "Requests", "BeautifulSoup"],
            links: [{ label: "GitHub", href: "#" }],
        },
        {
            title: "AI Matching System",
            description:
                "Prototype service to match nonprofits with artists for events.",
            tags: ["Python", "ML", "Vector Search"],
            links: [{ label: "GitHub", href: "#" }],
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
                                <a
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


