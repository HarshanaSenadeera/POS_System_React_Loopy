import logo from "../../assests/logo new.png";
import home from "../../assests/Home.png";
import {useEffect, useState} from "react";
import React from 'react';
import { RiHeart3Fill } from "react-icons/ri";
import { HiHomeModern } from "react-icons/hi2";
import { RiProductHuntFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { PiWarningCircleLight } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { MdOutlineManageAccounts } from "react-icons/md";
import MainNavBar from "../mainNavBar/MainNavBar";

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

    /*Settings Options*/


    return(

        <div className="bg-customgray w-full flex flex-wrap flex-shrink">

            {/*Right content*/}
            <div className="h-screen w-1/12 ">
                {/* Logo
                <div className="h-auto w-16 md:w-20 bg-customblack rounded-2xl flex flex-col flex-wrap">
                    <img src={logo} className="items-center" alt="Logo"/>

                     Buttons
                    <button
                        className="h-10 md:h-12 w-full bg-customblack rounded-md mt-2 md:mt-3 flex items-center justify-evenly hover:bg-homeicon ">
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
            <div className="w-11/12 flex-wrap flex-shrink">

                <div className="flex flex-wrap">
                    <h1 className="font-bold text-2xl text-white w-full md:w-auto mb-2 md:mb-0 md:mr-6">Settings</h1>
                </div>

                {/* Date and time */}
                <div className="flex">
                    <h3 className="text-white">{currentDate.toLocaleString()}</h3>
                </div>
                <hr className="flex-shrink w-0"/>

                {/* Horizontal Line */}
                <hr className=""/>

               {/*setting and products*/}
                <div className="flex w-full justify-between">
                    <div className="w-2/12 ">
                        {/*Setting Options*/}
                        <div className="flex bg-customblack  h-auto flex-col text-white items-center justify-center space-y-2 rounded-md flex-wrap flex-shrink-1 w-auto mt-5 ">
                            <button className="btn hover:bg-button w-full rounded-md text-left py-4 px-4">
                                <RiHeart3Fill/> Appereance
                                <span className="text-sm block">Dark and Light mode, Font size</span>
                            </button>
                            <button className="btn hover:bg-button w-full rounded-md text-left py-2 px-4">
                                <HiHomeModern/>Your Restaurant
                                <span className="text-sm block">Dark and Light mode, Font size</span>
                            </button>
                            <button className="btn hover:bg-button w-full rounded-md text-left py-2 px-4">
                                <RiProductHuntFill />Products Management
                                <span className="text-sm block">Manage your product, pricing, etc</span>
                            </button>
                            <button className="btn hover:bg-button w-full rounded-md text-left py-2 px-4">
                                <IoIosNotifications />Notifications
                                <span className="text-sm block">Customize your notifications</span>
                            </button>
                            <button className="btn hover:bg-button w-full rounded-md text-left py-2 px-4">
                                <CiLock />Security
                                <span className="text-sm block">Configure Password, PIN, etc</span>
                            </button>
                            <button className="btn hover:bg-button w-full rounded-md text-left py-2 px-4">
                                <CiLock />Security
                                <span className="text-sm block">Configure Password, PIN, etc</span>
                            </button>
                            <button className="btn hover:bg-button w-full rounded-md text-left py-2 px-4">
                                <PiWarningCircleLight />
                                About Us
                                <span className="text-sm block">Find out more about Posly</span>
                            </button>
                            <button className="btn hover:bg-button w-full rounded-md text-left py-2 px-4">
                                <PiWarningCircleLight />
                                About Us
                                <span className="text-sm block">Find out more about Posly</span>
                            </button>
                            <button className="btn hover:bg-button w-full rounded-md text-left py-2 px-4">
                                <PiWarningCircleLight />
                                About Us
                                <span className="text-sm block">Find out more about Posly</span>
                            </button>

                            {/* Add more buttons as needed */}
                        </div>
                    </div>

                    <div
                        className="flex bg-customblack  h-auto flex-col text-white p-5 rounded-md flex-wrap flex-shrink-1 w-9/12 mt-5 mr-20">

                        <div className="flex justify-between">
                            <div className="text-white flex text-2xl">
                                Product Management
                            </div>

                            <div className="flex">
                                <button
                                    className="bg-customblack border-white border-2 h-auto w-auto text-white p-5 rounded-md">
                                    <MdOutlineManageAccounts/>Manage Categories
                                </button>
                            </div>

                        </div>

                        <div className="flex justify-start mt-3">
                            <nav className="flex">
                                <ul className="flex space-x-4 md:space-x-12 text-white font-bold">
                                    <li><a href="<SelectProducts/>" className="hover:text-homeicon">Hot Dishes</a></li>
                                    <li><a href="#" className="hover:text-homeicon">Cold Dishes</a></li>
                                    <li><a href="#" className="hover:text-homeicon">Soup</a></li>
                                    <li><a href="#" className="hover:text-homeicon">Grill</a></li>
                                    <li><a href="#" className="hover:text-homeicon">Appetizer</a></li>
                                    <li><a href="#" className="hover:text-homeicon">Dessert</a></li>
                                </ul>
                            </nav>
                        </div>

                        <hr className="mt-5"/>


                    </div>
                </div>

            </div>

        </div>
    );
}
