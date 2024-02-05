import logo from "../../assests/logo new.png";
import home from "../../assests/Home.png";

export default function MainNavBar() {

    return (

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
    );
}
