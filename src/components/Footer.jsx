

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
                            href="https://github.com/jonahjtran"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition-colors"
                            aria-label="GitHub profile"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-6 w-6" aria-hidden="true" fill="currentColor">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"/>
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