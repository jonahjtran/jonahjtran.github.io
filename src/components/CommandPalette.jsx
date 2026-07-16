import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { Search, Hash, FolderGit2, FileText, CornerDownLeft } from "lucide-react";
import { posts } from "../data/posts";
import { projects } from "../data/projects";

const base = import.meta.env.BASE_URL || "/";

const items = [
    ...[
        ["Home", "home"],
        ["Experience", "experience"],
        ["Projects", "projects"],
        ["Profile", "professional"],
        ["Education", "education"],
        ["Blog", "blog"],
        ["Contact", "contact"],
    ].map(([name, anchor]) => ({
        group: "Sections",
        Icon: Hash,
        label: name,
        to: `${base}#${anchor}`,
    })),
    ...projects.map((p) => ({
        group: "Projects",
        Icon: FolderGit2,
        label: p.title,
        keywords: p.tags.join(" "),
        to: `${base}#projects`,
    })),
    ...posts.map((p) => ({
        group: "Blog posts",
        Icon: FileText,
        label: p.title,
        to: `/post/${p.slug}`,
    })),
];

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(0);
    const navigate = useNavigate();
    const listRef = useRef(null);

    useEffect(() => {
        const onKey = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setOpen((o) => !o);
            }
        };
        const onOpenEvent = () => setOpen(true);
        window.addEventListener("keydown", onKey);
        window.addEventListener("open-command-palette", onOpenEvent);
        return () => {
            window.removeEventListener("keydown", onKey);
            window.removeEventListener("open-command-palette", onOpenEvent);
        };
    }, []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return items;
        return items.filter(
            (i) =>
                i.label.toLowerCase().includes(q) ||
                (i.keywords && i.keywords.toLowerCase().includes(q))
        );
    }, [query]);

    useEffect(() => setActive(0), [query, open]);

    const select = (item) => {
        setOpen(false);
        setQuery("");
        navigate(item.to);
    };

    const onInputKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActive((a) => Math.min(a + 1, filtered.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActive((a) => Math.max(a - 1, 0));
        } else if (e.key === "Enter" && filtered[active]) {
            e.preventDefault();
            select(filtered[active]);
        }
    };

    useEffect(() => {
        listRef.current
            ?.querySelector(`[data-index="${active}"]`)
            ?.scrollIntoView({ block: "nearest" });
    }, [active]);

    let lastGroup = null;

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="dialog-overlay fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm" />
                <Dialog.Content className="palette-content fixed left-1/2 top-[20%] z-[70] w-[calc(100vw-2rem)] max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                    <Dialog.Title className="sr-only">Command palette</Dialog.Title>
                    <Dialog.Description className="sr-only">
                        Search sections, projects, and blog posts
                    </Dialog.Description>
                    <div className="flex items-center gap-3 border-b border-border px-4">
                        <Search className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        <input
                            autoFocus
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={onInputKeyDown}
                            placeholder="Search sections, projects, posts…"
                            aria-label="Search"
                            className="w-full bg-transparent py-3.5 text-sm outline-none placeholder:text-muted-foreground"
                        />
                        <kbd className="hidden sm:inline-flex items-center rounded border border-border px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            ESC
                        </kbd>
                    </div>
                    <div ref={listRef} className="max-h-72 overflow-y-auto p-2">
                        {filtered.length === 0 && (
                            <p className="px-3 py-6 text-center text-sm text-muted-foreground">No results.</p>
                        )}
                        {filtered.map((item, idx) => {
                            const showGroup = item.group !== lastGroup;
                            lastGroup = item.group;
                            return (
                                <div key={`${item.group}-${item.label}`}>
                                    {showGroup && (
                                        <p className="px-3 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                                            {item.group}
                                        </p>
                                    )}
                                    <button
                                        type="button"
                                        data-index={idx}
                                        onClick={() => select(item)}
                                        onMouseMove={() => setActive(idx)}
                                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                                            idx === active
                                                ? "bg-secondary text-secondary-foreground"
                                                : "text-muted-foreground"
                                        }`}
                                    >
                                        <item.Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                                        <span className="flex-1 truncate">{item.label}</span>
                                        {idx === active && (
                                            <CornerDownLeft className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                                        )}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
