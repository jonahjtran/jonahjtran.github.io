import { Users } from "lucide-react";
import uiuc from "../assets/uiuc.png";
import ascend from "../assets/ascend.png";
import cube from "../assets/cube.png";
import esaa from "../assets/esaa.png";
import RelatedCoursework from "./RelatedCoursework";

const extracurricular = [
    {
        name: "CUBE Consulting",
        position: "Director of Human Resources, Executive Board",
        scope: "300+ applicants per cycle",
        description:
            "I manage recruiting for 300+ applicants to a technical consulting org, running application reviews, case workshops, interviews, and info sessions. I also built an automated Python strike/accountability system and a member point-tracking system to monitor involvement across the organization.",
        image: cube,
    },
    {
        name: "ESAA",
        position: "Director of Advancement",
        scope: "Org-wide professional development",
        description:
            "As Director of Advancement, I oversee and facilitate the professional development of the organization's members through resume reviews, LinkedIn workshops, and a mentorship system — helping each member build meaningful connections with UIUC alumni.",
        image: esaa,
    },
    {
        name: "Ascend UIUC Chapter",
        position: "New Member",
        scope: null,
        description:
            "I attend weekly meetings built on the organization's three pillars — family, professionalism, and leadership — meeting professionals across business and technology and participating in leadership workshops and events.",
        image: ascend,
    },
];

export default function Education() {
    return (
        <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
            <div className="soft-card p-6 sm:p-8 h-fit">
                <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-border">
                    <img src={uiuc} alt="UIUC logo" className="h-full w-full object-cover" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">University of Illinois at Urbana-Champaign</h3>
                <p className="mt-1 text-sm text-muted-foreground">Aug 2024 – May 2028 (expected)</p>
                <p className="mt-3 text-sm text-muted-foreground">
                    B.S. Computer Science, Minor in Business
                </p>
                <p className="mt-1 text-sm font-semibold text-primary">GPA 3.90 / 4.00 · Dean's List</p>
                <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Related Coursework
                </h4>
                <div className="mt-3">
                    <RelatedCoursework />
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-lg font-semibold">Leadership & Involvement</h3>
                {extracurricular.map((item) => (
                    <div key={item.name} className="soft-card p-6">
                        <div className="flex items-center gap-4">
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-border">
                                <img src={item.image} alt={`${item.name} logo`} className="h-full w-full object-cover" />
                            </span>
                            <div>
                                <h4 className="font-semibold">{item.name}</h4>
                                <p className="text-sm text-primary">{item.position}</p>
                            </div>
                        </div>
                        {item.scope && (
                            <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                                <Users className="h-3.5 w-3.5" aria-hidden="true" />
                                {item.scope}
                            </p>
                        )}
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
