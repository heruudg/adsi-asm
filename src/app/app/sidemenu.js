import Link from 'next/link'

export default function Sidemenu({ children }) {
    return (
        <aside className="sidebar fixed left-0 top-0 z-9999 flex h-screen w-[290px] flex-col overflow-y-auto overflow-y-hidden border-r border-gray-200 bg-white px-5 transition-all duration-300 dark:border-gray-800 dark:bg-black lg:static lg:translate-x-0 -translate-x-full">
            <div className="py-8 flex justify-start">
                <a href="/" data-discover="true">
                    <img src="/images/logo/logo.svg" alt="Logo" width="150" height="40" className="dark:hidden" />
                    <img className="hidden dark:block" src="/images/logo/logo-dark.svg" alt="Logo" width="150" height="40" />
                </a>
            </div>
            <nav className="mb-6">
                <div className="flex flex-col gap-4">
                    <div>
                        <h2 className="mb-4 text-xs uppercase flex leading-[20px] text-gray-400 justify-start">
                            Menu
                        </h2>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
            <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">

            </div>
        </aside>
    )}