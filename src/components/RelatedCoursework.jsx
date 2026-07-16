export default function RelatedCoursework() {
    const courses = [
        "Data Structures & Algorithms (C++)",
        "Database Systems (SQL, Neo4j, MongoDB)",
        "Applied Machine Learning",
        "Algorithms & Models of Computation",
        "System Programming",
        "Computer Architecture",
        "Linear Algebra",
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


