import FrontendLayout from '@/layouts/layouts/frontendlayout/layout';
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
    relatedImages?: {
        id: number;
        title: string;
        image: string;
    }[];
}

export default function GalleryImage({ image }: { image: GalleryImage }) {
    return (
        <>
            <Head title={`${image.title} - Himalayan Ecological Trek`} />
            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative h-screen max-h-[600px] overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={image.image}
                            alt={image.title}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
                    </div>
                    <div className="relative z-10 flex h-full items-end">
                        <div className="container mx-auto px-4 pb-12 text-white">
                            <h1 className="mb-2 text-4xl font-bold md:text-5xl">{image.title}</h1>
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="flex items-center">
                                    <svg className="mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    </svg>
                                    {image.location}
                                </span>
                                <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium capitalize">
                                    {image.category}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">
                            {/* Image Details */}
                            <div className="mb-12 rounded-xl bg-white p-6 shadow-sm">
                                <div className="mb-6 overflow-hidden rounded-lg">
                                    <img
                                        src={image.image}
                                        alt={image.title}
                                        className="w-full object-cover"
                                    />
                                </div>
                                
                                {image.description && (
                                    <div className="prose max-w-none">
                                        <p>{image.description}</p>
                                    </div>
                                )}

                                {image.photographer && (
                                    <div className="mt-6 text-sm text-gray-500">
                                        <p>Photograph by: {image.photographer}</p>
                                    </div>
                                )}
                            </div>

                            {/* Related Images */}
                            {image.relatedImages && image.relatedImages.length > 0 && (
                                <div>
                                    <h3 className="mb-6 text-2xl font-bold text-gray-800">More from {image.category}</h3>
                                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                        {image.relatedImages.map((relatedImage) => (
                                            <a
                                                key={relatedImage.id}
                                                href="#"
                                                className="group relative block overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl"
                                            >
                                                <img
                                                    src={relatedImage.image}
                                                    alt={relatedImage.title}
                                                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                                                    <h4 className="text-sm font-medium text-white">{relatedImage.title}</h4>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

GalleryImage.frontendlayout = (page: ReactNode): ReactElement => <FrontendLayout page={page} />;