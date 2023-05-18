import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
  const loadedDoll = useLoaderData()
  console.log(loadedDoll);
  const {img, name, seller_name, seller_email, _id, quantity, price, details} = loadedDoll;
  
    return (
        <div className='bg-slate-900 py-10'>
            <div className="max-w-6xl mx-auto my-24">
        <div className=" overflow-hidden  bg-white border rounded shadow-sm p-10">
          <div className="flex flex-col pt-5  lg:flex-row sm:mx-auto">
            <div className=" lg:w-1/2 h-full px-2">
              <img
                src={img}
                alt="Product"
                className="object-cover w-full lg:h-full"
              />
            </div>
            <div className=" px-8 bg-white lg:px-20 lg:w-1/2">
                 <p className="font-bold text-3xl text-gray-700 mt-5">{name}</p>
                <p className=" text-gray-800 text-xl mt-8 font-semibold">Details:
                <br />
                <span className=" text-gray-600 text-xl mt-8 font-normal">{details}</span>
                </p>
                <p className="text-xl mt-8">Price: ${price}</p>
                <p className="text-xl mt-2">Quantity: {quantity}</p>
               </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Details;