import meavana from "../assets/meavana.png";
import synchrony from "../assets/synchrony.png";

export default function WorkExperience() {
    const work = [
        {title: "Mobile Development Intern", date: "January 2026", company: "Synchrony Financial", image: synchrony, description: "test"},

        {title: "Software Engineer Intern", date: "May 2025-August 2025", company: "MeaVana", image: meavana, description:"test"},
    ]

    return (
        <div className="relative w-full">
            {/* left-aligned timeline; per-item line rendered in center column */}

            <ul className="space-y-10 md:space-y-14">
                {work.map((item, index) => (
                    <li key={index} className="grid grid-cols-1 md:grid-cols-[minmax(12rem,1fr)_64px_2fr] items-start gap-6">
                        {/* Left: title and date */}
                        <div className="md:text-right md:pr-6">
                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                            <span className="text-sm text-white/60">{item.date}</span>
                        </div>

                        {/* Center: logo on the timeline */}
                        <div className="relative flex items-center justify-center">
                            <span className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/15" aria-hidden="true" />
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
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}