export default function Projects() {
    const projects = [
        {
            title: "Basketball Stats Tracker",
            description:
                "A web application that allows users to track their basketball stats and analyze their performance. While tracking a users stats, various heatmaps can be generated from data related to games, seasons, or specific players.",
            tags: ["React", "Python", "Django", "Postgres", "REST API", "Matplotlib"],
            links: [{ label: "GitHub", href: "https://github.com/jonahjtran/Basketball-Stat-Tracker" }],
        },
        {
            title: "AI Financial Planning App",
            description:
                "I collaborated with in a team of 4 to create an AI-driven financial planner prototype in a 36 hour hackathon. We leveraged React for a modernized UI, while also integrating OAuth authenification for google authentificationa and connectiveity. Furthermore, we utilized Gemini's API to give AI-driven financial advice realted to a user's longterm goal. These insights were backed by financial bank data from Capital One's Nessi API, which were displayed to users using D3.js based visualizations to display spending patterns.",
            tags: ["Javascipt", "React", "D3.js", "Gemini API", "Capital One's Nessi API", "OAuth"],
            links: [{ label: "GitHub", href: "https://github.com/jonahjtran/Ekewaka" }],
        },
        {
            title: "Element Combination Drag and Drop Game",
            description:
                "Created a drag and drop game that allows users to combine elements to create new elements. This was a group project with 3 other students. Utilizing React and supabase for the frontend and database respectively, we were able to create a competitive multiplayergame mode that allowed users accross multiple devices to race to create a certain object. Integrating Gemini's API, we were also able to give users the ability to create new elements by combining elements that didn't have a set result upon combination.",
            tags: ["Javascript", "React", "Supabase", "Gemini API"],
            links: [{ label: "GitHub", href: "https://github.com/jonahjtran/Elemental-Clash" }],
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


