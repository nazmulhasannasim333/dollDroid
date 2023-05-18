// import React from "react";
// import { useForm } from "react-hook-form";

// const UpdateModal = ({toy, handleToyUpdate}) => {
    
//     const {img, name, seller_name, seller_email, category, _id, quantity, price, details} = toy;
   

//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//       } = useForm();
     


//   return (
//     <>
//      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
     
//      <div className="modal">
//             <div className="modal-box bg-white">
//               <h3 className="font-bold text-lg text-black">
//                 Update Your Toy
//               </h3>
//               <form onSubmit={handleSubmit(handleToyUpdate)}>
//           <div className="rounded-md shadow-sm -space-y-px">
//           <input
//               defaultValue={_id}
//                 className=""
//                 {...register("_id")}
//               />
//           <div className="pt-5">
//               <label className="text-black" htmlFor="text">
//                 Price
//               </label>
//               <br />
//               <input
//               defaultValue={price}
//                 className=" w-full text-slate-700 p-2 lg:p-3 border rounded-md focus:outline-none"
//                 {...register("price")}
//               />
//             </div>
//           <div className="pt-5">
//               <label className="text-black" htmlFor="text">
//                 Quantity
//               </label>
//               <br />
//               <input
//               defaultValue={quantity}
//                 className=" w-full text-slate-700 p-2 lg:p-3 border rounded-md focus:outline-none"
//                 {...register("quantity")}
//               />
//             </div>
//             <div className="pb-8 pt-5">
//             <label className="text-black" htmlFor="text">
//               Details
//             </label>
//             <br />
//             <input
//             defaultValue={details}
//               className=" w-full text-slate-700 pb-10 lg:pb-20 bg-slate-100 rounded-md focus:outline-none"
//               {...register("details")}
//             />
//           </div>
//           </div>
//           <button
//             type="submit"
//             className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//           >
//            Svae Change
//           </button>
//         </form>
//         <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//             </div>
//           </div>
        
//     </>
//   );
// };

// export default UpdateModal;
