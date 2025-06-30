import { Link } from '@inertiajs/react';
import { useState } from 'react';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <nav className="sticky top-0 z-50 bg-green-600 px-4 py-3 text-white shadow-md transition-all duration-300 sm:px-6">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    {/* Logo/Company Name */}
                    <Link href="/" className="group flex items-center">
                        <div className="text-xl font-bold text-blue-800 transition-all duration-300 group-hover:text-blue-600 sm:text-2xl">
                            V&D Developers
                        </div>
                    </Link>

                    {/* Main Navigation - Desktop */}
                    <ul className="hidden items-center space-x-4 md:flex lg:space-x-6">
                        {/* {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm transition-all hover:bg-blue-100 hover:shadow-md"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="rounded-lg px-4 py-1.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-blue-600"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm transition-all hover:bg-blue-100 hover:shadow-md"
                                >
                                    Register
                                </Link>
                            </>
                        )} */}
                        <li>
                            <Link
                                href="/"
                                className="rounded-lg px-3 py-2 font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-blue-600"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="group relative">
                            <Link
                                href={route('frontend.services')}
                                className="flex items-center rounded-lg px-3 py-2 font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-blue-600"
                            >
                                Our Services
                                <svg
                                    className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/works"
                                className="rounded-lg px-3 py-2 font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-blue-600"
                            >
                                Our Works
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/trainings"
                                className="rounded-lg px-3 py-2 font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-blue-600"
                            >
                                Training
                            </Link>
                            {/* <Link
                                href="/events"
                                className="rounded-lg px-3 py-2 font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-blue-600"
                            >
                                Event
                            </Link> */}
                        </li>
                        <li className="group relative">
                            <Link
                                href="/abouts"
                                className="flex items-center rounded-lg px-3 py-2 font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-blue-600"
                            >
                                About Us
                                <svg
                                    className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                        </li>
                        <Link
                            href="/contacts"
                            className="rounded-lg px-3 py-2 font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-blue-600"
                        >
                            Contact Us
                        </Link>
                    </ul>

                    {/* Phone and CTA */}
                    <div className="flex items-center space-x-3">
                        <a
                            href="tel:9802890215"
                            className="hidden items-center rounded-lg px-3 py-2 font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-blue-600 md:flex"
                        >
                            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            <span className="hidden lg:inline">9802890215</span>
                        </a>
                        <Link
                            href="/quote"
                            className="hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 font-medium text-white shadow-md transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-lg sm:block"
                        >
                            Request Quote
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-all hover:bg-gray-100 focus:outline-none md:hidden"
                            onClick={handleMenu}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation - Shows when isMenuOpen is true */}
                <div
                    className={`${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 md:hidden`}
                >
                    <div className="mt-3 space-y-1 pb-3">
                        {/* {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="block rounded-lg bg-blue-50 px-4 py-3 text-base font-medium text-blue-700"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <div className="grid grid-cols-2 gap-2">
                                <Link
                                    href={route('login')}
                                    className="block rounded-lg bg-gray-100 px-4 py-3 text-center text-base font-medium text-gray-700"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="block rounded-lg bg-blue-50 px-4 py-3 text-center text-base font-medium text-blue-700"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Register
                                </Link>
                            </div>
                        )} */}
                        <Link
                            href="/"
                            className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href={route('frontend.services')}
                            className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Our Services
                        </Link>
                        <Link
                            href="/works"
                            className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Our Works
                        </Link>
                        <Link
                            href="/trainings"
                            className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Training
                        </Link>
                        <Link
                            href="/events"
                            className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Event
                        </Link>
                        <Link
                            href="/abouts"
                            className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/contacts"
                            className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                        <div className="pt-1">
                            <a
                                href="tel:9802890215"
                                className="flex items-center rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-100"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg
                                    className="mr-3 h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                Call Us: 9802890215
                            </a>
                        </div>
                        <div className="pt-1">
                            <Link
                                href="/quote"
                                className="block rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3 text-center text-base font-medium text-white shadow-md transition-all hover:from-blue-700 hover:to-blue-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Request Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
