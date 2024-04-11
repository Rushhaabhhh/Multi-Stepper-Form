import React from 'react';

const StepperControl = ({ handleClick, currentStep, steps }) => {
    return (
        <div className="container flex justify-around mt-4 mb-8">
            {/* back button */}
            <button 
                onClick={() => handleClick()}
                className={`bg-white text-blue-600 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-blue-600 hover:text-white border-2 border-blue-600 transition duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
                Back
            </button>

            {/* next button */}
            <button 
                onClick={() => handleClick("next")}
                className="bg-white text-blue-600 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-blue-600 hover:text-white border-2 border-blue-600 transition duration-200 ease-in-out"> 
                {currentStep === steps.length ? "Confirm" : "Next"}
            </button>
        </div>
    );
};

export default StepperControl;
