export default function SelectBarTop() {

    return(

        <div className="flex h-auto flex-col overflow-y-hidden bg-oderbar shadow-xl rounded-md">
            <div className="flex justify-around">
                <h2 className="text-white font-bold  flex-wrap"> Total cost :</h2>
                <h2 className="text-white font-bold "> Total items :</h2>
            </div>
            <div
                className="flex justify-center gap-7 text-white items-start flex-wrap h-auto">
                <button className="bg-button h-10 w-20 rounded-md">Dine in</button>
                <button className="bg-button h-10 w-20 rounded-md">Take Away</button>
                <button className="bg-button h-10 w-20 rounded-md">Delivery</button>
            </div>
            <hr className="mt-3"/>
            <div className="flex text-white justify-between">
                <h2 className="flex-wrap ml-5">Item</h2>
                <h2 className="flex-wrap ">qty</h2>
                <h2 className="flex-wrap mr-20">Price</h2>
            </div>
        </div>
    );
}
