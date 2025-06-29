import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { TrashIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Contact',
        href: '/contacts',
    },
];

interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
    message: string;
    subject: string;
}

export default function Contact({ contacts }: { contacts: Contact[] }) {
    const handleDelete = (id: number) => {};
    // const { contacts } = contacts;
    console.log(contacts);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            {/* <h1>This is contact page</h1>

            {contacts.map((contact) => (
                <h2>{contact.name}</h2>
                
            ))} */}
            <div className="px-4 py-8 sm:px-6 lg:px-8">
                <h1 className="mb-6 text-2xl font-bold">Contact Messages</h1>

                <div className="overflow-x-auto rounded-lg bg-white shadow">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">SN</th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Phone</th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Subject</th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Message</th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {contacts.length > 0 ? (
                                contacts.map((contact, index) => (
                                    <tr key={contact.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{index + 1}</td>
                                        <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">{contact.name}</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{contact.email}</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{contact.phone}</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{contact.subject}</td>
                                        <td className="max-w-xs truncate px-6 py-4 text-sm text-gray-500">{contact.message}</td>
                                        <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                            <button
                                                onClick={() => handleDelete(contact.id)}
                                                className="flex items-center gap-1 text-red-600 hover:text-red-900"
                                            >
                                                <TrashIcon className="h-4 w-4" /> Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
                                        No contacts found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
