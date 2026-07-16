import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { posts } from "../data/posts";

export default function BlogPost() {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);

    const base = import.meta.env.BASE_URL || "/";
    const paragraphs = (post?.content ?? "").split(/\n\s*\n/);

    if (!post) {
        return (
            <div className="mx-auto max-w-3xl px-6 py-10">
                <p>Post not found.</p>
                <Link
                    to={`${base}#blog`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-3xl px-6 py-10">
            <Link
                to={`${base}#blog`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to Blog
            </Link>
            <h1 className="mt-6 text-3xl sm:text-4xl font-semibold">{post.title}</h1>
            <p className="mt-2 text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </p>
            <article className="mt-8">
                {paragraphs.map((para, idx) => (
                    <p key={idx} className="my-4 leading-relaxed text-muted-foreground">
                        {para}
                    </p>
                ))}
            </article>
        </div>
    );
}
