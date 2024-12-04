import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import usersData from '../utils/userData.json';
import AddUserForm from './AddUserForm';

const ROWS_PER_PAGE = 5;

export default function UsersTable() {
    const [users, setUsers] = useState(usersData.usersData);
    const [selectedRole, setSelectedRole] = useState("All");
    const [editUser, setEditUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

    const filteredUsers = users.filter((user) =>
        selectedRole === "All"
            ? true
            : user.role.toLowerCase() === selectedRole.toLowerCase()
    ).filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * ROWS_PER_PAGE,
        currentPage * ROWS_PER_PAGE
    );

    const handleToggleState = (email) => {
        const updatedUsers = users.map((user) =>
            user.email === email ? { ...user, state: !user.state } : user
        );
        setUsers(updatedUsers);
        const toggledUser = updatedUsers.find((user) => user.email === email);
        toast.success(`${toggledUser.name} is now ${toggledUser.state ? "active" : "inactive"}`);
    };

    const handleDeleteUser = (email) => {
        const updatedUsers = users.filter((user) => user.email !== email);
        setUsers(updatedUsers);
        toast.success("User deleted successfully");
    };

    const handleEditUser = (user) => {
        setEditUser(user);
    };

    const handleUpdateUser = (updatedUser) => {
        const updatedUsers = users.map((user) =>
            user.email === updatedUser.email ? updatedUser : user
        );
        setUsers(updatedUsers);
        setEditUser(null);
        toast.success("User updated successfully");
    };

    const handleAddUser = (newUser) => {
        setUsers((prev) => [...prev, newUser]);
    };

    const renderRoleTab = (role) => (
        <button
            className={`mr-4 py-1 px-3 rounded-full transition-all duration-300 ${selectedRole === role ? "bg-indigo-600 text-white" : "text-indigo-600 hover:bg-indigo-100"
                }`}
            onClick={() => {
                setSelectedRole(role);
                setCurrentPage(1); // Reset pagination after role change
            }}
        >
            {role}
        </button>
    );

    return (
        <div className="overflow-hidden bg-white shadow-xl rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-semibold text-gray-700">User Management</h2>
                <button
                    className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 transition-all duration-300"
                    onClick={() => setIsAddUserModalOpen(true)}
                >
                    + Add New User
                </button>
            </div>
            <p className="text-sm text-gray-500 mb-4">
                Manage your user accounts, roles, and permissions.
            </p>
            <div className="mb-4 flex justify-between items-center">
                <div>
                    {renderRoleTab("All")}
                    {renderRoleTab("Super Admin")}
                    {renderRoleTab("Manager")}
                    {renderRoleTab("Accountant")}
                </div>
                <input
                    type="text"
                    placeholder="Search by name or email"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border rounded-lg px-4 py-2 w-64 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="py-2 px-6 text-sm font-medium text-gray-600">Account</th>
                            <th className="py-2 px-6 text-sm font-medium text-gray-600">Email</th>
                            <th className="py-2 px-6 text-sm font-medium text-gray-600">Role</th>
                            <th className="py-2 px-6 text-sm font-medium text-gray-600">Access</th>
                            <th className="py-2 px-6 text-sm font-medium text-gray-600 text-center">Last Activity</th>
                            <th className="py-2 px-6 text-sm font-medium text-gray-600 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedUsers.length === 0 && (
                            <tr>
                                <td colSpan="6" className="text-center py-4 text-gray-500">
                                    No users found
                                </td>
                            </tr>
                        )}

                        {paginatedUsers.map((user) => (
                            <tr
                                key={user.email}
                                className="border-t text-sm hover:bg-gray-50 transition-all duration-300"
                            >
                                <td className="py-3 px-6 flex items-center space-x-4">
                                    <img
                                        src={user.image}
                                        alt={user.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>{user.name}</div>
                                </td>
                                <td className="py-3 px-6 text-gray-700">{user.email}</td>
                                <td className="py-3 px-6">{user.role}</td>
                                <td className="py-3 px-6">{user.access}</td>
                                <td className="py-3 px-6 text-center">
                                    <input
                                        type="checkbox"
                                        checked={user.state}
                                        onChange={() => handleToggleState(user.email)}
                                        className="w-5 h-5 accent-indigo-500 rounded-full"
                                    />
                                </td>
                                <td className="py-3 px-6 text-center space-x-2">
                                    <button
                                        className="text-indigo-600 hover:text-indigo-800 transition-all duration-300"
                                        onClick={() => handleEditUser(user)}
                                    >
                                        <FaEdit className="w-5 h-5" />
                                    </button>
                                    <button
                                        className="text-red-600 hover:text-red-800 transition-all duration-300"
                                        onClick={() => handleDeleteUser(user.email)}
                                    >
                                        <FaTrash className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-600">
                    Showing {Math.min((currentPage - 1) * ROWS_PER_PAGE + 1, filteredUsers.length)}-
                    {Math.min(currentPage * ROWS_PER_PAGE, filteredUsers.length)} of{" "}
                    {filteredUsers.length} results
                </span>
                <div className="space-x-2">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        className="px-4 py-2 border rounded-lg disabled:opacity-50 transition-all duration-300"
                    >
                        Previous
                    </button>
                    <button
                        disabled={currentPage * ROWS_PER_PAGE >= filteredUsers.length}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        className="px-4 py-2 border rounded-lg disabled:opacity-50 transition-all duration-300"
                    >
                        Next
                    </button>
                </div>
            </div>
            {/* Edit User Modal */}
            {editUser && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center animate-fade-in">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-96">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Edit User</h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleUpdateUser(editUser);
                            }}
                        >
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    value={editUser.name}
                                    onChange={(e) =>
                                        setEditUser({ ...editUser, name: e.target.value })
                                    }
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    value={editUser.email}
                                    onChange={(e) =>
                                        setEditUser({ ...editUser, email: e.target.value })
                                    }
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Role</label>
                                <select
                                    value={editUser.role}
                                    onChange={(e) =>
                                        setEditUser({ ...editUser, role: e.target.value })
                                    }
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                >
                                    <option>Super Admin</option>
                                    <option>Manager</option>
                                    <option>Accountant</option>
                                    <option>User</option>
                                </select>
                            </div>
                            <div className="mb-4 flex justify-between">
                                <button
                                    type="button"
                                    onClick={() => setEditUser(null)}
                                    className="bg-gray-500 text-white py-2 px-4 rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-indigo-600 text-white py-2 px-4 rounded-md"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* Add User Modal */}
            {isAddUserModalOpen && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center animate-fade-in">
                    <AddUserForm onClose={() => setIsAddUserModalOpen(false)} onAdd={handleAddUser} />
                </div>
            )}
        </div>
    );
}
