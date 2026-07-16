import { Users } from "lucide-react";
import meavana from "../assets/meavana.png";
import synchrony from "../assets/synchrony.png";
import gtmshift from "../assets/gtmshift.png";
import useReveal from "../hooks/useReveal";

const work = [
    {
        title: "Software Engineering Intern, Emerging Technology Center",
        date: "Jan 2026 – Present",
        company: "Synchrony Financial",
        image: synchrony,
        scope: "Cross-team: business stakeholders + partner-facing mobile SDK",
        subteams: [
            {
                name: "Synchrony Business Solutions (SBS) Team",
                description:
                    "Built an MCP server with 136 passing tests at 85% coverage enabling an LLM to interpret 25+ economic and SEO data fields and generate plain-language insights for non-technical business users. Surfaced trends from large datasets by building interactive Sigma dashboards over Snowflake Marketplace data for the Business Solutions team.",
            },
            {
                name: "SyPI Team",
                description:
                    "Developed features and reduced technical debt in SyPI, the Swift/UIKit in-app card-management plugin embedded in partner apps (Amazon, Dick's Sporting Goods) serving 70M+ active accounts. Built a UICatalog test harness for the SyPI plugin to streamline QA across multiple partner configurations.",
            },
        ],
    },
    {
        title: "Technical Lead & Solutions Architect",
        date: "Jan 2026 – Present",
        company: "GTMShift (CUBE Consulting)",
        image: gtmshift,
        scope: "Led 7-person team · client delivery",
        description:
            "Led a 7-person team delivering a custom CRM and member-intelligence dashboard that unifies enrichment, lead scoring, and outreach in a single interface. Built a contact-enrichment pipeline (Apollo AI) and a scoring algorithm to surface high-priority contacts; automated APIs, triggers, and messaging with Make on a Supabase/PostgreSQL backend. Architected an ICP-scoring member-intelligence system (FastAPI, Google Auth, Supabase), reviewing PRs, building API endpoints, and driving on-time delivery.",
    },
    {
        title: "Software Engineering Intern",
        date: "May 2025 – Aug 2025",
        company: "MeaVana",
        image: meavana,
        scope: null,
        description:
            "Served 20,000+ monthly active users by building productivity tools with React and Node.js over a 12-week internship. Boosted outreach 45% by developing scrapers that retrieved contact info from 200+ UIUC student organizations.",
    },
];

function TimelineEntry({ item }) {
    const [ref, revealed] = useReveal();

    return (
        <li
            ref={ref}
            className={`relative pl-16 sm:pl-20 pb-12 last:pb-0 transition-all duration-500 ${
                revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
            {/* Node: logo chip on the rail */}
            <span className="absolute left-0 top-0 z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-border shadow-card">
                <img src={item.image} alt={`${item.company} logo`} className="h-full w-full object-cover" />
            </span>

            <div className="soft-card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
                <p className="mt-1 font-medium text-primary">{item.company}</p>

                {item.scope && (
                    <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                        <Users className="h-3.5 w-3.5" aria-hidden="true" />
                        {item.scope}
                    </p>
                )}

                {item.description && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                )}
                {item.subteams && (
                    <div className="mt-4 space-y-4">
                        {item.subteams.map((sub) => (
                            <div key={sub.name} className="border-l-2 border-border pl-4">
                                <p className="text-sm font-semibold">{sub.name}</p>
                                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{sub.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </li>
    );
}

export default function WorkExperience() {
    return (
        <ul className="relative">
            {/* Timeline rail */}
            <span
                aria-hidden="true"
                className="absolute left-6 sm:left-7 top-2 bottom-2 w-px bg-border"
            />
            {work.map((item) => (
                <TimelineEntry key={item.company} item={item} />
            ))}
        </ul>
    );
}
