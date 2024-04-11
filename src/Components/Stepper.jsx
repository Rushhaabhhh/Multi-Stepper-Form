import React, {useEffect, useState, useRef} from 'react';

const Stepper = ({steps, currentStep}) => {

    const [newSteps, setNewSteps] = useState([]);
    const stepRef = useRef();

    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps];
        let count = 0;
        while(count < newSteps.length) {
            if(count === stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true,
                };
                
            } else if(count < stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true,
                };
                
            } else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false
                };   
            }
            count++;
        }
        return newSteps;
    };

    useEffect(() => {
        const stepsState = steps.map((steps, index) =>
            Object.assign({}, {
                description: steps,
                completed : false,
                highlighted: index === 0 ? true : false,
                selected : index === 0 ? true : false,
            })
        );
        stepRef.current = stepsState;

        const current = updateStep(currentStep-1, stepRef.current);
        setNewSteps(current);

    }, [steps, currentStep]);

    const DisplaySteps = newSteps.map((steps, index) => { 
        return (
        <div key = {index}
        className = {
            index === newSteps.length -1  ? " flex items-center" : "w-full flex items-center " 
            }>
            
            <div className="relative flex flex-col items-center text-blue-300 ">
    
                {/* Display number */}
                <div className={`rounded-full transition duration-500 ease-in-out border-2 border-slate-200 h-12 w-12 flex items-center justify-center py-3 text-blue-400 ${steps.selected ? "bg-green-600 text-white font-bold border border-blue-600 ": ""}`}>
                    {steps.completed ? (<span className="text-white font-bold text-xl">&#10003;</span>) : (index + 1)}
                </div>
                
                {/* Display description */}
                <div className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase text-blue-400 ${steps.highlighted ? "text-green-600" : "text-blue-250 "}`}>
                    {steps.description}
                </div>
            </div>
    
            {/* Display line */}
            <div className={`flex-auto border-t-2 transition duration-500 ease-in-out border-blue-200 ${steps.completed ? "border-green-500 " : ""} `}>
            </div>
        </div>
    )
        });

    return (
        <div className="mx-4 p-4 flex justift-between items-center">
            {DisplaySteps}
            
        </div>
    );
};

export default Stepper;