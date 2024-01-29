import logo from '../../assests/logo new.png'
import home from '../../assests/Home.png'
import {useEffect, useState} from "react";
export default function Main() {

    /*Set Date and time*/
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000); // Update every second

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);


    return (
        <div className="bg-customgray w-screen flex">

            {/*Right content*/}
            <div className="h-screen w-1/12">
                {/* Logo */}
                <div className="h-sidebar w-16 md:w-20 bg-customblack rounded-2xl flex flex-col">
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
            <div className=" w-8/12 ">

                <div className="flex flex-wrap">
                    <h1 className="font-bold text-2xl text-white w-full md:w-auto mb-2 md:mb-0 md:mr-6">Loopy Holding
                        (PVT) Ltd</h1>

                    {/* Search bar */}
                    <div
                        className="flex bg-serchbar p-2 rounded-md mt-2 flex-shrink px-56 ml-10">
                        <input
                            type="text"
                            placeholder="Search for food, coffee etc..."
                            className="w-full outline-none px-5 bg-serchbar text-white"
                        />
                    </div>
                </div>

                {/* Date and time */}
                <div className="flex">
                    <h3 className="text-white ">{currentDate.toLocaleString()}</h3>
                </div>

                {/* Nav bar */}
                <div className="flex justify-center mt-3">
                    <nav className="flex">
                        <ul className="flex space-x-4 md:space-x-12 text-white font-bold">
                            <li><a href="#" className="hover:text-homeicon">Hot Dishes</a></li>
                            <li><a href="#" className="hover:text-homeicon">Cold Dishes</a></li>
                            <li><a href="#" className="hover:text-homeicon">Soup</a></li>
                            <li><a href="#" className="hover:text-homeicon">Grill</a></li>
                            <li><a href="#" className="hover:text-homeicon">Appetizer</a></li>
                            <li><a href="#" className="hover:text-homeicon">Dessert</a></li>
                        </ul>
                    </nav>
                </div>

                {/* Title */}
                <div className="flex">
                    <h3 className="text-white font-bold">Choose dishes</h3>
                </div>
            </div>


            {/*Right content*/}
            <div className=" h-screen w-3/12 ">

                <div className="w-auto h-auto">

                    <div className="w-full h-screen bg-oderbar rounded-2xl ">
                        {/*Total cost and items*/}
                        <div className="flex justify-around">
                            <h2 className="text-white font-bold mt-3"> Total cost :</h2>
                            <h2 className="text-white font-bold mt-3"> Total items :</h2>
                        </div>

                        <div className="flex justify-evenly mt-5 text-white">
                            <button className="bg-button h-10 w-20 rounded-md">Dine in</button>
                            <button className="bg-button h-10 w-20 rounded-md">To go</button>
                            <button className="bg-button h-10 w-20 rounded-md">Delivery</button>
                        </div>

                        <hr className="mt-5"/>
                        <div className="flex text-white ml-5">
                            Item
                            <div className="flex text-white ml-auto">
                                <h2 className="mr-8">qty</h2>
                                <h2>Price</h2>
                            </div>
                        </div>


                        <hr className="mt-10"/>
                    </div>

                </div>
            </div>

        </div>

    );
}
