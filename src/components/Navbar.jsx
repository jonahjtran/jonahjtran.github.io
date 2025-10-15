const navItems = [
    {name: "Home", href: "#home"},
    {name: "Professional", href: "#professional"},
    {name: "Blog", href: "#blog"}
];

export default function Navbar() {
    const linkBase = "px-3 py-2 text-lg font-medium text-white transition-colors";

    return (
        <nav className="fixed top-0 inset-x-0 z-50 flex bg-slate-900/60 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center text-white justify-between gap-8 px-6 py-4 w-full">
                <a
                    href="#home"
                    className="text-lg font-semibold text-white tracking-tight transition hover:text-blue-600"
                >
                    Jonah Tran
                </a>
                <ul className="flex items-center gap-1 text-white ">
                    {navItems.map(({name, href}) => (
                        <li key={name} className="flex-shrink-0 texxt-white">
                            <a href={href} className={`${linkBase} hover:text-blue-600`}>
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
