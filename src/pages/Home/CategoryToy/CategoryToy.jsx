import React, { useContext } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';

const CategoryToy = ({categoryToy}) => {
    const {img, name, price, rating, _id} = categoryToy;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleNavigate = (id) => {
        if(!user){
            Swal.fire({
                title: 'Please Login!',
                text: 'You have to log in first to view details',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            navigate("/login")
        }
        else{
            navigate(`details/${id}`)
        }
    }


    return (
        <div>
       <div  style={{height: "530px"}} className=" px-2 lg:px-5 py-5 lg:py-2 shadow-lg rounded-lg text-white bg-slate-800">
      <img className="h-64 w-full rounded-md" src={img} />
      <h4 className="text-xl font-semibold ">{name}</h4>
      <div className=" pt-6 ">
        <p className='items-center font-extrabold text-gray-300 '>
            Price: ${price}
        </p>
        <br />
        <p className="items-center font-extrabold text-gray-600 ">
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
      </div>
      <button onClick={() => handleNavigate(_id)} className="py-2 px-4 border rounded-3xl text-white btn-outline my-5">
        View details
      </button>
    </div>
    </div>
    );
};

export default CategoryToy;