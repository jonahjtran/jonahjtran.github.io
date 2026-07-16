import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, X, Users } from "lucide-react";
import { projects } from "../data/projects";
import useReveal from "../hooks/useReveal";

function CaseStudySection({ label, children }) {
    return (
        <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{label}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
        </div>
    );
}

function ProjectCard({ project }) {
    const [ref, revealed] = useReveal();

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button
                    ref={ref}
                    type="button"
                    className={`soft-card group p-6 text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-glow focus-visible:ring-focus ${
                        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <ArrowUpRight
                            className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:text-primary"
                            aria-hidden="true"
                        />
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{project.hook}</p>
                    <p className="mt-4 text-xl font-bold text-primary">{project.metric}</p>
                    {project.scope && (
                        <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                            <Users className="h-3.5 w-3.5" aria-hidden="true" />
                            {project.scope}
                        </p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((t) => (
                            <span key={t} className="badge">{t}</span>
                        ))}
                    </div>
                    <p className="mt-5 text-xs font-semibold text-primary">Read case study →</p>
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="dialog-overlay fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm" />
                <Dialog.Content className="dialog-content fixed left-1/2 top-1/2 z-[70] w-[calc(100vw-2rem)] max-w-2xl max-h-[85vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <Dialog.Title className="text-2xl font-semibold">{project.title}</Dialog.Title>
                            <Dialog.Description className="mt-1 text-sm text-muted-foreground">
                                {project.hook}
                            </Dialog.Description>
                        </div>
                        <Dialog.Close asChild>
                            <button
                                type="button"
                                aria-label="Close case study"
                                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-foreground focus-visible:ring-focus"
                            >
                                <X className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </Dialog.Close>
                    </div>

                    {project.scope && (
                        <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                            <Users className="h-3.5 w-3.5" aria-hidden="true" />
                            {project.scope}
                        </p>
                    )}

                    <div className="mt-6 space-y-6">
                        <CaseStudySection label="Problem">{project.problem}</CaseStudySection>
                        <CaseStudySection label="Approach">{project.approach}</CaseStudySection>
                        <CaseStudySection label="Result">{project.result}</CaseStudySection>
                        <div>
                            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Tech Stack</h4>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {project.tags.map((t) => (
                                    <span key={t} className="badge">{t}</span>
                                ))}
                            </div>
                        </div>
                        {project.links?.length > 0 && (
                            <div className="flex gap-4 border-t border-border pt-4">
                                {project.links.map((l) => (
                                    <a
                                        key={l.label}
                                        href={l.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                                    >
                                        {l.label}
                                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default function Projects() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
            ))}
        </div>
    );
}
