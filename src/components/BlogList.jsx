import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
                <Link
                    key={post.slug}
                    to={`/post/${post.slug}`}
                    className="soft-card p-5 block hover:shadow-lg transition-shadow"
                >
                    <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                    <p className="text-xs text-white/50 mt-1">{new Date(post.date).toLocaleDateString()}</p>
                    <p className="text-sm text-white/70 mt-3">{post.description}</p>
                </Link>
            ))}
        </div>
    );
}


