import logo from "../../assests/logo new.png";
import home from "../../assests/Home.png";
import {useEffect, useState} from "react";

export default function Settings() {

    /*Set Date and time*/
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000); // Update every second

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return(

        <div className="bg-customgray w-screen flex flex-wrap flex-shrink">

            {/*Right content*/}
            <div className="h-screen w-1/12">
                {/* Logo */}
                <div className="h-auto w-16 md:w-20 bg-customblack rounded-2xl flex flex-col flex-wrap">
                    <img src={logo} className="items-center" alt="Logo"/>

                    {/* Buttons */}
                    <button
                        className="h-10 md:h-12 w-full bg-customblack rounded-md mt-2 md:mt-3 flex items-center justify-evenly hover:bg-homeicon">
                        <img src={home} alt="Home Icon" className="h-5 md:h-6 w-5 md:w-6"/>
                    </button>
                    <button
                        className="h-10 md:h-12 w-full bg-customblack rounded-md mt-2 md:mt-3 flex items-center justify-evenly hover:bg-homeicon">
                        <img src={home} alt="Home Icon" className="h-5 md:h-6 w-5 md:w-6"/>
                    </button>
                    <button
                        className="h-10 md:h-12 w-full bg-customblack rounded-md mt-2 md:mt-3 flex items-center justify-evenly hover:bg-homeicon">
                        <img src={home} alt="Home Icon" className="h-5 md:h-6 w-5 md:w-6"/>
                    </button>
                    <button
                        className="h-10 md:h-12 w-full bg-customblack rounded-md mt-2 md:mt-3 flex items-center justify-evenly hover:bg-homeicon">
                        <img src={home} alt="Home Icon" className="h-5 md:h-6 w-5 md:w-6"/>
                    </button>
                    <button
                        className="h-10 md:h-12 w-full bg-customblack rounded-md mt-2 md:mt-3 flex items-center justify-evenly hover:bg-homeicon">
                        <img src={home} alt="Home Icon" className="h-5 md:h-6 w-5 md:w-6"/>
                    </button>
                    <button
                        className="h-10 md:h-12 w-full bg-customblack rounded-md mt-2 md:mt-3 flex items-center justify-evenly hover:bg-homeicon">
                        <img src={home} alt="Home Icon" className="h-5 md:h-6 w-5 md:w-6"/>
                    </button>
                    <button
                        className="h-10 md:h-12 w-full bg-customblack rounded-md mt-2 md:mt-3 flex items-center justify-evenly hover:bg-homeicon">
                        <img src={home} alt="Home Icon" className="h-5 md:h-6 w-5 md:w-6"/>
                    </button>
                    {/* Repeat similar adjustments for other buttons */}
                </div>
            </div>

            {/*Middle content*/}
            <div className=" w-11/12 ">

                <div className="flex flex-wrap">
                    <h1 className="font-bold text-2xl text-white w-full md:w-auto mb-2 md:mb-0 md:mr-6">Settings</h1>

                </div>

                {/* Date and time */}
                <div className="flex">
                    <h3 className="text-white ">{currentDate.toLocaleString()}</h3>
                </div>
                <hr/>

            </div>
        </div>
    );
}
