/* eslint-disable no-const-assign */
import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
  const loadedDoll = useLoaderData();
  useTitle("Update Toy")
  const {img, name, seller_name, seller_email, rating, _id, quantity, price, details} = loadedDoll;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.price = parseInt(data.price)
    console.log(data);
   fetch(`https://assignment-eleven-server-alpha.vercel.app/myToys/${_id}`, {
    method: "PUT",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(data)
   })
   .then(res => res.json())
   .then(data => {
    console.log(data);
    if(data.modifiedCount > 0){
        Swal.fire({
            title: "Success!",
            text: "Your toy has been updated",
            icon: "success",
            confirmButtonText: "Ok",
          });
    }
   })
  };

  return (
    <div className="bg-slate-900 pb-20 pt-10 text-white">
      <div className="max-w-6xl lg:mx-auto mx-4 mt-14">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid lg:grid-cols-2 gap-6">
            
            <div className="pt-5">
              <label className="text-white" htmlFor="text">
                Toy Name
              </label>
              <input
              defaultValue={name}
                className=" w-full text-black p-2 lg:p-3 rounded-md focus:outline-none"
                {...register("name")}
              />
            </div>
            <div className="pt-5">
              <label className="text-white" htmlFor="text">
                Toy Photo URL
              </label>
              <input
              defaultValue={img}
                className=" w-full text-black p-2 lg:p-3 rounded-md focus:outline-none"
                {...register("img")}
              />
            </div>
            <div className="pt-5">
              <label className="text-white" htmlFor="text">
                Price
              </label>
              <input
              
              defaultValue={price}
                className=" w-full text-black p-2 lg:p-3 rounded-md focus:outline-none"
                {...register("price")}
              />
            </div>
            <div className="pt-5">
              <label className="text-white" htmlFor="text">
                Quantity
              </label>
              <input
              defaultValue={quantity}
                className=" w-full text-black p-2 lg:p-3 rounded-md focus:outline-none"
                {...register("quantity")}
              />
            </div>
          </div>
          <div className="pb-8 pt-5">
            <label className="text-white" htmlFor="text">
              Details
            </label>
            <input
            defaultValue={details}
              className=" w-full text-black pb-10 lg:pb-20 bg-slate-100 rounded-md focus:outline-none"
              {...register("details")}
            />
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update Toy
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
