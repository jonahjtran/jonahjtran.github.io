export default function OtherSkillsSection() {
    const otherSkills = [
        "Git / GitHub",
        "FastAPI",
        "Django",
        "React",
        "Next.js",
        "Node.js",
        "Supabase",
        "PostgreSQL",
        "Neo4j",
        "MongoDB",
        "Snowflake",
        "Sigma",
        "NetworkX",
        "RAG",
        "MCP",
        "Gemini API",
        "Google GenAI",
        "Scikit-learn",
        "NumPy",
        "Pandas",
        "AWS",
        "Docker",
        "Jira",
        "Confluence",
        "Bitbucket",
        "Agile/Scrum",
        "Claude Code",
        "Cursor",
        "ASM",
    ];

    return (
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            {otherSkills.map((skill) => (
                <span key={skill} className="badge bg-slate-800/60 text-white">
                    {skill}
                </span>
            ))}
        </div>
    );
}


