
import BlogList from "../components/BlogList";

export default function Blog(){
    return (
        <section className="section-pad">
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="text-3xl font-semibold text-center mb-6">Blog</h2>
                <BlogList />
            </div>
        </section>
    )
}