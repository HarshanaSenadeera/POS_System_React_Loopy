import logo from '../../assests/logo new.png'
import home from '../../assests/Home.png'
import {useEffect, useState} from "react";
import SelectProducts from "../selectedProducts/product";
import MainNavBar from "../mainNavBar/MainNavBar";
import Product from "../mainProducts/product";
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

                <Product/>


            </div>


            {/*Right content*/}
            <div className="h-screen w-3/12 flex flex-col">

                <div className="w-auto h-auto">

                        <SelectProducts/>

                </div>
            </div>


        </div>

    );
}
