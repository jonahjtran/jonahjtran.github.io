export default function Section({ id, eyebrow, title, lead, children, className = "" }) {
    return (
        <section id={id} className={`section-pad ${className}`}>
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-10">
                    {eyebrow && (
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">
                            {eyebrow}
                        </p>
                    )}
                    <h2 className="text-3xl sm:text-4xl font-semibold">{title}</h2>
                    {lead && <p className="mt-3 max-w-2xl text-muted-foreground">{lead}</p>}
                </div>
                {children}
            </div>
        </section>
    );
}
