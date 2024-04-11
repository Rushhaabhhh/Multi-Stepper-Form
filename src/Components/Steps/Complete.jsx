import React from 'react';

export default function Complete() {
    return (
        <div className="container md:mt-10">
            <div className="flex flex-col items-center ">
                    <div className="mt-3 text-3xl font-semibold uppercase text-blue-700">
                        Congratulations!
                    </div>
                    <div className="mt-5 text-xl font-semibold text-blue-700">
                        Your account has been created.
                    </div>
                    <a className="mt-10" href="/">
                        <button className="h-10 px-5 text-blue-700 transition-colors duration-150 border border-blue-300 rounded-lg focus:shadow-outline hover:bg-blue-600 hover:text-blue-100">
                            Close
                        </button>
                    </a>
            </div>
        </div>
    );
}