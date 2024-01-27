import logo from '../assests/logo new.png'
import home from '../assests/Home.png'
export default function Main() {

    return (
        <div className="bg-customgray w-screen flex">

            {/*Right content*/}
            <div className=" h-screen w-auto">
                {/*Logo*/}
                <div className="h-sidebar w-20 bg-customblack rounded-2xl flex flex-col">
                    <img src={logo} className="items-center"></img>

                    {/*Buttons*/}

                    <button
                        className="h-12 w-full bg-customblack rounded-md mt-3 flex items-center justify-evenly hover:bg-homeicon">
                        <img src={home} alt="Home Icon" className="h-6 w-6 "/>
                    </button>
                    <button
                        className="h-12 w-full bg-customblack rounded-md  mt-3 flex items-center justify-evenly hover:bg-homeicon">
                        <img src={home} alt="Home Icon" className="h-6 w-6 "/>
                    </button>
                    <button
                        className="h-12 w-full bg-customblack rounded-md mt-3 flex items-center justify-evenly hover:bg-homeicon">
                        <img src={home} alt="Home Icon" className="h-6 w-6 "/>
                    </button>
                    <button
                        className="h-12 w-full bg-customblack rounded-md mt-3 flex items-center justify-evenly hover:bg-homeicon">
                        <img src={home} alt="Home Icon" className="h-6 w-6 "/>
                    </button>
                    <button
                        className="h-12 w-full bg-customblack rounded-md  mt-3 flex items-center justify-evenly hover:bg-homeicon">
                        <img src={home} alt="Home Icon" className="h-6 w-6 "/>
                    </button>
                    <button
                        className="h-12 w-full bg-customblack rounded-md  mt-3 flex items-center justify-evenly hover:bg-homeicon">
                        <img src={home} alt="Home Icon" className="h-6 w-6 "/>
                    </button>
                    <button
                        className="h-12 w-full bg-customblack rounded-md  mt-3 flex items-center justify-evenly hover:bg-homeicon">
                        <img src={home} alt="Home Icon" className="h-6 w-6 "/>
                    </button>

                </div>
            </div>

            {/*Middle content*/}
            <div className="{/*bg-green-600*/} h-screen w-auto">

                <div className="flex">
                    <h1 className="font-bold text-2xl text-white ml-5">Loopy Holding (PVT) Ltd</h1>


                    <div className="flex items-center bg-gray-700 p-2 rounded-md ml-16 mt-2">
                        <input
                            type="text"
                            placeholder="Search for food, coffe etc..."
                            className="w-full outline-none px-48 py-0 bg-gray-700"
                        />

                    </div>
                </div>
            </div>

            {/*Right content*/}
            <div className=" h-screen w-1/4">

            </div>

        </div>

    );
}
