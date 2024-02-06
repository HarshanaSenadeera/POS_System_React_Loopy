
import {HiOutlineCurrencyDollar} from "react-icons/hi";
import {FaArrowUp} from "react-icons/fa";
import {LuBookmarkMinus} from "react-icons/lu";
import {HiOutlineUsers} from "react-icons/hi2";
import {IoFilter} from "react-icons/io5";
import React, {useState} from "react";
import ReactApexChart from 'react-apexcharts';
import MainNavBar from "../mainNavBar/MainNavBar";




const orderTable = [
    {
        id: "01",
        img: "Cold.png",
        Name: "josph jaquer",
        Menu: "Spicy seasoned seafood noodles",
        total: "$125",
        button: "Completed"

    },
    {
        id: "01",
        img: "Cold.png",
        Name: "josph jaquer",
        Menu: "Spicy seasoned seafood noodles",
        total: "$125",
        button: "Completed"

    },
    {
        id: "01",
        img: "Cold.png",
        Name: "josph jaquer",
        Menu: "Spicy seasoned seafood noodles",
        total: "$125",
        button: "Completed"

    },
]

const mostUser = [
    {
        id: "01",
        img: "Cold.png",
        category: "Spicy seasoned seafood noodles",
        dishes: 200
    },
    {
        id: "01",
        img: "Cold.png",
        category: "Spicy seasoned seafood noodles",
        dishes: 200
    },
    {
        id: "01",
        img: "Cold.png",
        category: "Spicy seasoned seafood noodles",
        dishes: 200
    }
]

export function Board() {
    const [isFullHeight, setIsFullHeight] = useState(false);

    const handleButtonClick = () => {
        setIsFullHeight(!isFullHeight);
    };
    const [chartData, setChartData] = useState({
        series: [44, 55, 13, 43, 22],
        options: {
            chart: {
                width: 380,
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            type: 'pie',  // Move 'type' property to the main 'options' object
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    });
    const orderTypeOptions = ["Today", "Yesterday", "Day After"]; // Add order type options here
    const [orderType, setOrderType] = useState('');
    const [open, setOpen] = useState(true);

    const [currentDate, setCurrentDate] = useState(new Date());
    // @ts-ignore
    return (

        <div className="flex w-full bg-customgray flex-row h-screen gap-5">

            <div className="flex">
                <MainNavBar/>

            </div>
            {/*start with name card report*/}
            <div className="flex flex-col  w-2/3 ">
                {/*Date and Name*/}
                <div className=" h-1/6 border-b border-white w-3/4">
                    <div className="flex flex-wrap">
                        <h1 className="font-bold text-2xl text-white w-full md:w-auto mb-2 md:mb-0 md:mr-6">Settings</h1>
                    </div>

                    {/* Date and time */}
                    <div className="flex">
                        <h3 className="text-white">{currentDate.toLocaleString()}</h3>
                    </div>

                </div>

                {/*Start with cart total revenue,dishes,customer*/}
                <div className=" h-2/6 flex FLEX-WRAP w-full flex-row  mt-5 gap-16  ">
                    <div className='  w-3/12 rounded-[2rem] bg-[#201F1F] h-auto'>
                        {/*Total revenue*/}
                        {/*first row */}
                        <div className='flex flex-row gap-3 mt-6 ml-2'>
                            <HiOutlineCurrencyDollar className="size-10 text-[#9288E0] "/>
                            <div className="flex flex-row gap-2">
                                <input type='text' placeholder="+32.40%" readOnly
                                       className='outline-none bg-[#201F1F] text-green-600 w-16'/>
                                <div
                                    className='flex items-center justify-center rounded-full w-5 h-5 bg-[#88E0913D] mt-3 '>
                                    <FaArrowUp className="text-[#50D1AA] "/>
                                </div>
                            </div>

                        </div>
                        {/*second row */}
                        <div className='flex flex-col gap-2 mt-4 items-center justify-center '>
                               <span
                                   className='font-bold text-2xl flex flex-row text-white items-center justify-center'>$
                              <input type='text' placeholder='10,243.00' className="outline-none w-28 bg-[#201F1F]"/>
                          </span>
                            <h1 className="text-white font-semibold  ">Total Revenue</h1>

                        </div>

                        {/*third row*/}

                    </div>
                    <div className='  w-3/12 rounded-[2rem] bg-[#201F1F] h-auto'>
                        {/*Total revenue*/}
                        {/*first row */}
                        <div className='flex flex-row gap-3 mt-6 ml-2'>
                            <LuBookmarkMinus className="size-10 text-[#FFB572] "/>
                            <div className="flex flex-row gap-2">
                                <input type='text' placeholder="+32.40%" readOnly
                                       className='outline-none bg-[#201F1F] text-green-600 w-16'/>
                                <div
                                    className='flex items-center justify-center rounded-full w-5 h-5 bg-[#88E0913D] mt-3 '>
                                    <FaArrowUp className="text-[#50D1AA] "/>
                                </div>
                            </div>

                        </div>
                        {/*second row */}
                        <div className='flex flex-col gap-2 mt-4 items-center justify-center '>
                               <span
                                   className='font-bold text-2xl flex flex-row text-white items-center justify-center'>
                              <input type='text' placeholder='45,000' className="outline-none w-28 bg-[#201F1F]"/>
                          </span>
                            <h1 className="text-white font-semibold mr-6">Total Dishes</h1>

                        </div>

                        {/*third row*/}

                    </div>
                    <div className='  w-3/12 rounded-[2rem] bg-[#201F1F] h-auto'>
                        {/*Total revenue*/}
                        {/*first row */}
                        <div className='flex flex-row gap-3 mt-6 ml-2'>
                            <HiOutlineUsers className="size-10 text-[#65B0F6] "/>
                            <div className="flex flex-row gap-2">
                                <input type='text' placeholder="+32.40%" readOnly
                                       className='outline-none bg-[#201F1F] text-green-600 w-16'/>
                                <div
                                    className='flex items-center justify-center rounded-full w-5 h-5 bg-[#88E0913D] mt-3 '>
                                    <FaArrowUp className="text-[#50D1AA] "/>
                                </div>
                            </div>

                        </div>
                        {/*second row */}
                        <div className='flex flex-col gap-2 mt-4 items-center justify-center '>
                               <span
                                   className='font-bold text-2xl flex flex-row text-white items-center justify-center'>
                              <input type='text' placeholder='56,000' className="outline-none w-28 bg-[#201F1F]"/>
                          </span>
                            <h1 className="text-white font-semibold  ">Total Customers</h1>

                        </div>

                        {/*third row*/}

                    </div>
                </div>
                {/*End OF cart total revenue,dishes,customer*/}

                {/*start with order report*/}
                <div className=" h-3/6 w-11/12 bg-[#201F1F] rounded-2xl mt-4 mb-4">
                    <div className='w-full border-b border-white mt-1 flex justify-center items-center h-1/5'>
                        <h1 className='font-semibold text-3xl text-white ml-4'>Order Report</h1>
                        <button
                            className=' bg-[#1F1D2B] border border-[#393C49] ml-auto rounded mr-3  h-4/5 flex text-white items-center w-1/6 justify-center'>
                            <IoFilter className='mt-1'/>
                            Filter Order
                        </button>
                    </div>
                    <div>
                        {/*th*/}
                        <div className='flex justify-around text-white mt-5 text-[1rem] font-semibold'>
                            <h1>Customer</h1>
                            <h1>Menu</h1>
                            <h1>Total Payment</h1>
                            <h1>Status</h1>

                        </div>

                        {/*start of table row*/}
                        <div className=''>
                            <div className="flow-root overflow-y-auto h-40">
                                {orderTable.map((order: any) => (
                                    <div key={order.id}
                                         className='flex bg-[#2D2944] rounded-2xl flex-row justify-around items-center mt-4 text-white h-16 '>
                                        <div className='flex  gap-4'>
                                            <div className='rounded-full w-8 h-8 bg-pink-600 mt-1 '>
                                                <img src={require(`../../assests/${order.img}`)}
                                                     alt=" "
                                                     onError={(e) => console.error("Image error:", e)}
                                                /></div>
                                            <h1 className='mt-3 text-sm block'>{order.Name}</h1>
                                        </div>
                                        <div className='w-32  text-sm block'>
                                            <p>{order.Menu}</p>
                                        </div>
                                        <div className='mr-[4rem] text-sm block'>
                                            <h1 className=''>{order.total}</h1>
                                        </div>
                                        <div>
                                            <button
                                                className="bg-[#6BE2BE3D]  text-[#50D1AA] rounded-2xl w-[6rem] text-sm block">
                                                Completed
                                            </button>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                        {/*end of table row*/}




                    </div>

                </div>
                {/*End of order report*/}

            </div>
            {/*End of Cart and report*/}

            {/*Start with Most Use and Most Type of Order cart*/}
            <div className="flex flex-col w-1/3 gap-4 ">
                {/*Start with Most Use cart*/}
                <div className={`flex  ${isFullHeight ? 'h-full' : 'h-1/2'} rounded-3xl bg-[#201F1F] w-11/12 mt-5 flex-col`}>
                    {/* start cart name and drop down option*/}
                    <div className='flex items-center  border-b border-white flex-row w-full h-1/4 justify-between '>
                        <h1 className="text-white font-semibold ml-2 text-2xl">Most Use</h1>
                        {/*dropDown*/}
                        <div className='flex mr-3 items-center '>
                            <label htmlFor="orderType" className="block text-sm font-medium text-white flex-grow">
                            </label>
                            {/* Replace the input with a select dropdown */}
                            <select
                                id="orderType"
                                className="mt-1 p-2 w-full border rounded-md bg-dishes text-white"
                                value={orderType}
                                onChange={(e) => setOrderType(e.target.value)}
                                required
                            >
                                {/* Map over the options and create option elements */}
                                {orderTypeOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {/*end cart name and drop down option*/}
                    {/*load dishes from array*/}
                    <div className="h-2/4  flex mt-3 flex-col gap-3 overflow-y-auto">
                        {mostUser.map((most: any) => (

                            <div key={most.id} className='flex flex-row gap-3 ml-3'>
                                <div className='flex w-12 h-12 '>
                                    <img src={require(`../../assests/${most.img}`)} alt="" className='rounded-full'/>
                                </div>
                                <div className='flex flex-col text-white'>
                                    <p className='text-[20px] font-semibold'>{most.category}</p>
                                    <h1 className='text-sm block'>{most.dishes} dishes ordered</h1>
                                </div>
                            </div>
                        ))}

                    </div>
                    {/*view All Button*/}
                    <div className='flex h-1/4 w-full   justify-center'>
                        <button className='border border-[#EA7C69] w-3/4 h-3/4 mt-2.5 text-button   '
                                onClick={handleButtonClick}>
                            View All
                        </button>
                    </div>
                </div>
                {/*End of Most Use cart*/}

                {/*start with most type of order*/}
                <div className={ `flex  ${isFullHeight ? 'h-0' : 'h-1/2'} rounded-3xl bg-[#201F1F] w-11/12 mb-4 flex-col `}>
                    <div className='flex items-center  border-b border-white flex-row w-full h-3/6 justify-between '>
                        <h1 className="text-white font-semibold ml-2 text-2xl">Most type of order</h1>
                        <div className='flex mr-3 items-center '>
                            <label htmlFor="orderType" className="block text-sm font-medium text-white flex-grow">
                            </label>
                            {/* Replace the input with a select dropdown */}
                            <select
                                id="orderType"
                                className="mt-1 p-2 w-full border rounded-md bg-dishes text-white"
                                value={orderType}
                                onChange={(e) => setOrderType(e.target.value)}
                                required
                            >
                                {/* Map over the options and create option elements */}
                                {orderTypeOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>
                    <div className='flex flex-wrap '>
                        <div id="chart" className={`${isFullHeight ? 'h-0': 'h-auto'} flex`}>
                            <ReactApexChart   options={chartData.options} series={chartData.series} type="pie" width={350} />
                        </div>
                        <div id="html-dist"></div>
                    </div>
                </div>
                {/*end of most type of order*/}

            </div>
            {/*Start with Most Use and Most Type of Order cart*/}

        </div>
    );
}
