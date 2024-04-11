import {useContext} from 'react';
import { StepperData } from '../../Data/StepperData';

export default function PersonalDetails() {

    const {userData, setUserData}  = useContext(StepperData);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({ ...userData, [name] : value});
    };

    return (
    <div className="flex flex-col">
        <div className="w-full mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Address
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input 
                    onChange={handleChange}
                    value={userData["address"] || ""}
                    name = "address"
                    placeholder = "Address"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
            </div>
        </div>

        <div className="w-full mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Contact Number
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input 
                    onChange={handleChange}
                    value={userData["contactNo"] || ""}
                    name = "contactNo"
                    placeholder = "Contact Number"
                    type="tel"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
            </div>
        </div>

        <div className="w-full mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Graduation Year
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input 
                    onChange={handleChange}
                    value={userData["gradYear"] || ""}
                    name = "gradYear"
                    placeholder = "Graduation Year"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
            </div>
        </div>
    </div>
    )
}