import FrontendLayout from '@/layouts/layouts/frontendlayout/layout';
import { Head } from '@inertiajs/react';
import { ReactElement, ReactNode } from 'react';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    author: string;
    category: 'trekking' | 'culture' | 'sustainability' | 'news';
    content: string;
    tags?: string[];
}

export default function BlogPost() {
    // Static blog post data
    const post: BlogPost = {
        id: 1,
        title: 'Preparing for High Altitude Trekking',
        excerpt: 'Essential tips for acclimatization and staying healthy during your Himalayan adventure.',
        image: 'https://www.himalayanecologicaltrek.com/wp-content/uploads/2023/09/everest-base-camp-trek.jpg',
        date: 'May 15, 2023',
        author: 'Dr. Sanjay Kumar',
        category: 'trekking',
        content: `
            <h2>Introduction to High Altitude Trekking</h2>
            <p>Trekking in the Himalayas is a dream for many adventurers, but the high altitude presents unique challenges. 
            Proper preparation is essential to ensure a safe and enjoyable experience.</p>
            
            <h2>Understanding Altitude Sickness</h2>
            <p>Altitude sickness, or acute mountain sickness (AMS), can affect anyone regardless of fitness level. 
            Symptoms typically appear above 2,500 meters and may include:</p>
            <ul>
                <li>Headache</li>
                <li>Nausea or vomiting</li>
                <li>Dizziness</li>
                <li>Fatigue</li>
                <li>Shortness of breath</li>
            </ul>
            
            <h2>Acclimatization Strategies</h2>
            <p>Follow these golden rules for proper acclimatization:</p>
            <ol>
                <li><strong>Ascend gradually:</strong> Don't gain more than 300-400m in elevation per day</li>
                <li><strong>Climb high, sleep low:</strong> You can climb higher during the day but sleep at a lower elevation</li>
                <li><strong>Stay hydrated:</strong> Drink at least 3-4 liters of water daily</li>
                <li><strong>Listen to your body:</strong> Don't ignore symptoms of AMS</li>
            </ol>
            
            <h2>Essential Gear for High Altitude</h2>
            <p>Packing the right equipment can make all the difference:</p>
            <ul>
                <li>Layered clothing for temperature fluctuations</li>
                <li>Quality trekking boots with good ankle support</li>
                <li>Trekking poles to reduce strain on knees</li>
                <li>Wide-brimmed hat and UV-protection sunglasses</li>
                <li>High SPF sunscreen and lip balm</li>
            </ul>
            
            <h2>Physical Preparation</h2>
            <p>While you don't need to be an athlete, some conditioning helps:</p>
            <ul>
                <li>Start cardio exercises 2-3 months before your trek</li>
                <li>Include stair climbing or hill walking in your routine</li>
                <li>Practice hiking with a loaded backpack</li>
                <li>Build leg strength with squats and lunges</li>
            </ul>
        `,
        tags: ['altitude', 'trekking tips', 'himalayas', 'health'],
    };

    return (
        <>
            <Head title={`${post.title} - Himalayan Ecological Trek`} />
            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative h-96 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
                    </div>
                    <div className="relative z-10 flex h-full items-end">
                        <div className="container mx-auto px-4 pb-12 text-white">
                            <div className="mb-4">
                                <span className="rounded-full bg-green-600 px-4 py-1 text-sm font-semibold">{post.category}</span>
                            </div>
                            <h1 className="mb-2 text-4xl font-bold md:text-5xl">{post.title}</h1>
                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                <span>By {post.author}</span>
                                <span>•</span>
                                <span>{post.date}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl">
                            {/* Article Content */}
                            <article className="prose prose-lg max-w-none">
                                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                            </article>

                            {/* Tags */}
                            {post.tags && post.tags.length > 0 && (
                                <div className="mt-12">
                                    <h3 className="mb-4 text-lg font-semibold">Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <a
                                                key={tag}
                                                href="#"
                                                className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200"
                                            >
                                                {tag}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Author Bio */}
                            <div className="mt-12 rounded-xl bg-gray-50 p-6">
                                <div className="flex items-start gap-4">
                                    <div className="h-16 w-16 overflow-hidden rounded-full">
                                        <img
                                            src={`https://randomuser.me/api/portraits/${post.author === 'Dr. Sanjay Kumar' ? 'men' : 'women'}/${Math.floor(Math.random() * 50)}.jpg`}
                                            alt={post.author}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">{post.author}</h3>
                                        <p className="mt-1 text-gray-600">
                                            {post.author === 'Dr. Sanjay Kumar'
                                                ? 'Our medical advisor with 8 years of experience in high-altitude medicine.'
                                                : post.author === 'Ang Rita Sherpa'
                                                  ? 'Founder & Head Guide with over 20 years of mountaineering experience.'
                                                  : 'Operations Manager ensuring all our treks run smoothly.'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Related Posts */}
                            <div className="mt-12">
                                <h3 className="mb-6 text-2xl font-bold">You Might Also Like</h3>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    {[
                                        {
                                            id: 1,
                                            title: 'The Sherpa People: Guardians of the Himalayas',
                                            category: 'culture',
                                            excerpt: "Learn about the rich culture and history of Nepal's famous mountain guides.",
                                            image: 'https://www.himalayanecologicaltrek.com/wp-content/uploads/2023/09/sherpa-culture.jpg',
                                        },
                                        {
                                            id: 2,
                                            title: 'Our Plastic-Free Trekking Initiative',
                                            category: 'sustainability',
                                            excerpt: 'How we are reducing waste and promoting sustainable practices in the mountains.',
                                            image: 'https://www.himalayanecologicaltrek.com/wp-content/uploads/2023/09/eco-trekking.jpg',
                                        },
                                    ].map((relatedPost) => (
                                        <div
                                            key={relatedPost.id}
                                            className="overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg"
                                        >
                                            <div className="h-48 overflow-hidden">
                                                <img
                                                    src={relatedPost.image}
                                                    alt={relatedPost.title}
                                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <span className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                                                    {relatedPost.category}
                                                </span>
                                                <h4 className="mb-2 text-lg font-bold">{relatedPost.title}</h4>
                                                <p className="mb-3 text-sm text-gray-600">{relatedPost.excerpt}</p>
                                                <a href="#" className="text-sm font-medium text-green-600 hover:underline">
                                                    Read More →
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

BlogPost.frontendlayout = (page: ReactNode): ReactElement => <FrontendLayout page={page} />;
