import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Hot from '../../assests/Hot.png'
import Cold from '../../assests/Cold.png'
import { XMarkIcon } from '@heroicons/react/24/outline'

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
                                    <div
                                        className="flex h-full flex-col overflow-y-hidden bg-oderbar shadow-xl rounded-md">
                                        <div className="flex justify-around">
                                            <h2 className="text-white font-bold  flex-wrap"> Total cost :</h2>
                                            <h2 className="text-white font-bold "> Total items :</h2>
                                        </div>
                                        <div
                                            className="flex justify-center gap-7 text-white items-start flex-wrap h-auto">
                                            <button className="bg-button h-10 w-20 rounded-md">Dine in</button>
                                            <button className="bg-button h-10 w-20 rounded-md">To go</button>
                                            <button className="bg-button h-10 w-20 rounded-md">Delivery</button>
                                        </div>
                                        <hr className="mt-3"/>
                                        <div className="flex text-white justify-between">
                                            <h2 className="flex-wrap ml-5">Item</h2>
                                            <h2 className="flex-wrap ">qty</h2>
                                            <h2 className="flex-wrap mr-20">Price</h2>
                                        </div>
                                        <hr className="mt-3"/>
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
                                                                            >
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

                                        {/* <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>Subtotal</p>
                                                <p>$262.00</p>
                                            </div>
                                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                            <div className="mt-6">
                                                <a
                                                    href="#"
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                >
                                                    Checkout
                                                </a>
                                            </div>
                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <p>
                                                    or{' '}
                                                    <button
                                                        type="button"
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        Continue Shopping
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>*/}
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
