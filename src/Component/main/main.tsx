import logo from '../../assests/logo new.png'
import home from '../../assests/Home.png'
import {useEffect, useState} from "react";
import SelectProducts from "../selectedProducts/product";
import MainNavBar from "../mainNavBar/MainNavBar";
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


    const [openSelectProducts, setOpenSelectProducts] = useState(false);

    const handleButtonClick = () => {
        setOpenSelectProducts(true);
    };

    return (
        <div className="bg-customgray w-screen flex flex-wrap flex-shrink">

            {/*Right content*/}
            <div className="h-screen w-1/12">
                {/* Logo */}
                {/*<div className="h-auto w-16 md:w-20 bg-customblack rounded-2xl flex flex-col flex-wrap">
                    <img src={logo} className="items-center" alt="Logo"/>

                     Buttons
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
                     Repeat similar adjustments for other buttons
                </div>*/}
                <MainNavBar/>
            </div>


            {/*Middle content*/}
            <div className=" w-8/12 ">

                <div className="flex flex-wrap">
                    <h1 className="font-bold text-2xl text-white w-full md:w-auto mb-2 md:mb-0 md:mr-6">Loopy Holding
                        (PVT) Ltd</h1>

                    {/* Search bar */}
                    <div
                        className="flex bg-serchbar p-2 rounded-md mt-2 flex-shrink px-40 ml-10 flex-wrap">
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
                            <li><a href="<SelectProducts/>" className="hover:text-homeicon" onClick={handleButtonClick}>Hot Dishes</a></li>
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
            <div className="h-screen w-3/12 flex flex-col">

                <div className="w-auto h-auto">

                   {/* <div className="w-full h-screen bg-oderbar rounded-2xl flex flex-col gap-y-3 flex-shrink">
                         Total cost and items
                        <div className="flex justify-around">
                            <h2 className="text-white font-bold  flex-wrap"> Total cost :</h2>
                            <h2 className="text-white font-bold "> Total items :</h2>
                        </div>

                        <div className="flex justify-center gap-7 text-white items-start flex-wrap">
                            <button className="bg-button h-10 w-20 rounded-md">Dine in</button>
                            <button className="bg-button h-10 w-20 rounded-md">To go</button>
                            <button className="bg-button h-10 w-20 rounded-md">Delivery</button>
                        </div>*/}

                        <SelectProducts/>
                       {/* <hr/>

                        <div className="flex text-white justify-between">
                            <h2 className="flex-wrap">Item</h2>
                            <h2 className="flex-wrap ml-auto mr-5">qty</h2>
                            <h2 className="flex-wrap">Price</h2>
                        </div>

                        Bottom items
                        <div className="mt-auto ">
                         Price handler
                        <div className="text-white font-bold flex-shrink flex flex-col items-start flex-wrap ml-5 mb-3">
                            <h1>Discount</h1>
                            <h1>Service Charge</h1>
                            <h1>Sub total</h1>
                        </div>

                         Continue payment button
                        <div className="flex justify-center flex-wrap flex-shrink flex-col align-bottom mb-5">
                            <button
                                className="bg-button w-auto h-10 rounded-md items-center justify-center flex text-white">Continue
                                to payment
                            </button>
                        </div>
                        </div>
                    </div>*/}
                </div>
            </div>


        </div>

    );
}
