//import Navbar from "../components/Navbar"
import headshot from "../assets/headshot.JPEG";
import ProfileSection from "../components/ProfileSection";
import SkillsSection from "../components/SkillsSection";
import OtherSkillsSection from "../components/OtherSkillsSection";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
    return <div className="min-h-screen items-center justify-center align-middle padding-top-10">
        
        {/* Theme Toggle */}

        {/* Background Effects */}

        {/* Navbar */}

        {/* Main Content */}
        <section id="home" className="section-pad">
            <img src={headshot} alt="Profile Picture" className="w-1/5 h-1/2 mx-auto mt-20" />
            <div className="text-4xl font-bold text-center mt-20">Welcome!</div>
            <div className="mt-2 mx-auto max-w-prose px-4 text-2xl text-center">I'm Jonah Tran, a sophomore at the University of Illinois at Urbana-Champaign. I am majoring in Computer Science with a minor in Business. I am interested in software development, machine learning, and artificial intelligence. Particularly, I am interested in the intersection of business and technology and how they work together to help each field succeed. Other areas of interest include product management and consulting.</div>
        </section>

        <section id="professional" className="section-pad">
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="text-3xl font-semibold text-center mb-6">Professional</h2>
                <div className=" text-white px-8 pt-16 pb-6">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                        <ProfileSection />
                        <SkillsSection />
                    </div>
                </div>
                <div className="px-6">
                    <h3 className="text-2xl font-semibold text-center mb-4">Other Notable Skills</h3>
                    <OtherSkillsSection />
                </div>
                
            </div>
        </section>

        <section id="experience" className="section-pad">
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="text-3xl font-semibold text-center mb-6 align-left">Experience</h2>
                <WorkExperience />
            </div>
        </section>

        <section id="blog" className="section-pad">
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="text-3xl font-semibold text-center mb-6">Blog</h2>
                <p className="text-center text-lg text-white/80">Thoughts on software, learning, and projects.</p>
            </div>
        </section>

        {/* Footer */}
    </div>
}