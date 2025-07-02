import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem, NavGroup } from '@/types';
import { Link } from '@inertiajs/react';
import {
    ChartBar,
    ContactRound,
    Image,
    ImagePlay,
    LayoutDashboard,
    ListCollapseIcon,
    MessageSquareQuoteIcon,
    SettingsIcon,
    SquareCheck,
    SquareLibrary,
    SquareStack, // or SquaresFour
    Star,
} from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard,
        isActive: true,
    },
    {
        title: 'Contact',
        href: '/contacts',
        icon: ContactRound,
        isActive: true,
    },
    // {
    //     title: 'Contact',
    //     href: '/contacts',
    //     icon: ContactRound,
    //     isActive: true,
    // },
];

const NavGroups: NavGroup[] = [
    {
        title: 'About Trip',
        items: [
            {
                title: 'Trip Category',
                href: '/dashboard',
                icon: ChartBar,
                isActive: true,
            },
            {
                title: 'Trip Detail',
                href: '/tripdetails',
                icon: ListCollapseIcon,
                isActive: true,
            },
            {
                title: 'Slider Images',
                href: '/slidersmages',
                icon: ImagePlay,
                isActive: true,
            },
            {
                title: 'Highlight',
                href: '/highlights',
                icon: Star,
                isActive: true,
            },
        ],
    },
    {
        title: 'Trip Details',
        items: [
            {
                title: 'About Trip',
                href: '/abouttrips',
                icon: MessageSquareQuoteIcon,
                isActive: true,
            },
            {
                title: 'Include',
                href: '/includes',
                icon: SquareCheck,
                isActive: true,
            },
            // squares-intersect
            {
                title: 'Not Include',
                href: '/notincludes',
                icon: SquareStack, // or SquaresFour
                isActive: true,
            },
            {
                title: 'Useful Information',
                href: '/usefulinformations',
                icon: SquareLibrary,
                isActive: true,
            },
        ],
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'All Service',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: SettingsIcon,
    },
    {
        title: 'Logos',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: Image,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} navGroups={NavGroups} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
