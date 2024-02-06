import React, {useState} from "react";
import { CiEdit } from "react-icons/ci";
import Hot from "../../assests/Hot.png";
export default function EditableDish() {
    const dishes=[

        {
            id: 1,
            name: 'Nooldes',
            href: '#',
            price: '$90.00',
            quantity: 1,
            imageSrc: Hot,
            imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        },

        {
            id: 2,
            name: 'Rice',
            href: '#',
            price: '$30.00',
            quantity: 5,
            imageSrc: Hot,
            imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        },
        {
            id: 2,
            name: 'Kottu',
            href: '#',
            price: '$500.00',
            quantity: 5,
            imageSrc: Hot,
            imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        },
        {
            id: 2,
            name: 'Meals',
            href: '#',
            price: '$30.00',
            quantity: 5,
            imageSrc: Hot,
            imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        },
        {
            id: 2,
            name: 'Meals',
            href: '#',
            price: '$30.00',
            quantity: 5,
            imageSrc: Hot,
            imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        },
        {
            id: 2,
            name: 'Meals',
            href: '#',
            price: '$30.00',
            quantity: 5,
            imageSrc: Hot,
            imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        },
        {
            id: 2,
            name: 'Meals',
            href: '#',
            price: '$30.00',
            quantity: 5,
            imageSrc: Hot,
            imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        },
        {
            id: 2,
            name: 'Meals',
            href: '#',
            price: '$30.00',
            quantity: 5,
            imageSrc: Hot,
            imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        },
        {
            id: 2,
            name: 'Meals',
            href: '#',
            price: '$30.00',
            quantity: 5,
            imageSrc: Hot,
            imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        },
        {
            id: 2,
            name: 'Meals',
            href: '#',
            price: '$30.00',
            quantity: 5,
            imageSrc: Hot,
            imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        },

    ]

    return (

        <div className="flex mt-5 gap-5 flex-wrap  ">
            {dishes.map((dish, index) => (
                <div key={index}
                     className="w-44 h-60 bg-customblack border-2 border-gray-500 rounded-md flex flex-col items-center justify-between ">
                    {/* Dish Image */}
                    <div className="rounded-full bg-white w-24 h-24 mt-5">
                        <img src={dish.imageSrc} alt={dish.name}/>
                    </div>

                    {/* Details */}
                    <div className="flex gap-5 ">
                        <h1 className="text-white">{dish.name}</h1>
                    </div>

                    <div className="flex gap-5 ">
                        <h1 className="text-white">{dish.price}</h1>
                        <h1 className="text-white">{dish.quantity}</h1>
                    </div>

                    {/* Edit button */}
                    <div className="flex items-end w-full text-button justify-center font-bold opacity-70">
                        <button className="w-full h-10 bg-editbutton flex items-center justify-center">
                            <CiEdit/> Edit Dish
                        </button>
                    </div>
                </div>
            ))}
        </div>


    );
}
