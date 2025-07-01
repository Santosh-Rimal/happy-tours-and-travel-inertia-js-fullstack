import Layout from '@/layouts/layouts/frontendlayout/layout';
import { Head } from '@inertiajs/react';
import { ReactElement, ReactNode } from 'react';

interface GalleryImage {
    id: number;
    title: string;
    location: string;
    image: string;
    category: 'mountains' | 'culture' | 'wildlife' | 'people';
    description?: string;
    photographer?: string;
    dateTaken?: string;
    relatedImages?: {
        id: number;
        title: string;
        image: string;
        category: string;
    }[];
}

export default function GalleryImage({ image = sampleImage }: { image?: GalleryImage }) {
    return (
        <>
            <Head title={`Himalayan Ecological Trek - ${image.title}`} />
            <div className="bg-gray-50">
                {/* Hero Section - Enhanced with parallax effect */}
                <section className="relative h-screen max-h-[800px] overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={image.image}
                            alt={image.title}
                            className="h-full w-full scale-100 transform object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                    </div>
                    <div className="relative z-10 flex h-full items-end">
                        <div className="container mx-auto px-4 pb-16 text-white">
                            <div className="max-w-2xl">
                                <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium capitalize backdrop-blur-sm">
                                    {image.category}
                                </span>
                                <h1 className="mb-4 text-5xl leading-tight font-bold md:text-6xl lg:text-7xl">{image.title}</h1>
                                <div className="flex flex-wrap items-center gap-4 text-lg">
                                    <span className="flex items-center font-medium">
                                        <svg className="mr-2 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            ></path>
                                        </svg>
                                        {image.location}
                                    </span>
                                    {image.dateTaken && (
                                        <span className="flex items-center">
                                            <svg className="mr-2 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                ></path>
                                            </svg>
                                            {image.dateTaken}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 transform animate-bounce">
                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </section>

                {/* Main Content - Enhanced with modern styling */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-5xl">
                            {/* Image Details - Card with metadata */}
                            <div className="mb-16 overflow-hidden rounded-2xl bg-white shadow-xl">
                                <div className="relative aspect-[16/9] overflow-hidden">
                                    <img
                                        src={image.image}
                                        alt={image.title}
                                        className="h-full w-full object-cover transition-all duration-500 hover:scale-105"
                                    />
                                    <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                                        <div className="flex items-center justify-between">
                                            {image.photographer && (
                                                <div>
                                                    <p className="text-sm tracking-wider uppercase">Photographer</p>
                                                    <p className="text-lg font-medium">{image.photographer}</p>
                                                </div>
                                            )}
                                            <button className="rounded-full bg-white/20 p-3 backdrop-blur-sm transition-all hover:bg-white/30">
                                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8">
                                    {image.description && (
                                        <div className="prose-lg max-w-none text-gray-600">
                                            <p>{image.description}</p>
                                        </div>
                                    )}

                                    {/* Metadata Grid */}
                                    <div className="mt-8 grid grid-cols-2 gap-6 text-gray-500 md:grid-cols-4">
                                        <div>
                                            <p className="text-sm tracking-wider text-gray-500 uppercase">Category</p>
                                            <p className="mt-1 font-medium capitalize">{image.category}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm tracking-wider text-gray-500 uppercase">Location</p>
                                            <p className="mt-1 font-medium">{image.location}</p>
                                        </div>
                                        {image.dateTaken && (
                                            <div>
                                                <p className="text-sm tracking-wider text-gray-500 uppercase">Date Taken</p>
                                                <p className="mt-1 font-medium">{image.dateTaken}</p>
                                            </div>
                                        )}
                                        {image.photographer && (
                                            <div>
                                                <p className="text-sm tracking-wider text-gray-500 uppercase">Photographer</p>
                                                <p className="mt-1 font-medium">{image.photographer}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Related Images - Enhanced gallery */}
                            {image.relatedImages && image.relatedImages.length > 0 && (
                                <div className="mt-24">
                                    <div className="mb-10 flex items-end justify-between">
                                        <div>
                                            <h3 className="text-3xl font-bold text-gray-900">More from the Himalayas</h3>
                                            <p className="mt-2 text-gray-500">Explore more breathtaking moments from our collection</p>
                                        </div>
                                        <button className="hidden items-center text-sm font-medium text-blue-600 hover:text-blue-800 md:flex">
                                            View all photos
                                            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                        {image.relatedImages.map((relatedImage) => (
                                            <div key={relatedImage.id} className="group relative overflow-hidden rounded-2xl shadow-lg">
                                                <div className="aspect-[4/3] overflow-hidden">
                                                    <img
                                                        src={relatedImage.image}
                                                        alt={relatedImage.title}
                                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                </div>
                                                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100">
                                                    <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white capitalize backdrop-blur-sm">
                                                        {relatedImage.category}
                                                    </span>
                                                    <h4 className="text-xl font-semibold text-white">{relatedImage.title}</h4>
                                                </div>
                                                <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-12 text-center">
                                        <button className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
                                            Load More Photos
                                            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="bg-gray-900 py-16 text-white">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-10 shadow-2xl">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold">Stay Inspired</h3>
                                <p className="mt-2 text-lg text-blue-100">Join our newsletter for weekly mountain inspiration and photography tips</p>
                            </div>
                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-grow rounded-full border-0 bg-white/20 px-6 py-4 text-white placeholder-blue-200 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                                />
                                <button className="rounded-full bg-white px-6 py-4 font-medium text-blue-600 transition-all hover:bg-gray-100 hover:shadow-lg">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

// Enhanced sample image data with more content and better organization
const sampleImage: GalleryImage = {
    id: 1,
    title: 'Everest Base Camp Trek',
    location: 'Khumbu Region, Nepal',
    image: 'https://robbreport.com/wp-content/uploads/2023/09/Everest_Feature8.jpg',
    category: 'mountains',
    description:
        "The Everest Base Camp trek is one of the most iconic journeys in the world, taking adventurers through the heart of the Khumbu region. This breathtaking view showcases the majestic north face of Mount Everest (8,848m) with colorful prayer flags fluttering in the wind. The base camp sits at an altitude of 5,364 meters (17,598 ft) and serves as the starting point for climbers attempting to summit the world's highest peak. The trek offers unparalleled views of four of the world's six tallest peaks: Everest, Lhotse, Makalu, and Cho Oyu.",
    photographer: 'John Snow',
    dateTaken: 'October 15, 2022',
    relatedImages: [
        {
            id: 2,
            title: 'Ama Dablam Summit',
            image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
            category: 'mountains',
        },
        {
            id: 3,
            title: 'Himalayan Sunrise at Kala Patthar',
            image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
            category: 'landscape',
        },
        {
            id: 4,
            title: 'Traditional Sherpa Village',
            image: 'https://images.unsplash.com/photo-1513415277900-a62401e19be4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
            category: 'culture',
        },
        {
            id: 5,
            title: 'Prayer Flags at Thorong La Pass',
            image: 'https://c8.alamy.com/comp/HG8B0C/tibetan-prayer-flags-at-sign-thorong-la-pass-5416-m-pass-between-the-HG8B0C.jpg',
            category: 'culture',
        },
        {
            id: 6,
            title: 'Annapurna Range at Dawn',
            image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
            category: 'mountains',
        },
        {
            id: 7,
            title: 'Langtang Valley Sunset',
            image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
            category: 'landscape',
        },
        {
            id: 8,
            title: 'Gokyo Lakes and Glaciers',
            image: 'https://images.unsplash.com/photo-1501684691657-cf3012635478?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
            category: 'landscape',
        },
        {
            id: 9,
            title: 'Yak Herders in Khumbu Valley',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
            category: 'people',
        },
        {
            id: 10,
            title: 'Tengboche Monastery',
            image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
            category: 'culture',
        },
        {
            id: 11,
            title: 'Misty Himalayas at Dawn',
            image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
            category: 'landscape',
        },
        {
            id: 12,
            title: 'Poon Hill Sunrise Viewpoint',
            image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
            category: 'landscape',
        },
        {
            id: 13,
            title: 'Himalayan Monal Pheasant',
            image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
            category: 'wildlife',
        },
        {
            id: 14,
            title: 'Traditional Nepali Thali Meal',
            image: 'https://omgnepal.com/wp-content/uploads/2022/12/dhido.jpg',
            category: 'culture',
        },
        {
            id: 15,
            title: 'Porters on Everest Trail',
            image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
            category: 'people',
        },
    ],
};

GalleryImage.layout = (page: ReactNode): ReactElement => <Layout>{page}</Layout>;
