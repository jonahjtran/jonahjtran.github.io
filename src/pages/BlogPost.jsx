import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogPost() {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="mx-auto max-w-3xl px-6 py-10">
                <p className="text-white">Post not found.</p>
                <Link to="/#blog" className="text-blue-400 hover:text-blue-300 text-sm mt-4 inline-block">Back to Blog</Link>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-3xl px-6 py-10">
            <Link to="/#blog" className="text-blue-400 hover:text-blue-300 text-sm">← Back to Blog</Link>
            <h1 className="text-3xl font-semibold text-white mt-4">{post.title}</h1>
            <p className="text-xs text-white/60 mt-1">{new Date(post.date).toLocaleDateString()}</p>
            <article className="prose prose-invert mt-6 whitespace-pre-line">
                {post.content}
            </article>
        </div>
    );
}


