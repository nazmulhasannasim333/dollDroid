import React, { useEffect, useState } from "react";
import AllToy from "../AllToy/AllToy";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [seachText, setsearchText] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5300/allToys`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);

  const handleSearchText = () => {
    fetch(`http://localhost:5300/getToyBySearch/${seachText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchText();
    }
  };

  return (
    <div className="bg-slate-900 pt-2 pb-14 text-white">
      <div className="max-w-7xl lg:mx-auto mx-4 mt-14">
        <div className="text-center pt-14 pb-8">
          <h3 className="font-semibold text-4xl pb-4">
            Find the best toy you want to need
          </h3>
        </div>

        <div className="flex items-center pb-14 lg:ms-64 lg:w-2/3 w-full">
          <input
            onChange={(e) => setsearchText(e.target.value)}
            onKeyDown={handleKeyPress}
            type="text"
            className="w-3/4 text-black p-2 lg:p-3 rounded-l-md focus:outline-none"
            placeholder="Search your need"
          />

          <button
            onClick={handleSearchText}
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 lg:px-5 lg:py-3 rounded-r-md hover:opacity-90"
          >
            Search
          </button>
        </div>

        <div className="text-center pb-5">
          <h3 className="font-semibold text-2xl text-indigo-500 pb-4">
            Total Toys: {allToys.length}
          </h3>
        </div>
        <div className="overflow-x-auto w-full text-black">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {allToys.map((toy, i) => (
                <AllToy key={toy._id} toy={toy} index={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
