import { Link } from '@inertiajs/react';
import { ReactNode, useState } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex min-h-screen flex-col">
            {/* Navigation */}
            <nav className="bg-white shadow-md">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link href="/" className="text-xl font-bold text-blue-800">
                                V&D Developers
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden items-center space-x-8 md:flex">
                            <Link href="/" className="text-gray-700 hover:text-blue-600">
                                Home
                            </Link>
                            <Link href={route('service')} className="text-gray-700 hover:text-blue-600">
                                Our Services
                            </Link>
                            <Link href="/works" className="text-gray-700 hover:text-blue-600">
                                Our Works
                            </Link>
                            <Link href="/trainings" className="text-gray-700 hover:text-blue-600">
                                Training
                            </Link>
                            <Link href="/about" className="text-gray-700 hover:text-blue-600">
                                About Us
                            </Link>
                            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                                Contact Us
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                            <Link
                                href="/"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            >
                                Home
                            </Link>
                            <Link
                                href="/services"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            >
                                Our Services
                            </Link>
                            <Link
                                href="/works"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            >
                                Our Works
                            </Link>
                            <Link
                                href="/trainings"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            >
                                Training
                            </Link>
                            <Link
                                href="/about"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="flex-grow">{children}</main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                        <div>
                            <h3 className="mb-4 text-xl font-bold">V&D Developers</h3>
                            <p className="text-gray-300">We provide innovative IT solutions and training to help businesses grow.</p>
                        </div>

                        <div>
                            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="text-gray-300 hover:text-white">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="text-gray-300 hover:text-white">
                                        Our Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/works" className="text-gray-300 hover:text-white">
                                        Our Works
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/trainings" className="text-gray-300 hover:text-white">
                                        Training
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="mb-4 text-lg font-semibold">Company</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/about" className="text-gray-300 hover:text-white">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-gray-300 hover:text-white">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy" className="text-gray-300 hover:text-white">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
                            <address className="text-gray-300 not-italic">
                                <p>Kathmandu, Nepal</p>
                                <p className="mt-2">Phone: 9802890215</p>
                                <p className="mt-2">Email: info@vnddevelopers.com</p>
                            </address>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} V&D Developers. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
