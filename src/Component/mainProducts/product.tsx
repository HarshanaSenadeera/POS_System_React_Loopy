import rr from '../../assests/dish_one-removebg-preview.png'
import React from "react";
export default function Product() {

    const foods=[

        {
            id: "01",
            img: "dish_one-removebg-preview.png",
            Name: "Nooldes",
            Menu: "Spicy seasoned seafood noodles",
            price: "$125",
            bowls:"50"

        },
        {
            id: "01",
            img: "dish_one-removebg-preview.png",
            Name: "Nooldes",
            Menu: "Spicy seasoned seafood noodles",
            price: "$125",
            bowls:"50"

        },
        {
            id: "01",
            img: "dish_one-removebg-preview.png",
            Name: "Nooldes",
            Menu: "Spicy seasoned seafood noodles",
            price: "$125",
            bowls:"50"

        },
        {
            id: "01",
            img: "dish_one-removebg-preview.png",
            Name: "Nooldes",
            Menu: "Spicy seasoned seafood noodles",
            price: "$125",
            bowls:"50"

        },
        {
            id: "01",
            img: "dish_one-removebg-preview.png",
            Name: "Nooldes",
            Menu: "Spicy seasoned seafood noodles",
            price: "$125",
            bowls:"50"

        },
        {
            id: "01",
            img: "dish_one-removebg-preview.png",
            Name: "Nooldes",
            Menu: "Spicy seasoned seafood noodles",
            price: "$125",
            bowls:"50"

        },
        {
            id: "01",
            img: "dish_one-removebg-preview.png",
            Name: "Nooldes",
            Menu: "Spicy seasoned seafood noodles",
            price: "$125",
            bowls:"50"

        },
        {
            id: "01",
            img: "dish_one-removebg-preview.png",
            Name: "Nooldes",
            Menu: "Spicy seasoned seafood noodles",
            price: "$125",
            bowls:"50"

        },
        {
            id: "01",
            img: "dish_one-removebg-preview.png",
            Name: "Nooldes",
            Menu: "Spicy seasoned seafood noodles",
            price: "$125",
            bowls:"50"

        },
        {
            id: "01",
            img: "dish_one-removebg-preview.png",
            Name: "Nooldes",
            Menu: "Spicy seasoned seafood noodles",
            price: "$125",
            bowls:"50"

        },
        {
            id: "01",
            img: "dish_one-removebg-preview.png",
            Name: "Nooldes",
            Menu: "Spicy seasoned seafood noodles",
            price: "$125",
            bowls:"50"

        },{
            id: "01",
            img: "dish_one-removebg-preview.png",
            Name: "Nooldes",
            Menu: "Spicy seasoned seafood noodles",
            price: "$125",
            bowls:"50"

        },{
            id: "01",
            img: "dish_one-removebg-preview.png",
            Name: "Nooldes",
            Menu: "Spicy seasoned seafood noodles",
            price: "$125",
            bowls:"50"

        },{
            id: "01",
            img: "dish_one-removebg-preview.png",
            Name: "Nooldes",
            Menu: "Spicy seasoned seafood noodles",
            price: "$125",
            bowls:"50"

        },{
            id: "01",
            img: "dish_one-removebg-preview.png",
            Name: "Nooldes",
            Menu: "Spicy seasoned seafood noodles",
            price: "$125",
            bowls:"50"

        },{
            id: "01",
            img: "dish_one-removebg-preview.png",
            Name: "Nooldes",
            Menu: "Spicy seasoned seafood noodles",
            price: "$125",
            bowls:"50"

        },







    ]
    return (


        <div className="flex gap-5 flex-wrap overflow-y-auto h-100 ">
            {foods.map((order: any) => (
                <div key={order.id} className="w-48 h-[240px] relative bg-customblack mt-20 rounded-md flex">
                    <div className="mt-24 text-center flex flex-col items-center">
                        <div className="absolute rounded-full h-36 w-36 flex mb-[150px] bottom-1">
                            <img src={require(`../../assests/${order.img}`)} alt={order.Menu}/>
                        </div>

                        <div className="mt-5">
                            <div className="text-center flex-1 gap-5">
                                <h1 className="text-white">{order.Menu}</h1>
                            </div>

                            <div className="text-center flex-1 gap-5">
                                <h1 className="text-white">{order.price}</h1>
                            </div>
                        </div>

                        <div className="text-center flex-1 flex justify-end gap-5">
                            <h1 className="text-gray-400">{order.bowls} are available</h1>
                        </div>
                    </div>
                </div>

            ))}
        </div>

    )
}
