import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const AllToyDetails = () => {
  const loadedDoll = useLoaderData()
  const {img, name, seller_name, seller_email, rating, _id, quantity, price, details} = loadedDoll;
  
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
                <p className="items-center font-extrabold text-gray-600 mt-5">
          <Rating
            className="pe-2"
            readonly
            placeholderRating={rating}
            emptySymbol={<FaRegStar className="text-yellow-400 h-4 w-4" />}
            placeholderSymbol={<FaStar className="text-yellow-400 h-4 w-4" />}
            fullSymbol={<FaStar className="text-yellow-400 h-4 w-4" />}
          />
          {rating}
        </p>
                <div className='mt-10'>
                <p className='text-xl font-semibold'>Seller Name: <span className='text-xl font-bold'>{seller_name}</span></p>
                <p className="text-xl mt-2">Seller Email: {seller_email}</p>
                </div>
               </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default AllToyDetails;