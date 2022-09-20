import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    
    let price = 0;
    let shipping = 0;
    // for(const product of cart){
    //     price = price + product.price;
    // }
    cart.map(product => {
        price = price + product.price;
        shipping = shipping + product.shipping;
    });
    const tax = price * 10 / 100;
    const total = price + shipping + tax;

    return (
        <div className='sticky top-[100px]'>
            <h1 className='text-xl text-center mt-10 lg:p-0 p-2 font-bold'>Order Summary</h1>
            <div className='mt-6'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${price}</p>
                <p>Total Shipping: ${shipping}</p>
                <p>Tax: {tax}</p>
                <h5 className='font-bold text-md'>Grand Total: ${total}</h5>
            </div>
            <button className='bg-[#FF3030] w-full py-1 text-white rounded mt-4'>Clear Cart <i className="fa-solid fa-trash-can"></i></button>
            <button className='bg-[#FF9900] w-full py-1 text-white rounded mt-4'>Review Order <i className="fa-solid fa-arrow-right"></i></button>
        </div>
    );
};

export default Cart;