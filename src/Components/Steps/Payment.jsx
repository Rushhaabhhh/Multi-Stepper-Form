import React, {useContext} from 'react';
import { StepperData } from '../../Data/StepperData';

export default function Payment() {
    const {userData, setUserData}  = useContext(StepperData);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({ ...userData, [name] : value});
    };

    return (
    <div className="flex flex-col">
        <div className="w-full mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Debit Card / Credit Card
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input 
                    onChange={handleChange}
                    value={userData["paymentMode"] || ""}
                    name = "card"
                    placeholder = "Card Number"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
            </div>

        <div className="w-full mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Name on Card
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input 
                    onChange={handleChange}
                    value={userData["name"] || ""}
                    name = "name"
                    placeholder = "Name"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
            </div>
        </div>
    </div>
    
        <div className="flex justify-center">
        <div className="flex mx-2">
            <div className="flex mx-2 font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Expiry Date
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input 
                    onChange={handleChange}
                    value={userData["expDate"] || ""}
                    name = "expDate"
                    type="date"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
            </div>
        </div>

        <div className="flex mx-2 ">
            <div className="flex mx-2 font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                CVV
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input 
                    onChange={handleChange}
                    value={userData["cvv"] || ""}
                    name = "cvv"
                    type="password"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
            </div>
        </div>
        </div>
        </div>
    )
}