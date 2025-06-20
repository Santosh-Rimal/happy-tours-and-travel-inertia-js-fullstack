import { Card, CardFooter } from '@/components/ui/card';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ReactNode, useState } from 'react';

interface UserLayoutProps {
    page: ReactNode;
}

export default function FrontendLayout({ page }: UserLayoutProps) {
    const { auth } = usePage<SharedData>().props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            {/* Navigation Bar */}
            <nav className="sticky top-0 z-50 bg-white px-4 py-3 shadow-md transition-all duration-300 sm:px-6">
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

            {/* Main Content */}
            <main className="flex-grow">{page}</main>
            <Card className="w-full">
                <CardFooter className="w-full">
                    {/* Footer */}
                    <footer className="w-full rounded bg-gradient-to-b from-gray-800 to-gray-900 px-4 py-12 text-white sm:px-6">
                        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                            {/* Company Info */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-white">V&D Developers</h3>
                                <p className="text-gray-300">
                                    We provide innovative IT solutions and training to help businesses grow in the digital world.
                                </p>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-300 transition hover:text-white">
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-300 transition hover:text-white">
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-300 transition hover:text-white">
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/" className="text-gray-300 transition hover:text-white hover:underline">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route('frontend.services')} className="text-gray-300 transition hover:text-white hover:underline">
                                            Our Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/works" className="text-gray-300 transition hover:text-white hover:underline">
                                            Our Works
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trainings" className="text-gray-300 transition hover:text-white hover:underline">
                                            Training
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/events" className="text-gray-300 transition hover:text-white hover:underline">
                                            Events
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Company Links */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-white">Company</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/abouts" className="text-gray-300 transition hover:text-white hover:underline">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/career" className="text-gray-300 transition hover:text-white hover:underline">
                                            Career
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-gray-300 transition hover:text-white hover:underline">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/quote" className="text-gray-300 transition hover:text-white hover:underline">
                                            Request Quote
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy" className="text-gray-300 transition hover:text-white hover:underline">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <svg
                                            className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-gray-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-gray-300">Kathmandu, Nepal</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-3 h-5 w-5 flex-shrink-0 text-gray-300"
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
                                        <a href="tel:9802890215" className="text-gray-300 transition hover:text-white hover:underline">
                                            9802890215
                                        </a>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-3 h-5 w-5 flex-shrink-0 text-gray-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <a href="mailto:info@vnddevelopers.com" className="text-gray-300 transition hover:text-white hover:underline">
                                            info@vnddevelopers.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="mx-auto mt-12 max-w-7xl border-t border-gray-700 pt-8 text-center text-gray-400">
                            <p>&copy; {new Date().getFullYear()} V&D Developers. All rights reserved.</p>
                        </div>
                    </footer>
                </CardFooter>
            </Card>
        </div>
    );
}
