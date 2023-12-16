import React from 'react';

const ProgressBar = () => {
    const staticPercent = 75;

    return (
        <div className="w-full mt-4 px-12 py-6 flex gap-6">
            <div className="allign-middle justify-center  bg-gray-200 rounded-2xl overflow-hidden grow">
                <div
                    className="h-full bg-green-500"
                    style={{ width: `${staticPercent}%` }}
                />
            </div>
            <div className="flex justify-center text-center">
                <span className="text-white font-bold text-xl">{staticPercent}% </span>
            </div>
        </div>
    );
};

export default ProgressBar;
