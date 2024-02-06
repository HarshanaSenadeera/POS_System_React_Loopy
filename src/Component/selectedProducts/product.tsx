import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Hot from '../../assests/Hot.png'
import Cold from '../../assests/Cold.png'
import { XMarkIcon } from '@heroicons/react/24/outline'
import SelectBarTop from "../selectBarTop/SelectBarTop";

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

export default function SelectProducts() {
    const [open, setOpen] = useState(true)


    /*load all products list*/
    const [openSelectProducts, setOpenSelectProducts] = useState(false);

    const handleButtonClick = () => {
        setOpenSelectProducts(true);
    };


    return (

        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10 " onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0   transition-opacity " />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden ">
                    <div className="absolute inset-0 overflow-hidden ">

                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 ">

                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >

                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md ">
                                    <div className="flex h-full flex-col overflow-y-hidden bg-oderbar shadow-xl rounded-md">

                                        <SelectBarTop/>

                                        <hr className="mt-3"/>
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
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
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="text-white font-bold flex-shrink flex flex-col items-start flex-wrap ml-5 mb-3">
                                            <h1>Discount</h1>
                                            <h1>Service Charge</h1>
                                            <h1>Sub total</h1>
                                        </div>
                                        <div
                                            className="flex justify-center flex-wrap flex-shrink flex-col align-bottom mb-5">
                                            <button
                                                className="bg-button w-auto h-10 rounded-md items-center justify-center flex text-white">Continue
                                                to payment
                                            </button>
                                        </div>


                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
