import {Fragment, useState} from "react";
import Hot from "../../assests/Hot.png";
import Cold from "../../assests/Cold.png";
import creditCard from '../../assests/atm-card.png'
import payPal from '../../assests/payPal.png'
import cash from '../../assests/money.png'



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


    /*Card Option*/
    const [paymentOption, setPaymentOption] = useState('creditCard');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Implement your payment processing logic here
        console.log('Payment submitted:', { paymentOption, cardNumber, expiryDate, cvc });
    };

    const paymentOptions = [
        { id: 'creditCard', label: 'Credit Card', imageUrl: creditCard },
        { id: 'paypal', label: 'PayPal', imageUrl: payPal },
        { id: 'cash', label: 'Cash', imageUrl: cash },
    ];

    /*Order type*/
    const orderTypeOptions = ["Option 1", "Option 2", "Option 3"]; // Add order type options here
    const [orderType, setOrderType] = useState('');

    return (

        <div className="absolute top-0 right-0 w-7/12 h-full bg-gray-200 flex">

            <div className="flex bg-dishes h-screen w-1/3">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">

                    <div className="flex justify-between">
                        <h1 className="text-white font-bold">Conformation</h1>
                        <button className="h-10 w-16 bg-button rounded-md">+</button>
                    </div>
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
                                                className="flex flex-1 items-end justify-between text-sm ">
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

                            <div>
                                <h1 className="text-white mt-5"> Discount :</h1>
                                <h1 className="text-white mt-5"> Sub total :</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/*Left right*/}
            <div className="flex bg-dishes h-screen w-2/3 flex-wrap text-white">

                <div className="max-w-md mx-auto bg-dishes rounded-md shadow-md w-full ">
                    <h2 className="text-2xl font-bold ">Payment</h2>
                    <h2 className="text-1xl ">3 payment method available</h2>

                    <hr className="mb-5 mt-5"/>
                    {/* Payment Options */}
                    <div className="flex space-x-4 mt-8">
                        {paymentOptions.map((option) => (
                            <div
                                key={option.id}
                                className={`flex items-center p-4 border text-white rounded-md cursor-pointer ${
                                    paymentOption === option.id ? 'bg-button' : ''
                                }`}
                                onClick={() => setPaymentOption(option.id)}
                            >
                                <img src={option.imageUrl} alt={option.label} className="w-8 h-8 mr-2 "/>
                                <label>{option.label}</label>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-bold mt-2">Payment Method</h2>

                        {/* Cardholder Name Input */}
                        <div className="mb-4 mt-5">
                            <label htmlFor="cardholderName" className="block text-sm font-medium  text-white ">
                                Cardholder Name
                            </label>
                            <input
                                type="text"
                                id="cardholderName"
                                className="mt-1 p-2 w-full border rounded-md bg-dishes"
                                placeholder="Enter cardholder name"
                                value={cvc}
                                onChange={(e) => setCvc(e.target.value)}
                                required
                            />
                        </div>

                        {/* Card Number Input */}
                        <div className="mb-4">
                            <label htmlFor="cardNumber" className="block text-sm font-medium  text-white ">
                                Card Number
                            </label>
                            <input
                                type="text"
                                id="cardNumber"
                                className="mt-1 p-2 w-full border rounded-md bg-dishes"
                                placeholder="Enter card number"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                required
                            />
                        </div>

                        {/* First set of Expiry Date and CVC */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="expiryDate" className="block text-sm font-medium text-white flex-grow">
                                    Expiration Date
                                </label>
                                <input
                                    type="text"
                                    id="expiryDate"
                                    className="mt-1 p-2 w-full border rounded-md bg-dishes"
                                    placeholder="MM/YY"
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="cvc" className="block text-sm font-medium text-white">
                                    CVC
                                </label>
                                <input
                                    type="text"
                                    id="cvc"
                                    className="mt-1 p-2 w-full border rounded-md bg-dishes"
                                    placeholder="CVC"
                                    value={cvc}
                                    onChange={(e) => setCvc(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <hr className="mb-5 mt-5"/>

                        {/* Order Type & Table No */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="orderType" className="block text-sm font-medium text-white flex-grow">
                                    Order Type
                                </label>
                                {/* Replace the input with a select dropdown */}
                                <select
                                    id="orderType"
                                    className="mt-1 p-2 w-full border rounded-md bg-dishes"
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
                            <div>
                                <label htmlFor="cvc" className="block text-sm font-medium text-white">
                                    Table no.
                                </label>
                                <input
                                    type="text"
                                    id="cvc"
                                    className="mt-1 p-2 w-full border rounded-md bg-dishes"
                                    placeholder="Table no."
                                    value={cvc}
                                    onChange={(e) => setCvc(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <hr className="mb-5 mt-5"/>

                        {/* Submit Button */}
                        <div className="flex">
                            <button
                                type="submit"
                                className="bg-homeicon text-white p-3 rounded-md hover:bg-blue-600 transition duration-300 mr-5"
                            >
                                Submit Payment
                            </button>
                            <button
                                type="submit"
                                className="bg-homeicon text-white p-3 rounded-md hover:bg-blue-600 transition duration-300"
                            >
                                Submit Payment
                            </button>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );

}
