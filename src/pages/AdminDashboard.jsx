import { RoleCard } from '../components/RoleCard';
import { UserTable } from '../components/UserTable';

const roles = [
    { title: 'Super Admin', accounts: 3, permissions: 'Default Permissions' },
    { title: 'Manager', accounts: 4, permissions: 'Default Permissions' },
    { title: 'Accountant', accounts: 1, permissions: 'Default Permissions' },
];

const users = [
    { name: 'Sourtik Roy', email: 'sourtik1819@gmail.com', role: 'Super Admin', access: 'Full', password: '5 Days ago', lastActivity: '6 Days ago' },
    // Add more users as needed
];

export default function AdminDashboard() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Administrators</h1>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Administrator roles available</h2>
                <p className="text-gray-600 mb-4">A role provides access to predefined menus and features...</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {roles.map((role, index) => (
                        <RoleCard key={index} {...role} />
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-2">Administrators accounts</h2>
                <p className="text-gray-600 mb-4">Find all of your seller&apos;s administrator accounts...</p>
                <UserTable users={users} />
            </div>
        </div>
    );
}

