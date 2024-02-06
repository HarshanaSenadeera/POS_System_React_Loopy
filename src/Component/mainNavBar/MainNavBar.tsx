import logo from "../../assests/logo new.png";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";

export default function MainNavBar() {

    return (

        <div className="h-screen w-1/12">
            {/* Logo */}
            <div className="h-auto w-16 md:w-20 bg-customblack rounded-2xl flex flex-col flex-wrap">
                <img src={logo} className="items-center" alt="Logo"/>

                {/* Buttons */}
                <button
                    className="h-10 md:h-12 w-full bg-customblack rounded-md mt-2 md:mt-3 flex items-center justify-evenly hover:bg-homeicon ">
                    <AiOutlineHome className="text-homeicon size-6 hover:text-white"/>
                </button>
                <button
                    className="h-10 md:h-12 w-full bg-customblack rounded-md mt-2 md:mt-3 flex items-center justify-evenly hover:bg-homeicon">
                    <AiOutlineHome className="text-homeicon size-6 hover:text-white"/>
                </button>

                    <button
                        className="h-10 md:h-12 w-full bg-customblack rounded-md mt-2 md:mt-3 flex items-center justify-evenly hover:bg-homeicon">
                        <AiOutlineHome className="text-homeicon size-6 hover:text-white"/>
                    </button>

                <button
                    className="h-10 md:h-12 w-full bg-customblack rounded-md mt-2 md:mt-3 flex items-center justify-evenly hover:bg-homeicon">
                    <FaRegMessage className="text-homeicon  hover:text-white"/>
                </button>
                <button
                    className="h-10 md:h-12 w-full bg-customblack rounded-md mt-2 md:mt-3 flex items-center justify-evenly hover:bg-homeicon">
                    <IoMdNotificationsOutline className="text-homeicon size-6 hover:text-white"/>
                </button>
                <button
                    className="h-10 md:h-12 w-full bg-customblack rounded-md mt-2 md:mt-3 flex items-center justify-evenly hover:bg-homeicon">
                    <IoSettingsOutline className="text-homeicon size-6 hover:text-white"/>

                </button>
                <button
                    className="h-10 md:h-12 w-full bg-customblack rounded-md mt-2 md:mt-3 flex items-center justify-evenly hover:bg-homeicon">
                    <RiLogoutBoxRLine className="text-homeicon size-6 hover:text-white"/>
                </button>
                {/* Repeat similar adjustments for other buttons */}
            </div>
        </div>
    );
}
