import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { TrashIcon } from 'lucide-react';
import { useState } from 'react';

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

interface ContactProps {
    contacts: Contact[];
}

export default function ContactList({ contacts }: ContactProps) {
    const { flash } = usePage<{ flash: { success?: string; error?: string } }>().props;
    const [deletingId, setDeletingId] = useState<number | null>(null);
    const { delete: destroy, processing } = useForm();
    const handleDelete = (id: number) => {
        setDeletingId(id);
        if (confirm('Are you sure you want to delete this contact?' + `${id}`)) {
            destroy(route('backend.contacts.destroy', { id }));
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Contact Messages" />
            <div className="px-4 py-8 sm:px-6 lg:px-8">
                {flash.success && (
                    <div className="mb-4 w-full">
                        <Alert variant="destructive" className="border-red-500 bg-red-50">
                            <div className="flex items-center gap-2">
                                <TrashIcon className="h-5 w-5 text-red-600" />
                                <AlertTitle className="text-red-800">Deleted</AlertTitle>
                            </div>
                            <AlertDescription className="text-red-700">{flash.success}</AlertDescription>
                        </Alert>
                    </div>
                )}
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
                                                disabled={processing}
                                                onClick={() => handleDelete(contact.id)}
                                                className="flex items-center gap-1 text-red-600 hover:text-red-900"
                                                aria-label={`Delete contact ${contact.name}`}
                                            >
                                                <TrashIcon className="h-4 w-4" />
                                                {deletingId === contact.id && processing ? 'Deleting...' : 'Delete'}
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
