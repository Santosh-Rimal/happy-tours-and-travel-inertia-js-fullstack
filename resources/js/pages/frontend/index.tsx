import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import FrontendLayout from '@/layouts/layouts/frontendlayout/layout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEvent, ReactElement, ReactNode } from 'react';

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
}

interface Testimonial {
    id: number;
    name: string;
    country: string;
    comment: string;
    rating: number;
    image?: string;
    trek?: string;
    date?: string;
}

interface GalleryImage {
    id: number;
    title: string;
    location: string;
    image: string;
    category: 'mountains' | 'culture' | 'wildlife' | 'people';
}

// interface Contact {
//     name: string;
//     email: string;
//     phone: number;
//     subject: string;
//     message: string;
// }

interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    experience: string;
    languages: string[];
}

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    author: string;
    category: 'trekking' | 'culture' | 'sustainability' | 'news';
}

export default function Home() {
    const { flash } = usePage<{ flash: { success?: string; error?: string } }>().props;
    // Trek packages data
    console.log(flash);
    const trekPackages: TrekPackage[] = [
        {
            id: 1,
            title: 'Everest Base Camp Trek',
            duration: '14 Days',
            difficulty: 'Challenging',
            price: 1450,
            image: '	https://www.himalayanecologicaltrek.com/uploads/package/great-himalayan-trail.jpeg',
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
        },
        {
            id: 2,
            title: 'Annapurna Circuit Trek',
            duration: '18 Days',
            difficulty: 'Moderate',
            price: 1150,
            image: '	https://www.himalayanecologicaltrek.com/uploads/package/great-himalaya-trail-32-days.jpeg',
            featured: true,
            description:
                "One of the world's most diverse treks, crossing Thorong La pass (5,416m) with stunning mountain views and cultural variety from Hindu villages to Tibetan Buddhist communities.",
            highlights: [
                'Cross the famous Thorong La Pass (5,416m)',
                'Diverse landscapes from subtropical to alpine',
                'Visit sacred Muktinath Temple',
                'Experience local Gurung and Thakali cultures',
                'Natural hot springs at Tatopani',
            ],
            season: ['Mar-May', 'Sep-Nov'],
            maxAltitude: '5,416m (17,769ft)',
        },
        {
            id: 3,
            title: 'Langtang Valley Trek',
            duration: '10 Days',
            difficulty: 'Moderate',
            price: 750,
            image: 'https://www.himalayanecologicaltrek.com/uploads/package/langtang-gosaikund-lake-trek.jpeg',
            featured: true,
            description:
                'A beautiful trek close to Kathmandu, offering stunning mountain views, rich Tamang culture, and recovery-focused tourism supporting communities affected by the 2015 earthquake.',
            highlights: [
                'Scenic Langtang Valley with close mountain views',
                'Visit traditional cheese factory at Kyanjin Gompa',
                'See glaciers and high mountain peaks',
                'Rich Tamang culture and hospitality',
                'Support earthquake recovery efforts',
            ],
            season: ['Mar-May', 'Sep-Dec'],
            maxAltitude: '4,984m (16,352ft)',
        },
        {
            id: 4,
            title: 'Manaslu Circuit Trek',
            duration: '16 Days',
            difficulty: 'Challenging',
            price: 1350,
            image: 'https://www.himalayanecologicaltrek.com/uploads/package/tsum-manasu-hidden-route.jpeg',
            featured: false,
            description:
                "A spectacular and less-crowded alternative to the Annapurna Circuit, circling the world's eighth highest mountain through remote villages and diverse landscapes.",
            highlights: [
                'Cross Larkya La Pass (5,106m)',
                'Authentic Tibetan Buddhist culture',
                'Less crowded than other classic treks',
                'Diverse flora and fauna',
                'Beautiful views of Manaslu (8,163m)',
            ],
            season: ['Mar-May', 'Sep-Nov'],
            maxAltitude: '5,106m (16,752ft)',
        },
        {
            id: 5,
            title: 'Ghorepani Poon Hill Trek',
            duration: '7 Days',
            difficulty: 'Easy',
            price: 550,
            image: 'https://www.himalayanecologicaltrek.com/uploads/img/Ghorepani-Poon-hill-trek.jpg',
            featured: false,
            description:
                'Perfect for beginners or those with limited time, offering spectacular sunrise views over the Annapurna range and charming Gurung villages.',
            highlights: [
                'Spectacular sunrise from Poon Hill (3,210m)',
                'Beautiful rhododendron forests',
                'Experience Gurung culture',
                'Teahouse accommodation',
                'Suitable for all ages and fitness levels',
            ],
            season: ['Year-round', 'Best: Mar-May'],
            maxAltitude: '3,210m (10,531ft)',
        },
    ];

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'Sarah Johnson',
            country: 'Australia',
            comment:
                'The Everest Base Camp trek was the most amazing experience of my life. Our guide was incredibly knowledgeable about the mountains and local culture, and made sure we were safe and comfortable throughout the journey. The team took care of every detail!',
            rating: 5,
            image: 'https://randomuser.me/api/portraits/women/65.jpg',
            trek: 'Everest Base Camp Trek',
            date: 'April 2023',
        },
        {
            id: 2,
            name: 'Michael Chen',
            country: 'USA',
            comment:
                'Annapurna Circuit exceeded all expectations. The landscapes were breathtaking and the team took great care of us. I particularly appreciated their commitment to eco-friendly practices. Highly recommend Himalayan Ecological Trek!',
            rating: 5,
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            trek: 'Annapurna Circuit Trek',
            date: 'October 2022',
        },
        {
            id: 3,
            name: 'Emma Wilson',
            country: 'UK',
            comment:
                'Langtang Valley trek was perfect for our family. The difficulty level was just right and we loved learning about the local culture. The team was especially good with our children. Will definitely trek with them again.',
            rating: 4,
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            trek: 'Langtang Valley Trek',
            date: 'November 2022',
        },
        {
            id: 4,
            name: 'Raj Patel',
            country: 'India',
            comment:
                'As a solo female traveler, I felt completely safe with Himalayan Ecological Trek. My guide was professional and attentive, and the porter was incredibly strong! The Manaslu trek was challenging but so rewarding.',
            rating: 5,
            image: 'https://randomuser.me/api/portraits/women/68.jpg',
            trek: 'Manaslu Circuit Trek',
            date: 'May 2023',
        },
    ];

    const galleryImages: GalleryImage[] = [
        {
            id: 1,
            title: 'Sunrise on Everest',
            location: 'Kalapatthar, Everest Region',
            image: 'https://www.creativefabrica.com/wp-content/uploads/2022/08/27/Mount-Everest-at-Sunrise-Dreamy-View-Graphics-37184282-1.jpg',
            category: 'mountains',
        },
        {
            id: 2,
            title: 'Annapurna Range',
            location: 'Poon Hill, Annapurna Region',
            image: 'https://th.bing.com/th/id/OIP._nH2sV0J9mUu0XNghviPpQHaE8?o=7rm=3&rs=1&pid=ImgDetMain&cb=idpwebpc2',
            category: 'mountains',
        },
        {
            id: 3,
            title: 'Tamang Village',
            location: 'Langtang Region',
            image: 'https://www.asia-hikes.com/wp-content/uploads/2020/05/Leaving-Thume-village-in-Tamang-1536x1024.jpg',
            category: 'culture',
        },
        {
            id: 4,
            title: 'Himalayan Monal',
            location: 'Annapurna Conservation Area',
            image: 'https://res.cloudinary.com/dr0zfbman/images/w_1920,h_1130,c_scale/f_auto,q_auto:good/v1715675202/WordPress%20Content/A-Himalayan-Monal-on-a-roadside-tree_Hari-K-Patibanda/A-Himalayan-Monal-on-a-roadside-tree_Hari-K-Patibanda.jpg?_i=AA',
            category: 'wildlife',
        },
        {
            id: 5,
            title: 'Prayer Flags',
            location: 'Thorong La Pass',
            image: 'https://th.bing.com/th/id/R.0b0552520c0288f4c325615943b18278?rik=KtTGz3iMhFpmlQ&pid=ImgRaw&r=0',
            category: 'culture',
        },
        {
            id: 6,
            title: 'Sherpa Guide',
            location: 'Khumbu Valley',
            image: 'https://th.bing.com/th/id/R.9c0e395d100c0e909f9060d6f7f71fdf?rik=o%2bMKSM11oN8kAw&riu=http%3a%2f%2fwww.satoriadventuresnepal.com%2fblog%2fwp-content%2fuploads%2f2017%2f07%2feverest-climbing-sherpa.jpg&ehk=3W86lovk1SXXBNHtK9DLuq%2fTxckMwvCyFedH1ZLtW2Y%3d&risl=&pid=ImgRaw&r=0',
            category: 'people',
        },
        {
            id: 7,
            title: 'Rhododendron Forest',
            location: 'Ghorepani',
            image: 'https://img.freepik.com/premium-photo/rhododendron-forest-ghorepani-annapurna-region-nepal-with-dhaulagiri-range-background_978974-3.jpg',
            category: 'wildlife',
        },
        {
            id: 8,
            title: 'Mountain Porters',
            location: 'Manaslu Region',
            image: 'https://th.bing.com/th/id/OIP.iz05qR5emKNGU4492Rr9tQAAAA?w=300&h=300&rs=1&pid=ImgDetMain&cb=idpwebpc2',
            category: 'people',
        },
    ];

    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: 'Ang Rita Sherpa',
            role: 'Founder & Head Guide',
            bio: 'With over 20 years of mountaineering experience, Ang Rita has summited Everest 7 times. He founded Himalayan Ecological Trek to share his love for the mountains while promoting sustainable tourism.',
            image: 'https://www.nepalisansar.com/wp-content/uploads/2020/09/ang-rita-sherpa-climbed-mt.-everest.jpg',
            experience: '25 years',
            languages: ['English', 'Nepali', 'Sherpa', 'Hindi'],
        },
        {
            id: 2,
            name: 'Mingma Dorje',
            role: 'Senior Trekking Guide',
            bio: 'Mingma has led over 150 treks in the Annapurna and Manaslu regions. His extensive knowledge of local flora and fauna makes him a favorite among nature enthusiasts.',
            image: 'https://th.bing.com/th/id/OIP.Pkc2Z0867PYAC-ibMMtVaAHaHc?rs=1&pid=ImgDetMain&cb=idpwebpc2',
            experience: '15 years',
            languages: ['English', 'Nepali', 'Tamang'],
        },
        {
            id: 3,
            name: 'Lhakpa Gurung',
            role: 'Operations Manager',
            bio: 'Lhakpa ensures all our treks run smoothly behind the scenes. Her attention to detail and problem-solving skills keep our clients happy and safe.',
            image: 'https://pasangmovie.com/wp-content/uploads/2023/12/Lhakpa-Gurung.jpeg',
            experience: '12 years',
            languages: ['English', 'Nepali', 'Gurung', 'Hindi'],
        },
        {
            id: 4,
            name: 'Dr. Sanjay Kumar',
            role: 'Medical Advisor',
            bio: 'Our resident doctor provides altitude sickness training to all staff and is available 24/7 for remote consultations during treks.',
            image: 'https://th.bing.com/th/id/OIF.siyjYvs57WQig4v0oUaB0w?rs=1&pid=ImgDetMain&cb=idpwebpc2',
            experience: '8 years',
            languages: ['English', 'Nepali', 'Hindi'],
        },
    ];

    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: 'Preparing for High Altitude Trekking',
            excerpt: 'Essential tips for acclimatization and staying healthy during your Himalayan adventure.',
            image: 'https://th.bing.com/th/id/OIP.M_LejmL2FoTiJI5RPFvjHAHaEO?rs=1&pid=ImgDetMain&cb=idpwebpc2',
            date: 'May 15, 2023',
            author: 'Dr. Sanjay Kumar',
            category: 'trekking',
        },
        {
            id: 2,
            title: 'The Sherpa People: Guardians of the Himalayas',
            excerpt: "Learn about the rich culture and history of Nepal's famous mountain guides.",
            image: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-05/10/16/asset/buzzfeed-prod-fastlane-01/sub-buzz-516-1494447724-2.jpg?downsize=700:*&output-quality=auto&output-format=auto',
            date: 'April 2, 2023',
            author: 'Ang Rita Sherpa',
            category: 'culture',
        },
        {
            id: 3,
            title: 'Our Plastic-Free Trekking Initiative',
            excerpt: 'How we are reducing waste and promoting sustainable practices in the mountains.',
            image: 'https://cdn.vectorstock.com/i/500p/61/68/plastic-free-sticker-circle-eco-stamp-icon-zero-vector-40466168.jpg',
            date: 'March 18, 2023',
            author: 'Lhakpa Gurung',
            category: 'sustainability',
        },
    ];

    const featuredPackages = trekPackages.filter((pkg) => pkg.featured);
    const otherPackages = trekPackages.filter((pkg) => !pkg.featured);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('contacts.store'), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <>
            <Head title="Himalayan Ecological Trek - Sustainable Adventure Travel in Nepal" />
            <div className="bg-white">
                {/* Hero Section with Parallax Effect */}
                <section className="relative h-screen max-h-[800px] overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://www.himalayanecologicaltrek.com/uploads/img/yo.jpg"
                            alt="Everest Mountain Range"
                            className="h-full w-full object-cover"
                            style={{ transform: 'translate3d(0,0,0)' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
                    </div>

                    <div className="relative z-10 flex h-full items-center">
                        <div className="container mx-auto px-4 text-center text-white">
                            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                                <span className="block">Journey Through</span>
                                <span className="block text-green-400">The Himalayas</span>
                            </h1>
                            <p className="mx-auto mb-8 max-w-2xl text-xl md:text-2xl">
                                Sustainable trekking adventures in Nepal with expert local guides
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="#treks"
                                    className="rounded-lg bg-green-600 px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
                                >
                                    Explore Treks
                                </a>
                                <a
                                    href="#contact"
                                    className="rounded-lg border-2 border-white bg-transparent px-8 py-3 font-bold text-white transition-all hover:bg-white hover:text-gray-900"
                                >
                                    Customize Your Trip
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="absolute right-0 bottom-0 left-0 z-20 flex justify-center pb-6">
                        <a href="#about" className="animate-bounce">
                            <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </a>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="bg-gradient-to-b from-white to-green-50 py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center gap-12 lg:flex-row">
                            {/* Image Section with Enhanced Styling */}
                            <div className="lg:w-1/2">
                                <div className="group relative">
                                    {/* Main Image */}
                                    <div className="transform overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-xl">
                                        <img
                                            src="https://www.himalayanecologicaltrek.com/uploads/img/yo.jpg" // Replace with your actual image path
                                            alt="Our experienced trekking team in the Himalayas"
                                            className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute -top-6 -left-6 hidden lg:block">
                                        <div className="h-24 w-24 rounded-full bg-green-400 opacity-20"></div>
                                    </div>

                                    {/* Badge with Animation */}
                                    <div className="absolute -right-6 -bottom-6 transform rounded-lg bg-green-600 px-6 py-3 text-white shadow-lg transition-transform duration-300 hover:-translate-y-1">
                                        <p className="text-sm font-medium tracking-wider">SINCE 2010</p>
                                        <p className="text-xl font-bold">Trusted Local Experts</p>
                                    </div>

                                    {/* Small Decorative Image */}
                                    <div className="absolute top-1/4 -right-4 hidden lg:block">
                                        <div className="h-32 w-32 overflow-hidden rounded-xl border-4 border-white shadow-md">
                                            <img
                                                src="https://scontent.fktm23-1.fna.fbcdn.net/v/t39.30808-1/415214676_3719357498385769_2915897182133237900_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=pOEPVTUcEcoQ7kNvwEe1_Gx&_nc_oc=Adk0UZ3YVk7_Nn_lw0MR2dWD5MPqsjqk0xCpJfL0zUbp4gpR7QqTiUeZdc-Y8fZUa0Q&_nc_zt=24&_nc_ht=scontent.fktm23-1.fna&_nc_gid=tSQTlOmMOkVR5SxBo-BbkQ&oh=00_AfPyUbk_yFQ40u-HaFHq1bN2L3tM6uIEv3dBljFNjcMX4w&oe=685B169D" // Replace with secondary image
                                                alt="Team helping trekkers"
                                                className="h-full w-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-1/2">
                                {/* Section Header */}
                                <div className="mb-8">
                                    <span className="mb-3 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold tracking-wider text-green-800">
                                        ABOUT US
                                    </span>
                                    <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                                        Himalayan <span className="text-green-600">Ecological Trek</span>
                                    </h2>
                                    <div className="h-1 w-20 rounded-full bg-green-400"></div>
                                </div>

                                {/* Description */}
                                <div className="mb-8 space-y-4">
                                    <p className="text-lg leading-relaxed text-gray-600">
                                        Founded by <strong>local Sherpa guides</strong>, we are committed to providing authentic, sustainable trekking
                                        experiences that benefit both travelers and mountain communities. Our team combines{' '}
                                        <strong>decades of mountaineering expertise</strong> with a deep respect for the fragile Himalayan ecosystem.
                                    </p>
                                    <p className="text-lg leading-relaxed text-gray-600">
                                        We operate under the principle of <strong>"Leave No Trace"</strong> while ensuring fair wages and working
                                        conditions for all our staff. <strong>5% of every trek fee</strong> goes toward local education and
                                        environmental projects in the regions we visit.
                                    </p>
                                </div>

                                {/* Features Grid */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {[
                                        {
                                            icon: (
                                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            ),
                                            title: 'Sustainable Practices',
                                            description: 'Eco-friendly operations and waste reduction',
                                        },
                                        {
                                            icon: (
                                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                    ></path>
                                                </svg>
                                            ),
                                            title: 'Local Expertise',
                                            description: 'Sherpa-owned and operated teams',
                                        },
                                        {
                                            icon: (
                                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    ></path>
                                                </svg>
                                            ),
                                            title: '25+ Years Experience',
                                            description: '150+ years combined guiding',
                                        },
                                        {
                                            icon: (
                                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                    ></path>
                                                </svg>
                                            ),
                                            title: 'Safety First',
                                            description: 'Certified guides and protocols',
                                        },
                                    ].map((feature, index) => (
                                        <div
                                            key={index}
                                            className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-green-100 hover:shadow-md"
                                        >
                                            <div className="flex items-start space-x-3">
                                                <div className="flex-shrink-0 rounded-lg bg-green-100 p-2 text-green-600">{feature.icon}</div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                                                    <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Call to Action */}
                                <div className="mt-8">
                                    <a
                                        href="#team"
                                        className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors duration-300 hover:bg-green-700"
                                    >
                                        Meet Our Team
                                        <svg className="-mr-1 ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Treks Section */}
                <section id="treks" className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4">
                        <div className="mb-12 text-center">
                            <span className="mb-2 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-800">
                                POPULAR ADVENTURES
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">Featured Trekking Packages</h2>
                            <p className="mx-auto max-w-2xl text-xl text-gray-600">
                                Our most popular treks in the Himalayas, carefully designed for unforgettable experiences
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {featuredPackages.map((trek) => (
                                <div
                                    key={trek.id}
                                    className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={trek.image}
                                            alt={trek.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute bottom-0 left-0 bg-green-600/90 px-4 py-2 text-white">{trek.duration}</div>
                                        <div className="absolute top-0 right-0 bg-white/90 px-3 py-1 text-sm font-bold text-gray-800">
                                            {trek.difficulty}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="mb-2 text-xl font-bold text-gray-800">{trek.title}</h3>
                                        <div className="mb-3 flex items-center text-sm text-gray-500">
                                            <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                ></path>
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                ></path>
                                            </svg>
                                            Max Altitude: {trek.maxAltitude}
                                        </div>
                                        <p className="mb-4 text-gray-600">{trek.description}</p>

                                        <div className="mb-4">
                                            <h4 className="mb-2 font-semibold text-green-600">Highlights:</h4>
                                            <ul className="space-y-2 text-sm text-gray-600">
                                                {trek.highlights.slice(0, 3).map((highlight, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <svg
                                                            className="mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M5 13l4 4L19 7"
                                                            ></path>
                                                        </svg>
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <div>
                                                <span className="text-lg font-bold text-green-600">From ${trek.price}</span>
                                                <span className="block text-xs text-gray-500">per person</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <a
                                                    href={`/treks/${trek.id}`}
                                                    className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                                                >
                                                    Details
                                                </a>
                                                <a
                                                    href="#contact"
                                                    className="rounded-lg border border-green-600 px-4 py-2 text-sm font-medium text-green-600 transition-colors hover:bg-green-50"
                                                >
                                                    Inquire
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Other Treks */}
                        <div className="mt-16">
                            <h3 className="mb-8 text-2xl font-bold text-gray-800">Other Treks You Might Like</h3>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {otherPackages.map((trek) => (
                                    <div
                                        key={trek.id}
                                        className="group flex overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg"
                                    >
                                        <div className="w-1/3 overflow-hidden">
                                            <img
                                                src={trek.image}
                                                alt={trek.title}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="w-2/3 p-4">
                                            <h4 className="mb-1 font-bold text-gray-800">{trek.title}</h4>
                                            <div className="mb-2 flex items-center text-xs text-gray-500">
                                                <svg className="mr-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    ></path>
                                                </svg>
                                                {trek.duration}
                                                <span className="mx-2">•</span>
                                                <svg className="mr-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    ></path>
                                                </svg>
                                                {trek.maxAltitude}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-bold text-green-600">From ${trek.price}</span>
                                                <Link
                                                    href={route('treks.show', { id: trek.id })}
                                                    className="text-xs font-medium text-gray-500 hover:text-green-600"
                                                >
                                                    View →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <a
                                href="/treks"
                                className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 font-bold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
                            >
                                View All Treks
                                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="bg-gradient-to-br from-gray-50 to-green-50 py-16">
                    <div className="container mx-auto px-4">
                        <div className="mb-12 text-center">
                            <span className="mb-2 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-800">
                                OUR DIFFERENCE
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">Why Trek With Us?</h2>
                            <p className="mx-auto max-w-2xl text-xl text-gray-600">We go beyond ordinary treks to create extraordinary experiences</p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                            <div className="rounded-xl bg-white p-8 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-gray-800">Safety First</h3>
                                <p className="text-gray-600">
                                    Certified guides, comprehensive first aid training, and emergency protocols ensure your safety at all times.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-8 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-gray-800">Eco-Conscious</h3>
                                <p className="text-gray-600">
                                    Sustainable practices including waste management, solar power use, and Leave No Trace principles.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-8 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-gray-800">Local Expertise</h3>
                                <p className="text-gray-600">
                                    Our Sherpa guides have intimate knowledge of the mountains, cultures, and best-kept secrets.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-8 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-gray-800">Fair Treatment</h3>
                                <p className="text-gray-600">We ensure fair wages, proper equipment, and insurance for all our guides and porters.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="mb-12 text-center">
                            <span className="mb-2 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-800">
                                MEET THE TEAM
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">Our Expert Guides</h2>
                            <p className="mx-auto max-w-2xl text-xl text-gray-600">
                                The passionate professionals who'll make your trek unforgettable
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {teamMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="h-64 overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="mb-1 text-xl font-bold text-gray-800">{member.name}</h3>
                                        <p className="mb-3 text-green-600">{member.role}</p>
                                        <div className="mb-4 flex justify-center">
                                            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                                                {member.experience} experience
                                            </span>
                                        </div>
                                        <p className="mb-4 text-sm text-gray-600">{member.bio}</p>
                                        <div className="flex flex-wrap justify-center gap-1">
                                            {member.languages.map((lang) => (
                                                <span key={lang} className="rounded-full bg-gray-50 px-2 py-1 text-xs">
                                                    {lang}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="bg-green-600 py-16 text-white">
                    <div className="container mx-auto px-4">
                        <div className="mb-12 text-center">
                            <span className="mb-2 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold">TREKKER STORIES</span>
                            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Trekkers Say</h2>
                            <p className="mx-auto max-w-2xl text-xl text-green-100">Hear from travelers who've experienced our treks</p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="rounded-xl bg-white/10 p-8 backdrop-blur-sm">
                                    <div className="mb-4 flex items-center">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="mb-6 text-lg italic">"{testimonial.comment}"</p>
                                    <div className="flex items-center">
                                        {testimonial.image && (
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="mr-4 h-12 w-12 rounded-full object-cover"
                                            />
                                        )}
                                        <div>
                                            <h4 className="font-bold">{testimonial.name}</h4>
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                                                <span className="text-green-200">{testimonial.country}</span>
                                                {testimonial.trek && (
                                                    <span className="flex items-center">
                                                        <svg className="mr-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                            ></path>
                                                        </svg>
                                                        {testimonial.trek}
                                                    </span>
                                                )}
                                                {testimonial.date && (
                                                    <span className="flex items-center">
                                                        <svg className="mr-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                            ></path>
                                                        </svg>
                                                        {testimonial.date}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4">
                        <div className="mb-12 text-center">
                            <span className="mb-2 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-800">
                                HIMALAYAN BEAUTY
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">Gallery</h2>
                            <p className="mx-auto max-w-2xl text-xl text-gray-600">Glimpses of the breathtaking landscapes you'll experience</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                            {galleryImages.slice(0, 4).map((image) => (
                                <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-md">
                                    <img
                                        src={image.image}
                                        alt={image.title}
                                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                                        <h3 className="text-lg font-bold text-white">{image.title}</h3>
                                        <p className="text-sm text-white/80">{image.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                            {galleryImages.slice(4, 8).map((image) => (
                                <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-md">
                                    <img
                                        src={image.image}
                                        alt={image.title}
                                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                                        <h3 className="text-lg font-bold text-white">{image.title}</h3>
                                        <p className="text-sm text-white/80">{image.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <a
                                href="/gallery"
                                className="inline-flex items-center rounded-lg border border-green-600 px-6 py-3 font-bold text-green-600 transition-all hover:bg-green-600 hover:text-white"
                            >
                                View Full Gallery
                                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Blog Section */}
                <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="mb-12 text-center">
                            <span className="mb-2 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-800">
                                LATEST STORIES
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">From Our Blog</h2>
                            <p className="mx-auto max-w-2xl text-xl text-gray-600">Trekking tips, cultural insights, and news from the Himalayas</p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {blogPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-2 flex items-center text-sm text-gray-500">
                                            <span className="mr-3 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                                                {post.category}
                                            </span>
                                            <span>{post.date}</span>
                                        </div>
                                        <h3 className="mb-3 text-xl font-bold text-gray-800">{post.title}</h3>
                                        <p className="mb-4 text-gray-600">{post.excerpt}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500">By {post.author}</span>
                                            <a href={`/blog/${post.id}`} className="text-sm font-medium text-green-600 hover:underline">
                                                Read More →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <a
                                href="/blog"
                                className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 font-bold text-white transition-all hover:bg-gray-800"
                            >
                                Visit Our Blog
                                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="contact" className="bg-gray-900 py-16 text-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 p-8 shadow-2xl md:flex-row md:p-12">
                            <div className="md:w-1/2">
                                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready for Your Himalayan Adventure?</h2>
                                <p className="mb-6 text-lg text-white/90">
                                    Contact us today to start planning your dream trek in Nepal's majestic mountains. Our team is ready to answer all
                                    your questions and help create your perfect itinerary.
                                </p>
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-1">
                                    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:from-white/20 hover:to-white/10 hover:shadow-lg">
                                        <div className="absolute -top-3 -right-3 h-16 w-16 rounded-full bg-green-400 opacity-10 transition-all duration-500 group-hover:scale-150"></div>
                                        <h3 className="relative z-10 mb-3 text-sm font-semibold tracking-wider text-green-300 uppercase">Email Us</h3>
                                        <a
                                            href="mailto:info@himalayanecologicaltrek.com"
                                            className="relative z-10 flex items-center text-lg font-medium text-white transition-all hover:text-green-200"
                                        >
                                            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-600/20 p-2 group-hover:bg-green-600/30">
                                                <svg className="h-5 w-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <span className="border-b border-transparent group-hover:border-green-300">
                                                info@himalayanecologicaltrek.com
                                            </span>
                                        </a>
                                    </div>

                                    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:from-white/20 hover:to-white/10 hover:shadow-lg">
                                        <div className="absolute -top-3 -right-3 h-16 w-16 rounded-full bg-green-400 opacity-10 transition-all duration-500 group-hover:scale-150"></div>
                                        <h3 className="relative z-10 mb-3 text-sm font-semibold tracking-wider text-green-300 uppercase">Call Us</h3>
                                        <a
                                            href="tel:+9771234567890"
                                            className="relative z-10 flex items-center text-lg font-medium text-white transition-all hover:text-green-200"
                                        >
                                            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-600/20 p-2 group-hover:bg-green-600/30">
                                                <svg className="h-5 w-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <span className="border-b border-transparent group-hover:border-green-300">+977-1-2345678</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full rounded-lg bg-white/10 p-6 shadow-xl backdrop-blur-sm transition-all hover:shadow-2xl md:w-2/5">
                                {flash.success && <div className="flex justify-center leading-8 text-white">{flash.success}</div>}
                                <hr className="bg-green-500" />
                                <h3 className="mb-6 text-center text-2xl font-bold text-white">Send Us a Message</h3>
                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-green-100">
                                                Name
                                            </label>
                                            <Input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                className={`focus:ring-opacity-50 ${errors?.name ?? 'border-red-500 bg-red-400'} w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-green-300 focus:ring-2 focus:ring-green-200`}
                                                placeholder="Your name"
                                            />
                                            {errors.name && <InputError message={errors.name} />}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-green-100">
                                                Email
                                            </label>
                                            <Input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                className="focus:ring-opacity-50 ${errors.email ?? 'border-red-500 bg-red-400'} w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-green-300 focus:ring-2 focus:ring-green-200"
                                                placeholder="Your email"
                                            />
                                            {errors.email && <InputError message={errors.email} />}
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-green-100">
                                            Phone
                                        </label>
                                        <Input
                                            name="phone"
                                            type="text"
                                            id="subject"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            className="focus:ring-opacity-50 ${errors.phone ?? 'border-red-500 bg-red-400'} w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-green-300 focus:ring-2 focus:ring-green-200"
                                            placeholder="Phone"
                                        />
                                        {errors.phone && <InputError message={errors.phone} />}
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-green-100">
                                            Subject
                                        </label>
                                        <Input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={data.subject}
                                            onChange={(e) => setData('subject', e.target.value)}
                                            className="focus:ring-opacity-50 ${errors.subject ?? 'border-red-500 bg-red-400'} w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-green-300 focus:ring-2 focus:ring-green-200"
                                            placeholder="Subject"
                                        />
                                        {errors.subject && <InputError message={errors.subject} />}
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-green-100">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            name="message"
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            className="focus:ring-opacity-50 `${errors.message ? 'border-red-500 bg-red-400'}` w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-green-300 focus:ring-2 focus:ring-green-200"
                                            placeholder="Your message"
                                        ></textarea>
                                    </div>
                                    {errors.message && <InputError message={errors.message} />}
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full transform cursor-pointer rounded-lg bg-white px-6 py-3 font-bold text-green-600 shadow-lg transition-all hover:scale-[1.02] hover:bg-green-50 hover:bg-green-600 hover:text-white hover:shadow-xl active:scale-95"
                                    >
                                        {processing ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

Home.frontendlayout = (page: ReactNode): ReactElement => <FrontendLayout page={page} />;
