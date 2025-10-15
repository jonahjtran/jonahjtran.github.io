import uiuc from "../assets/uiuc.png";
import ascend from "../assets/ascend.png";
import cube from "../assets/cube.png";
import esaa from "../assets/esaa.png";
import RelatedCoursework from "./RelatedCoursework";


export default function Education() {
    const extracurricular = [
        {name: "CUBE Consulting", position: "Technical Consultant",description: "I am currently working to create an AI matching system for a music event company, where nonprofits and other organizations can be matched with fitting artists for a specific event or fundraiser. I am also conducting SEO analysis for the client's website, and spearheaded the refinement and deployment of the website. Furthermore, I serve on the Project Acquisition committee, where I professionally communicate with other company executives to offer the help of CUBE Consulting.", image: cube},
        {name: "Ascend UIUC Chapter", position: "New Member", description: "As a new member, I attend weekly meetings related to the organizations three pillars of family, professionalism, and leadership. I have the opportunity to meet with professionals in both the business and technology fields, as well as participate in workshops and events related to leadership and professionalism.", image: ascend},
        {name: "ESAA", position: "Director of Advancement", description: "As Director of Advancement, I oversee and facilitate the professional development of the organization's members. Doing this, I hold different professional development workshops, such as resume reviews, linkedin workshops, and a mentorship system. Primarily, my goal is to help each member make meaningful connections with the UIUC alumni that we meet.", image: esaa},
    ]
    return (
        <div className="text-white grid grid-cols-2 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
                <img src={uiuc} alt="UIUC" className="w-1/4" />
                <h1 className="text-xl font-semibold">University of Illinois at Urbana-Champaign</h1>
                <p className="text-sm text-white/60">August 2024 - May 2028</p>
                <p className="text-sm text-white/60">Bachelor of Science in Computer Science, Minor in Business</p>
                <h2 className="text-xl font-semibold mt-6">Related Coursework</h2>
                <RelatedCoursework />
            </div>
            
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold">Extracurricular Activities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {extracurricular.map((item) => (
                        <div key={item.name} className="flex flex-col gap-4">
                            <img src={item.image} alt={item.name} className="w-1/4" />
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-sm text-white/60">{item.position}</p>
                            <p className="text-sm text-white/60">{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}