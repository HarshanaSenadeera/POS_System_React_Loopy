import {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import Hot from "../../assests/Hot.png";
import Cold from "../../assests/Cold.png";


const products = [
    {
        id: 1,
        name: 'Anzac biscuit tarts',
        href: '#',
        price: '$90.00',
        quantity: 1,
        imageSrc: Hot,
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 1,
        name: 'Anzac biscuit tarts',
        href: '#',
        price: '$90.00',
        quantity: 1,
        imageSrc: Cold,
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 1,
        name: 'Anzac biscuit tarts',
        href: '#',
        price: '$90.00',
        quantity: 1,
        imageSrc: Hot,
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 1,
        name: 'Anzac biscuit tarts',
        href: '#',
        price: '$90.00',
        quantity: 1,
        imageSrc: Hot,
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Anzac biscuit tarts',
        href: '#',
        price: '$32.00',
        quantity: 1,
        imageSrc: Cold,
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    {
        id: 2,
        name: 'Anzac biscuit tarts',
        href: '#',
        price: '$32.00',
        quantity: 1,
        imageSrc: Hot,
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    {
        id: 2,
        name: 'Anzac biscuit tarts',
        href: '#',
        price: '$32.00',
        quantity: 1,
        imageSrc: Cold,
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
]
export default function Conformation() {

    const [open, setOpen] = useState(true)


    /*/!*load all products list*!/
    const [openSelectProducts, setOpenSelectProducts] = useState(false);

    const handleButtonClick = () => {
        setOpenSelectProducts(true);
    };*/
    return (

        <div className="absolute top-0 right-0 w-5/12 h-full bg-gray-200 flex">

            <div className="flex bg-dishes h-screen w-1/2">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">

                    {/*<div className="flex items-start justify-between mb-5">

                                                 <Dialog.Title className="text-lg font-medium  text-white">Total
                                                    cost</Dialog.Title>
                                                <Dialog.Title className="text-lg font-medium text-white">Total
                                                    items</Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={() => setOpen(false)}
                                                    >

                                                        <span className="absolute -inset-0.5"/>
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                                    </button>
                                                </div>

                                            </div>*/}

                    {/*<div className="flex justify-center gap-7 text-white items-start flex-wrap">
                                                <button className="bg-button h-10 w-20 rounded-md">Dine in</button>
                                                <button className="bg-button h-10 w-20 rounded-md">To go</button>
                                                <button className="bg-button h-10 w-20 rounded-md">Delivery</button>
                                            </div>
*/}


                    <div className="mt-8">
                        <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {products.map((product) => (
                                    <li key={product.id} className="flex py-6">
                                        <div
                                            className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div
                                                    className="flex justify-between text-base font-medium text-white">
                                                    <h3>
                                                        <a href={product.href}>{product.name}</a>
                                                    </h3>
                                                    <p className="ml-4">{product.price}</p>
                                                </div>
                                                {/* <p className="mt-1 text-sm text-white">{product.color}</p>*/}
                                            </div>
                                            <div
                                                className="flex flex-1 items-end justify-between text-sm te">
                                                <p className="text-white">Qty {product.quantity}</p>

                                                <div className="flex">
                                                    <button
                                                        type="button"
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                        /*onClick={() => handleRemoveButtonClick(product.id)
                                                        }*/>
                                                        Remove
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-5">
                                <h1 className="text-white"> Discount</h1>
                                <h1 className="text-white"> Sub total</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex bg-red-700 h-screen w-1/2">

            </div>
        </div>
    );

}
