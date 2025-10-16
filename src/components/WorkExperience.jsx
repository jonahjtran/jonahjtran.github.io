import meavana from "../assets/meavana.png";
import synchrony from "../assets/synchrony.png";

export default function WorkExperience() {
    const work = [
        {title: "Mobile Development Intern", date: "January 2026", company: "Synchrony Financial", image: synchrony, description: "Working as a mobile development intern at Synchrony's Emerging Technology Center at Reseearch Park. "},

        {title: "Software Engineer Intern", date: "May 2025-August 2025", company: "MeaVana", image: meavana, description:"I worked as a full-stack developer, creating different study tools for the MeaVana platform. Notably, I created a pomodoro timer that integrated multiple tools and features such as integrated planners, music playesr, and timer settings to create an all in one study platform for students. I also created marketing technology, such as webscrapers to automate UIUC RSO contact retrieval, which sped up our outreach by near 45%. "},
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
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}