import Layout from '@/layouts/layouts/frontendlayout/layout';
import { Head } from '@inertiajs/react';
import { ReactElement, ReactNode } from 'react';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    experience: string;
    languages: string[];
    certifications?: string[];
    specialties?: string[];
    treksLed?: {
        id: number;
        title: string;
    }[];
}

export default function TeamMember({ member = sampleMember }: { member?: TeamMember }) {
    return (
        <>
            <Head title={`${member.name} - Himalayan Ecological Trek`} />
            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative h-96 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
                    </div>
                    <div className="relative z-10 flex h-full items-end">
                        <div className="container mx-auto px-4 pb-12 text-white">
                            <h1 className="mb-2 text-4xl font-bold md:text-5xl">{member.name}</h1>
                            <p className="text-xl">{member.role}</p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col gap-12 lg:flex-row">
                            {/* Main Content */}
                            <div className="lg:w-2/3">
                                <h2 className="mb-6 text-3xl font-bold text-gray-800">About {member.name.split(' ')[0]}</h2>
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-lg leading-relaxed text-gray-700">{member.bio}</p>
                                </div>

                                {/* Certifications */}
                                {member.certifications && member.certifications.length > 0 && (
                                    <div className="mt-12">
                                        <h3 className="mb-6 text-2xl font-bold text-gray-800">Certifications</h3>
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            {member.certifications.map((cert, index) => (
                                                <div key={index} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                                                    <div className="flex items-center">
                                                        <svg
                                                            className="mr-3 h-8 w-8 text-green-600"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                            ></path>
                                                        </svg>
                                                        <span className="font-medium">{cert}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Specialties */}
                                {member.specialties && member.specialties.length > 0 && (
                                    <div className="mt-12">
                                        <h3 className="mb-6 text-2xl font-bold text-gray-800">Specialties</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {member.specialties.map((specialty, index) => (
                                                <span key={index} className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Treks Led */}
                                {member.treksLed && member.treksLed.length > 0 && (
                                    <div className="mt-12">
                                        <h3 className="mb-6 text-2xl font-bold text-gray-800">Treks Led</h3>
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            {member.treksLed.map((trek) => (
                                                <a
                                                    key={trek.id}
                                                    href="#"
                                                    className="group rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-green-200 hover:shadow-md"
                                                >
                                                    <h4 className="mb-1 font-bold text-gray-800 group-hover:text-green-600">{trek.title}</h4>
                                                    <p className="text-sm text-gray-600">View trek details →</p>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="lg:w-1/3">
                                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <div className="mb-6 overflow-hidden rounded-lg">
                                        <img src={member.image} alt={member.name} className="w-full object-cover" />
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-500">Experience</h4>
                                            <p className="text-lg font-medium">{member.experience}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-500">Languages</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {member.languages.map((lang) => (
                                                    <span key={lang} className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                                                        {lang}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <a
                                            href="#contact"
                                            className="block w-full rounded-lg bg-green-600 px-6 py-3 text-center font-bold text-white transition-colors hover:bg-green-700"
                                        >
                                            Trek With {member.name.split(' ')[0]}
                                        </a>
                                    </div>
                                </div>

                                {/* Testimonial */}
                                <div className="mt-8 rounded-xl bg-green-50 p-6">
                                    <blockquote className="text-gray-700">
                                        <svg className="mb-4 h-8 w-8 text-green-400" fill="currentColor" viewBox="0 0 32 32">
                                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                        </svg>
                                        <p className="mb-4">
                                            "Working with {member.name.split(' ')[0]} was an incredible experience. Their knowledge of the mountains
                                            and local culture made our trek truly special."
                                        </p>
                                        <footer className="text-sm font-medium">
                                            <span>- Satisfied Trekker</span>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

// Sample static data for a Himalayan trekking guide
const sampleMember: TeamMember = {
    id: 1,
    name: 'Ang Sherpa',
    role: 'Senior Trekking Guide & Expedition Leader',
    image: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    bio: 'Born and raised in the Khumbu region at the foot of Mount Everest, Ang has been leading treks in the Himalayas for over 15 years. With extensive knowledge of high-altitude routes, local cultures, and mountain safety, Ang has successfully guided more than 200 treks to Everest Base Camp, Annapurna Circuit, and other iconic routes. His passion for sustainable tourism and deep respect for the mountains make him one of the most sought-after guides in Nepal.',
    experience: '15+ years guiding in Himalayas',
    languages: ['English', 'Nepali', 'Sherpa', 'Hindi'],
    certifications: [
        'UIAA Mountain Leader Certification',
        'Wilderness First Responder',
        'Nepal Government Licensed Guide',
        'High Altitude First Aid',
    ],
    specialties: ['High Altitude Trekking', 'Cultural Interpretation', 'Mountain Safety', 'Photography Guidance', 'Sustainable Tourism'],
    treksLed: [
        { id: 1, title: 'Everest Base Camp Trek' },
        { id: 2, title: 'Annapurna Circuit Trek' },
        { id: 3, title: 'Manaslu Circuit Trek' },
        { id: 4, title: 'Langtang Valley Trek' },
        { id: 5, title: 'Upper Mustang Trek' },
        { id: 6, title: 'Gokyo Lakes Trek' },
    ],
};

TeamMember.layout = (page: ReactNode): ReactElement => <Layout>{page}</Layout>;
