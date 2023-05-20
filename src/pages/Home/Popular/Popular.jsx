import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const Popular = () => {
  const [populars, setpopulars] = useState([]);

  useEffect(() => {
    fetch("popular.json")
      .then((res) => res.json())
      .then((data) => setpopulars(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div style={{boxShadow: "rgba(99, 99, 99, 0.1) 0px 2px 8px 0px"}} className="bg-slate-800 pt-10 pb-2 rounded-xl">
      <div className="flex items-center">
          <img
            className="h-6 w-6 ms-3"
            src="https://i.ibb.co/Wc8bCfH/popular.png"
            alt=""
          />
          <h2 className="text-2xl ms-3 font-semibold text-white">
            {" "}
            Popular Products
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 gap-4 mx-5 lg:my-4">
          {populars.map((popular, i) => (
            <div key={i} className="bg-slate-900 py-2 text-white rounded-xl cursor-pointer">
              <div className="px-3 py-2">
                <img className="h-52 w-full rounded-md" src={popular.img} alt="" />
                <h3 className="text-xl font-semibold py-4">
                  {popular.title.slice(0, 30)}...
                </h3>
                <p className="text-xl font-semibold">${popular.new_price}</p>
                <div className="flex gap-3">
                <p
                  style={{ textDecoration: "line-through" }}
                  className="text-md text-slate-500 pb-4"
                >
                  ${popular.old_price}
                </p>
                <span className="text-slate-300">{popular.percentage}</span>
                </div>
                <p className="flex items-center font-extrabold text-gray-600 pb-2">
          <Rating
            className="pe-2"
            readonly
            placeholderRating={popular.rating}
            emptySymbol={<FaRegStar className="text-yellow-400 h-4 w-4" />}
            placeholderSymbol={<FaStar className="text-yellow-400 h-4 w-4" />}
            fullSymbol={<FaStar className="text-yellow-400 h-4 w-4" />}
          />
          <span className="text-slate-400">({popular.person})</span>
        </p>
                <p></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
