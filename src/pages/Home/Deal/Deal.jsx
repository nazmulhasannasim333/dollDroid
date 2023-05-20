import React, { useEffect, useState } from "react";
import Popular from "../Popular/Popular";
import Trending from "../Trending/Trending";

const Deal = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch("deal.json")
      .then((res) => res.json())
      .then((data) => setDeals(data));
  }, []);

  return (
    <>
     <div className="line w-full h-[1px] absolute left-0 opacity-20 md-[6px] bg-[#6b6b6b]"></div>
     <div className="bg-[#0d1422fd] py-20 ">
      <div className="max-w-6xl mx-auto mt-4">
        <div className="bg-gradient-to-r from-blue-500 to-rose-400  pb-2 rounded-xl">
          <div className="flex items-center ms-4">
            <img
              className="h-24 "
              src="https://i.ibb.co/q7XL6S4/bd7d55b7-6244-43a9-93c8-b85dfdd7189e.png"
              alt=""
            />
            <img
              className="h-24"
              src="https://i.ibb.co/whLknW1/1accd643-c267-45ce-8cf5-0a3f530cc43b.png"
              alt=""
            />
          </div>
          <div className="grid lg:grid-cols-5 gap-4 mx-5 lg:my-4">
            {deals.map((deal, i) => (
              <div key={i} className="bg-slate-700 py-2 text-white rounded-xl overflow-hidden cursor-pointer">
                  <div className="px-3 py-2">
                    <img className="rounded h-44 w-full" src={deal.img} alt="" />
                    <h3 className="text-xl font-semibold py-3">
                      {deal.title.slice(0, 20)}...
                    </h3>
                    <p
                      style={{ textDecoration: "line-through" }}
                      className="text-md text-red-500"
                    >
                      ${deal.old_price}
                    </p>
                    <p className="text-lg  font-semibold">${deal.new_price}</p>
                   <p className="me-6"> <progress className="progress progress-success bg-green-100" value={deal.stock} max="100"></progress>
                   </p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    <Trending />
    <Popular />
    </div>
    </>
    
  );
};

export default Deal;
