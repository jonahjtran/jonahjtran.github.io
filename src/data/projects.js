export const projects = [
    {
        slug: "jamtown",
        title: "Jamtown",
        hook: "RAG-powered artist matching for a consulting client",
        metric: "100+ artists",
        scope: "CUBE Consulting client engagement",
        problem:
            "Jamtown, a CUBE Consulting client, needed reliable artist-matching retrieval across a catalog of 100+ artists — keyword search alone couldn't capture the semantics of a match.",
        approach:
            "Built a RAG system over a Supabase vector store. Engineered a semantic-search embedding pipeline with HuggingFace all-mpnet-base-v2, using the Gemini API for generation and ranking.",
        result:
            "Improved artist-matching retrieval across 100+ artists with semantic search rather than keyword matching.",
        tags: ["Python", "HuggingFace", "Gemini API", "Supabase", "RAG"],
        links: [],
    },
    {
        slug: "mental-health-tracker",
        title: "Mental Health Tracker",
        hook: "FastAPI backend with layered architecture and AI journal insights",
        metric: "23 endpoints · 74% coverage",
        scope: null,
        problem:
            "A mental-health journaling app needed a secure, well-structured backend covering multiple resource areas, with authentication and AI-generated insights.",
        approach:
            "Designed a FastAPI backend with layered architecture (routes, services, repositories, schemas) exposing 23 versioned REST endpoints across 5 resource areas. Secured routes with JWT + Google OAuth and generated AI journal insights via the Google GenAI API.",
        result:
            "Achieved 74% code coverage with 60+ automated tests across a cleanly layered, versioned API.",
        tags: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT", "Google OAuth"],
        links: [{ label: "GitHub", href: "https://github.com/jonahjtran" }],
    },
    {
        slug: "basketball-stat-tracker",
        title: "Basketball Stat Tracker",
        hook: "Full-stack analytics platform with fast shot-chart rendering",
        metric: "~40 ms heatmaps · 30+ routes",
        scope: null,
        problem:
            "Tracking basketball performance requires modeling games, players, and shots relationally — and turning that data into visual insight fast.",
        approach:
            "Built a full-stack analytics platform (Django REST + Next.js/React) with a 7-entity schema exposing 30+ API routes, persisted to Supabase PostgreSQL.",
        result:
            "Renders Matplotlib shot-chart heatmaps in ~40 ms, served from a 30+ route API over a 7-entity schema.",
        tags: ["Python", "Django REST", "Next.js", "React", "PostgreSQL", "Matplotlib"],
        links: [{ label: "GitHub", href: "https://github.com/jonahjtran/Basketball-Stat-Tracker" }],
    },
];
