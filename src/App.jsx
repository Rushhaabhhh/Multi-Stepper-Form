import Stepper from "./Components/Stepper";
import StepperControl from "./Components/StepperControl";

import AccountInformation from "./Components/Steps/AccountInformation";
import PersonalDetails from "./Components/Steps/PersonalDetails";
import Payment from "./Components/Steps/Payment";
import Complete from "./Components/Steps/Complete";

import React, { useState } from 'react';
import { StepperData } from "./Data/StepperData";


function App() {

    const [currentStep, setCurrentStep] = useState(1); 
    const [userData, setUserData] = useState(""); 
    const [finalData, setFinalData] = useState([]);

    const steps = [
        "Account Information",
        "Personal Details",
        "Payment",
        "Complete"
    ];

    const displayStep = (steps) => {
        switch(steps) {
            case 1 : 
                return <AccountInformation/>
            case 2 :
                return <PersonalDetails/>
            case 3 : 
                return <Payment/>
            case 4 : 
                return <Complete/>
            default :
        }
    }

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;

        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
                
                {/* Stepper */}
                <div className="container horizontal mt-5">
                <Stepper 
                    steps={steps}
                    currentStep={currentStep}
                />
                </div>

                {/* Display Components */}
                <div className="my-10 p-10">
                    <StepperData.Provider value = {{
                        userData, setUserData, finalData, setFinalData
                    }}>
                        {displayStep(currentStep)}
                    </StepperData.Provider>
                </div>

                {/* Navigation Controls */}
                {currentStep !== steps.length &&
                    <StepperControl 
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                }
            </div>
        </div>
    )   
}

export default App;
