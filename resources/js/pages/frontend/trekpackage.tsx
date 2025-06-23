import FrontendLayout from '@/layouts/layouts/frontendlayout/layout';
import { Head } from '@inertiajs/react';
import { ReactElement, ReactNode } from 'react';

interface TrekPackage {
    id: number;
    title: string;
    duration: string;
    difficulty: 'Easy' | 'Moderate' | 'Challenging';
    price: number;
    image: string;
    featured: boolean;
    description: string;
    highlights: string[];
    season: string[];
    maxAltitude: string;
    routeImage?: string;
    itinerary?: {
        day: number;
        title: string;
        description: string;
        altitude: string;
    }[];
    inclusions?: string[];
    exclusions?: string[];
}

export default function TrekPackage() {
    // Static trek data
    const trek: TrekPackage = {
        id: 1,
        title: 'Everest Base Camp Trek',
        duration: '14 Days',
        difficulty: 'Challenging',
        price: 1450,
        image: 'https://www.himalayanecologicaltrek.com/uploads/package/great-himalayan-trail.jpeg',
        featured: true,
        description:
            "The classic trek to the base of the world's highest mountain, offering spectacular views of the Himalayas and deep immersion into Sherpa culture.",
        highlights: [
            'Spectacular views of Everest, Lhotse, and Ama Dablam',
            'Visit ancient Tengboche Monastery',
            'Experience Sherpa culture in Namche Bazaar',
            'Reach the base camp of Mount Everest (5,364m)',
            'Cross the thrilling Hillary Suspension Bridge',
        ],
        season: ['Mar-May', 'Sep-Nov'],
        maxAltitude: '5,364m (17,598ft)',
        routeImage: 'https://www.himalayanecologicaltrek.com/wp-content/uploads/2023/09/everest-route-map.jpg',
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Kathmandu',
                description: 'Arrive at Tribhuvan International Airport and transfer to hotel. Briefing about the trek.',
                altitude: '1,400m',
            },
            {
                day: 2,
                title: 'Fly to Lukla, trek to Phakding',
                description: 'Scenic flight to Lukla (2,860m) and begin trek to Phakding (2,610m).',
                altitude: '2,610m',
            },
            // Add more days as needed
        ],
        inclusions: [
            'Airport transfers',
            'Domestic flights (Kathmandu-Lukla-Kathmandu)',
            'Teahouse accommodation during trek',
            'All meals during trek',
            'Experienced English-speaking guide',
            'Porter service (1 porter for 2 trekkers)',
        ],
        exclusions: ['Nepal visa fee', 'International airfare', 'Travel insurance', 'Personal expenses', 'Tips for guide and porter'],
    };

    return (
        <>
            <Head title={`${trek.title} - Himalayan Ecological Trek`} />
            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative h-96 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src={trek.image} alt={trek.title} className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
                    </div>
                    <div className="relative z-10 flex h-full items-end">
                        <div className="container mx-auto px-4 pb-12 text-white">
                            <h1 className="mb-2 text-4xl font-bold md:text-5xl">{trek.title}</h1>
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="flex items-center">
                                    <svg className="mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    {trek.duration}
                                </span>
                                <span className="flex items-center">
                                    <svg className="mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                    </svg>
                                    Max Altitude: {trek.maxAltitude}
                                </span>
                                <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">{trek.difficulty}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col gap-12 lg:flex-row">
                            {/* Main Content */}
                            <div className="lg:w-2/3">
                                <h2 className="mb-6 text-3xl font-bold text-gray-800">Overview</h2>
                                <p className="mb-8 text-lg leading-relaxed text-gray-700">{trek.description}</p>

                                {/* Highlights */}
                                <div className="mb-12">
                                    <h3 className="mb-4 text-2xl font-bold text-gray-800">Highlights</h3>
                                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        {trek.highlights.map((highlight, index) => (
                                            <li key={index} className="flex items-start rounded-lg bg-gray-50 p-4">
                                                <svg
                                                    className="mt-1 mr-3 h-5 w-5 flex-shrink-0 text-green-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Itinerary */}
                                {trek.itinerary && (
                                    <div className="mb-12">
                                        <h3 className="mb-6 text-2xl font-bold text-gray-800">Detailed Itinerary</h3>
                                        <div className="space-y-4">
                                            {trek.itinerary.map((day) => (
                                                <div key={day.day} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                                    <div className="flex items-start justify-between">
                                                        <h4 className="text-lg font-bold text-gray-800">
                                                            Day {day.day}: {day.title}
                                                        </h4>
                                                        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                                                            {day.altitude}
                                                        </span>
                                                    </div>
                                                    <p className="mt-3 text-gray-600">{day.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Route Map */}
                                {trek.routeImage && (
                                    <div className="mb-12">
                                        <h3 className="mb-6 text-2xl font-bold text-gray-800">Route Map</h3>
                                        <div className="overflow-hidden rounded-xl shadow-lg">
                                            <img src={trek.routeImage} alt={`${trek.title} Route Map`} className="w-full" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="lg:w-1/3">
                                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <h3 className="mb-4 text-xl font-bold text-gray-800">Trip Facts</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-500">Duration</h4>
                                            <p className="text-lg font-medium">{trek.duration}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-500">Difficulty</h4>
                                            <p className="text-lg font-medium">{trek.difficulty}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-500">Max Altitude</h4>
                                            <p className="text-lg font-medium">{trek.maxAltitude}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-500">Best Season</h4>
                                            <p className="text-lg font-medium">{trek.season.join(', ')}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-500">Price</h4>
                                            <p className="text-2xl font-bold text-green-600">From ${trek.price}</p>
                                            <p className="text-sm text-gray-500">per person</p>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <a
                                            href="#contact"
                                            className="block w-full rounded-lg bg-green-600 px-6 py-3 text-center font-bold text-white transition-colors hover:bg-green-700"
                                        >
                                            Book This Trek
                                        </a>
                                    </div>
                                </div>

                                {/* Inclusions & Exclusions */}
                                <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <h3 className="mb-4 text-xl font-bold text-gray-800">What's Included</h3>
                                    {trek.inclusions ? (
                                        <ul className="space-y-2">
                                            {trek.inclusions.map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <svg
                                                        className="mt-1 mr-2 h-4 w-4 flex-shrink-0 text-green-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-600">Standard inclusions apply. Contact us for details.</p>
                                    )}

                                    <h3 className="mt-6 mb-4 text-xl font-bold text-gray-800">Not Included</h3>
                                    {trek.exclusions ? (
                                        <ul className="space-y-2">
                                            {trek.exclusions.map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <svg
                                                        className="mt-1 mr-2 h-4 w-4 flex-shrink-0 text-red-500"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        ></path>
                                                    </svg>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-600">Standard exclusions apply. Contact us for details.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

TrekPackage.frontendlayout = (page: ReactNode): ReactElement => <FrontendLayout page={page} />;
