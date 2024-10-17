import { useState } from 'react';

export default function TaxListForm() {
  const [activeStatus, setActiveStatus] = useState(true);

  const toggleActiveStatus = () => {
    setActiveStatus(!activeStatus);
  };

  return (
    <div className="min-h-screen">
    <div className="bg-white rounded-md shadow-md p-6 max-w-4xl ml">
      <h2 className="text-xl font-bold mb-4">Tax list:</h2>

      {/* Tax Name, CGST, SGST, and Control Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Side - Tax Name, CGST, and SGST */}
        <div>
          <div className="mb-4">
            <label htmlFor="taxName" className="block text-sm font-medium text-gray-700">
              Tax Name*
            </label>
            <input
              type="text"
              id="taxName"
              placeholder="Enter Tax Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex space-x-6">
            <div className="mb-4">
              <label htmlFor="cgst" className="block text-sm font-medium text-gray-700">
                Percentage CGST*
              </label>
              <input
                type="number"
                id="cgst"
                placeholder="0%"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="sgst" className="block text-sm font-medium text-gray-700">
                Percentage SGST*
              </label>
              <input
                type="number"
                id="sgst"
                placeholder="0%"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

          {/* Right Side - Active Status Control */}
          <div className=" p-4 ">
            <h3 className="font-semibold text-gray-700 mb-4">Control:</h3>
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-700">Active Status*</span>
              <button
                type="button"
                onClick={toggleActiveStatus}
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ${
                  activeStatus ? 'bg-green-500' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`${
                    activeStatus ? 'translate-x-6' : 'translate-x-1'
                  } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6 flex justify-center ">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none w-96">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
