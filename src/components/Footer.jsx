

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-slate-900/40 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-6 py-8">
                <div className="flex flex-col items-center gap-4 text-center">
                    <p className="text-lg text-white">Let's connect</p>
                    <div className="flex items-center gap-6">
                        <a
                            href="https://www.linkedin.com/in/jonah-tran"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition-colors"
                            aria-label="LinkedIn profile"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-6 w-6" aria-hidden="true" fill="currentColor">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zM4.943 13.5V6.169H2.542V13.5h2.401zm-1.2-8.332c.837 0 1.356-.554 1.356-1.248-.015-.709-.519-1.248-1.342-1.248-.823 0-1.356.54-1.356 1.248 0 .694.519 1.248 1.327 1.248h.015zM13.458 13.5V9.359c0-2.212-1.182-3.243-2.759-3.243-1.272 0-1.845.7-2.165 1.193v-1.04H6.134s.03.678 0 7.231h2.4v-4.039c0-.216.015-.432.08-.586.175-.431.574-.877 1.243-.877.877 0 1.229.662 1.229 1.631V13.5h2.372z"/>
                            </svg>
                        </a>
                        <a
                            href="mailto:jonahjtran@gmail.com"
                            className="text-white hover:text-blue-400 transition-colors"
                            aria-label="Send email"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-6 w-6" aria-hidden="true" fill="currentColor">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217l-8 4.8-8-4.8V4z"/>
                                <path d="M0 5.383l7.555 4.533a.5.5 0 0 0 .89 0L16 5.383V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.383z"/>
                            </svg>
                        </a>
                    </div>
                    <p className="text-xs text-white/60">© {new Date().getFullYear()} Jonah Tran</p>
                </div>
            </div>
        </footer>
    )
}