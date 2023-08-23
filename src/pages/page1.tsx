import React from 'react';
import Link from 'next/link';
import '../app/layout';

const Page1: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ocean-600 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">Welcome to Page 1</h1>
        <p className="text-gray-600 mb-6">
          This is a sample page using advanced Tailwind CSS styles.
        </p>
        <Link href="/">
          <button className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Go back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page1;
