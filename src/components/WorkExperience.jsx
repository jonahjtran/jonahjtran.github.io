import meavana from "../assets/meavana.png";
import synchrony from "../assets/synchrony.png";
import cube from "../assets/cube.png";
import gtmshift from "../assets/gtmshift.png";

export default function WorkExperience() {
    const work = [
        {title: "Software Engineering Intern, Emerging Technology Center", date: "Jan 2026 - Present", company: "Synchrony Financial", image: synchrony, subteams: [
            {name: "Synchrony Business Solutions (SBS) Team", description: "Built an MCP server with 136 passing tests at 85% coverage enabling an LLM to interpret 25+ economic and SEO data fields and generate plain-language insights for non-technical business users. Surfaced trends from large datasets by building interactive Sigma dashboards over Snowflake Marketplace data for the Business Solutions team."},
            {name: "SyPI Team", description: "Developed features and reduced technical debt in SyPI, the Swift/UIKit in-app card-management plugin embedded in partner apps (Amazon, Dick's Sporting Goods) serving 70M+ active accounts. Built a UICatalog test harness for the SyPI plugin to streamline QA across multiple partner configurations."},
        ]},

        {title: "Technical Lead & Solutions Architect", date: "Jan 2026 - Present", company: "GTMShift (CUBE Consulting)", image: gtmshift, description: "Led a 7-person team delivering a custom CRM and member-intelligence dashboard that unifies enrichment, lead scoring, and outreach in a single interface. Built a contact-enrichment pipeline (Apollo AI) and a scoring algorithm to surface high-priority contacts; automated APIs, triggers, and messaging with Make on a Supabase/PostgreSQL backend. Architected an ICP-scoring member-intelligence system (FastAPI, Google Auth, Supabase), reviewing PRs, building API endpoints, and driving on-time delivery."},

        {title: "Software Engineering Intern", date: "May 2025 - Aug 2025", company: "MeaVana", image: meavana, description:"Served 20,000+ monthly active users by building productivity tools with React and Node.js over a 12-week internship. Boosted outreach 45% by developing scrapers that retrieved contact info from 200+ UIUC student organizations."},
    ]

    return (
        <div className="relative w-full">
            {/* left-aligned timeline; per-item connectors rendered in center column */}
            <ul className="space-y-0">
                {work.map((item, index) => (
                    <li key={index} className="grid grid-cols-1 md:grid-cols-[minmax(12rem,1fr)_64px_2fr] items-stretch gap-6 py-6 md:py-8">
                        {/* Left: title and date */}
                        <div className="md:text-right md:pr-6">
                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                            <span className="text-sm text-white/60">{item.date}</span>
                        </div>

                        {/* Center: logo on the timeline with connectors */}
                        <div className="relative self-stretch flex items-center justify-center">
                            <span className="z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full ring-2 ring-white/25 bg-white">
                                <img src={item.image} alt={`${item.company} logo`} className="h-full w-full object-contain p-1" />
                            </span>
                        </div>

                        {/* Right: company and description */}
                        <div className="md:pl-6">
                            <p className="text-blue-400 font-medium">{item.company}</p>
                            {item.description && (
                                <p className="text-sm text-white/70 mt-2">{item.description}</p>
                            )}
                            {item.subteams && (
                                <div className="mt-3 space-y-3">
                                    {item.subteams.map((sub) => (
                                        <div key={sub.name}>
                                            <p className="text-sm font-semibold text-white/90">{sub.name}</p>
                                            <p className="text-sm text-white/70 mt-1">{sub.description}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}