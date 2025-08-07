import React from 'react';

const Error403Page = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-5xl font-bold text-yellow-500 mb-4">403</h1>
            <p className="text-lg text-gray-700">You don't have permission to view this page.</p>
        </div>
    );
};

export default Error403Page;