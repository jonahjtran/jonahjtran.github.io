export default function RelatedCoursework() {
    const courses = [
        "Data Sructures and Algorithms",
        "Linear Algebra",
        "Probability and Statistics for Computer Science",
        "Algorithms and Models of Computation",
        "Fundaments of Computer Architecture",
        "Intro to Computer Science II",
        "Dicrete Structures",
        "Management and Organizational Behavior"
    ];

    return (
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            {courses.map((skill) => (
                <span key={skill} className="badge bg-slate-800/60 text-white">
                    {skill}
                </span>
            ))}
        </div>
    );
}


