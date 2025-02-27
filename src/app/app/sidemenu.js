import Link from 'next/link'

export default function Sidemenu({ children }) {
    return (
        <aside className="fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        w-[290px]
        -translate-x-full
        lg:translate-x-0">
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