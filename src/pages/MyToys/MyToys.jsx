/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";
import MyToy from "../MyToy/MyToy";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);
  const [sortOrder, setSortOrder] = useState('');
  useTitle("My Toys")

  useEffect(() => {
    fetch(`https://assignment-eleven-server-alpha.vercel.app/myToys?email=${user?.email}&&sort=${sortOrder}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user, sortOrder]);


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-eleven-server-alpha.vercel.app/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
            const remaining = myToys.filter((post) => post._id !== id);
            setMyToys(remaining);
          });
      }
    });
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="bg-slate-900 py-10 text-white">
      <div className="max-w-6xl mx-auto py-24">
        <h3 className="text-center mb-2 text-4xl font-semibold">My Toys</h3>
        <p className="text-center mb-8">
          This is my all toys products that's product i added
        </p>
        <div className="my-5 text-black">
         <span className="text-white font-semibold text-md"> Sort By: </span>
        <select
            value={sortOrder}
            onChange={handleSortOrderChange}
            className="select select-primary  max-w-xs"
          >
            <option  value="" disabled>Best Match</option>
            <option value="lowest">Price(Low to high)</option>
            <option value="highest">Price(High to low)</option>
          </select>
        </div>
        <div className="overflow-x-auto w-full text-black">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Toy Name</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((toy, i) => (
                <MyToy
                  key={toy._id}
                  toy={toy}
                  index={i}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
