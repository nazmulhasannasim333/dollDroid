import React, { useEffect, useState } from "react";
import { FaFire, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const Trending = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    fetch("trending.json")
      .then((res) => res.json())
      .then((data) => setTrendings(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div
        style={{ boxShadow: "rgba(99, 99, 99, 0.1) 0px 2px 8px 0px" }}
        className="bg-slate-800 pt-10 pb-2 rounded-xl"
      >
        <div className="flex items-center">
          <FaFire className="text-orange-600 text-2xl ms-3" />
          <h2 className="text-2xl ms-2 text-white font-semibold">
            {" "}
            Trending Now
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 gap-4 mx-5 lg:my-4">
          {trendings.map((trending, i) => (
            <div key={i} className="bg-slate-900 py-2 text-white rounded-xl cursor-pointer">
                <div className="px-3 py-2">
                  <img
                    className="h-52 w-full rounded-md"
                    src={trending.img}
                    alt=""
                  />
                  <h3 className="text-xl font-semibold py-4">
                    {trending.title.slice(0, 30)}...
                  </h3>
                  <p className="items-center font-extrabold text-gray-600 pb-4">
                    <Rating
                      className="pe-2"
                      readonly
                      placeholderRating={trending.rating}
                      emptySymbol={
                        <FaRegStar className="text-yellow-400 h-4 w-4" />
                      }
                      placeholderSymbol={
                        <FaStar className="text-yellow-400 h-4 w-4" />
                      }
                      fullSymbol={
                        <FaStar className="text-yellow-400 h-4 w-4" />
                      }
                    />
                    <span className="text-slate-400">({trending.person})</span>
                  </p>
                  <div className="flex gap-3">
                    <p
                      style={{ textDecoration: "line-through" }}
                      className="text-md text-slate-500 "
                    >
                      ${trending.old_price}
                    </p>
                    <span className="text-slate-300">
                      {trending.percentage}
                    </span>
                  </div>
                  <p className="text-xl pb-4 font-semibold">
                    ${trending.new_price}
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

export default Trending;
