export default function OtherSkillsSection() {
    const otherSkills = [
        "Git / GitHub",
        "Django",
        "Supabase",
        "Jupyter Notebook",
        "Numpy",
        "Pandas",
        "Matplotlib",
        "Scikit-learn",
        "Gemini API",
        "Google OAuth",
        "Docker",
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


