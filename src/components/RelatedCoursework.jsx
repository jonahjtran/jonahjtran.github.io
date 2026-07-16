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
        <div className="flex flex-wrap gap-2">
            {courses.map((skill) => (
                <span key={skill} className="badge">
                    {skill}
                </span>
            ))}
        </div>
    );
}


