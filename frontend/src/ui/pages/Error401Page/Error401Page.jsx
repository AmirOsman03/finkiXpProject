import React from 'react';
import { useNavigate } from "react-router";

const Error401Page = () => {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate("/login");
    };

    return (
        <div className="min-h-screen mt-1bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background image with opacity */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-[url('https://static.vecteezy.com/system/resources/previews/041/414/041/non_2x/2-step-authentication-concept-secure-login-password-verification-or-sms-with-push-code-message-on-smart-phone-or-desktop-pc-computer-for-site-flat-illustration-on-background-vector.jpg')] bg-cover bg-center"></div>
            </div>

            <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center">
                    <svg
                        className="mx-auto h-16 w-16 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        401 Unauthorized
                    </h2>
                </div>

                <div className="mt-8 bg-white/90 backdrop-blur-sm py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="text-center">
                        <p className="text-sm font-medium text-gray-700">
                            You don't have permission to access this page
                        </p>
                        <p className="mt-2 text-sm text-gray-500">
                            Please authenticate to continue or contact support if you believe this is an error.
                        </p>
                    </div>

                    <div className="mt-6">
                        <button
                            onClick={handleLoginRedirect}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 transition-colors hover:scale-105 transition:all duration-200"
                        >
                            Sign in to your account
                        </button>
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => navigate(-1)}
                            className="text-sm font-medium text-blue-600 hover:text-blue-500 hover:underline focus:outline-none"
                        >
                            ← Return to previous page
                        </button>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm text-gray-600">
                    <p>
                        Need help?{' '}
                        <a href="mailto:support@example.com" className="font-medium text-blue-600 hover:text-blue-500">
                            Contact support
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Error401Page;