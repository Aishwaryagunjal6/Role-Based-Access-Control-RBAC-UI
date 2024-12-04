import PropTypes from 'prop-types';

PermissionModal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export function PermissionModal({ onClose }) {
    const categories = [
        { name: 'CATALOGUE', subCategories: 7 },
        { name: 'ORDERS', subCategories: 7 },
        { name: 'BRANDS', subCategories: 7 },
        { name: 'B2B', subCategories: 7 },
        { name: 'INVENTORY', subCategories: 7 },
        { name: 'REPORTS', subCategories: 7 },
    ];

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Role Name *</h2>
                    <button onClick={onClose} className="text-red-500">X</button>
                </div>
                <input type="text" placeholder="Role Name" className="w-full mb-4 p-2 border rounded" />
                <div className="space-y-4">
                    {categories.map((category, index) => (
                        <div key={index} className="flex justify-between items-center p-2 border rounded">
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className="font-semibold">{category.name}</span>
                                <span className="text-blue-500 ml-2">Show {category.subCategories} sub-categories</span>
                            </div>
                            <div className="flex space-x-4">
                                <ToggleSwitch label="Read" />
                                <ToggleSwitch label="Write" />
                                <ToggleSwitch label="Edit" />
                            </div>
                        </div>
                    ))}
                </div>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Create</button>
            </div>
        </div>
    )
}


ToggleSwitch.propTypes = {
    label: PropTypes.string.isRequired,
};

function ToggleSwitch({ label }) {
    return (
        <label className="flex items-center">
            <span className="mr-2">{label}</span>
            <input type="checkbox" className="toggle-checkbox" />
        </label>
    );
}

