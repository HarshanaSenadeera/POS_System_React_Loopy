import rr from '../../assests/Cold.png'
export default function Product() {

    return (

        <div className="w-48 h-[260px] relative bg-red-700">
            <div className="left-[24px] top-[148px] absolute flex-col justify-center items-center gap-2 inline-flex ">
                <div className="w-36 text-center text-black text-sm font-medium font-['Barlow'] leading-[18.20px] bg-yellow-500">Spicy
                    seasoned seafood noodles
                </div>
                <div className="flex-col justify-center items-center gap-1 flex ">
                    <div className="text-center text-black text-sm font-normal font-['Barlow'] leading-tight">$ 2.29
                    </div>
                    <div className="text-center text-gray-400 text-sm font-normal font-['Barlow'] leading-tight">20
                        Bowls available
                    </div>
                </div>
            </div>

            <div className="w-[132px] h-[132px] left-[30px] top-0 absolute ">
                <div className="w-[132px] h-[132px] left-0 top-0 absolute">
                    <div className="w-[132px] h-[132px] left-0 top-0 absolute rounded-full bg-yellow-700"></div>
                    <img className="w-[244.64px] h-[222px] left-[-49px] top-[1px] absolute"
                         src="https://via.placeholder.com/245x222"/>
                </div>

            </div>
        </div>

    )
}
