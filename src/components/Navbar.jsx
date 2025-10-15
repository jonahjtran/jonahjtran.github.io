import { Link, NavLink } from "react-router-dom";

const navItems = [
    {name: "Home", href: "/"},
    {name: "Professional", href: "/professional"},
    {name: "Blog", href: "/blog"}
];

export default function Navbar() {
    const linkBase = "px-3 py-2 text-lg font-medium text-white transition-colors";
    const linkActive = "text-slate-900 bg-slate-900/5 rounded-full";

    return (
        <nav className="sticky top-0 z-50 flex">
            <div className="mx-auto flex max-w-6xl items-center text-white justify-between gap-8 px-6 py-4">
                <Link
                    to="/"
                    className="text-lg font-semibold text-white tracking-tight text-slate-900 transition hover:text-blue-600"
                >
                    Jonah Tran
                </Link>
                <ul className="flex items-center gap-1 text-white overflow-x-auto">
                    {navItems.map(({name, href}) => (
                        <li key={name} className="flex-shrink-0 texxt-white">
                            <NavLink
                                to={href}
                                className={({isActive}) =>
                                    `${linkBase} ${isActive ? linkActive : "hover:text-blue-600"}`
                                }
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
