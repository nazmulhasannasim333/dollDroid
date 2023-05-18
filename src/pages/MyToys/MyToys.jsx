/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import MyToy from '../MyToy/MyToy';

const MyToys = () => {

    const [myToys, setMyToys] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(()=> {
        fetch(`http://localhost:5300/myToys?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
           setMyToys(data);
        })
    },[user])
    const handleToyUpdate = (data) => {
        console.log(data);
    }

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
            fetch(`http://localhost:5300/allToys/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  Swal.fire("Deleted!", "Your toy has been deleted.", "success");
                }
                const remaining = myToys.filter(post => post._id !== id)
                setMyToys(remaining)
              });
          }
        });
      };

    return (
        <div className='bg-slate-900 py-10 text-white'>
            
        <div className="max-w-6xl mx-auto py-24">
        <h3 className="text-center mb-2 text-4xl font-semibold">My Toys</h3>
        <p className="text-center mb-8">This is my all toys products that's product i added</p>
        
        <div className="overflow-x-auto w-full text-black">
        <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Toy Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((toy, i) => (
                <MyToy key={toy._id} toy={toy} index={i} handleDelete={handleDelete} handleToyUpdate={handleToyUpdate} />
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    );
};

export default MyToys;