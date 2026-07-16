import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
                <Link
                    key={post.slug}
                    to={`/post/${post.slug}`}
                    className="soft-card block p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow focus-visible:ring-focus"
                >
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
                    <p className="mt-4 text-xs font-semibold text-primary">Read post →</p>
                </Link>
            ))}
        </div>
    );
}
