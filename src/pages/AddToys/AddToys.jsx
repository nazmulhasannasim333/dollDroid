import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  useTitle("Add Toy")

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.price = parseFloat(data.price)
    console.log(data);
    fetch(`https://assignment-eleven-server-alpha.vercel.app/toys`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your toy has been added successful",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="bg-slate-900 pb-20 pt-10 text-white">
      <div className="max-w-6xl lg:mx-auto mx-4 mt-14">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="pt-5">
              <label className="text-white" htmlFor="text">
                Seller Name
              </label>
              <input
                defaultValue={user && user?.displayName}
                className="w-full text-black p-2 lg:p-3 rounded-md focus:outline-none"
                {...register("seller_name")}
              />
            </div>
            <div className="pt-5">
              <label className="text-white" htmlFor="email-address">
                Seller Email
              </label>
              <input
                defaultValue={user && user?.email}
                readOnly
                className=" w-full text-black p-2 lg:p-3 rounded-md focus:outline-none"
                {...register("seller_email")}
              />
            </div>
            <div className="pt-5">
              <label className="text-white" htmlFor="text">
                Toy Name
              </label>
              <input
                className=" w-full text-black p-2 lg:p-3 rounded-md focus:outline-none"
                {...register("name")}
              />
            </div>
            <div className="pt-5">
              <label className="text-white" htmlFor="text">
                Toy Photo URL
              </label>
              <input
                className=" w-full text-black p-2 lg:p-3 rounded-md focus:outline-none"
                {...register("img")}
              />
            </div>
            <div className="pt-5">
              <label className="text-white" htmlFor="text">
                Select Category
              </label>
              <select
                className=" w-full text-black p-2 lg:p-3 rounded-md focus:outline-none"
                {...register("category")}
              >
                <option value="Baby dolls">Baby Doll</option>
                <option value="Barbie">Barbie</option>
                <option value="American girl">American Girl</option>
              </select>
            </div>
            <div className="pt-5">
              <label className="text-white" htmlFor="text">
                Price
              </label>
              <input
                className=" w-full text-black p-2 lg:p-3 rounded-md focus:outline-none"
                {...register("price")}
              />
            </div>
            <div className="pt-5">
              <label className="text-white" htmlFor="text">
                Rating
              </label>
              <input
                className=" w-full text-black p-2 lg:p-3 rounded-md focus:outline-none"
                {...register("rating")}
              />
            </div>
            <div className="pt-5">
              <label className="text-white" htmlFor="text">
                Quantity
              </label>
              <input
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
              className=" w-full text-black pb-10 lg:pb-20 bg-slate-100 rounded-md focus:outline-none"
              {...register("details")}
            />
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Toy
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
