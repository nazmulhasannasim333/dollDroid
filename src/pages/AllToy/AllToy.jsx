import React from 'react';
import { Link } from 'react-router-dom';

const AllToy = ({toy, index}) => {
    const {img, name, seller_name, seller_email, category, _id, quantity, price, details} = toy;
    return (
        <tr>
        <td>{index + 1}</td>
        <td>
           {seller_name}
        </td>
        <td>
            <div>
              <div className="font-bold">{name}</div>
            </div>
        </td>
        <td>
          <span className="badge badge-ghost badge-sm">{category}</span>
        </td>
        <td>
          <span >{quantity}</span>
        </td>
        <td>
          <span >${price}</span>
        </td>
        <th>
          <Link to={`/allToyDetails/${_id}`}><button className="btn btn-ghost btn-xs bg-indigo-600 text-white">View Details</button></Link>
        </th>
      </tr>
    );
};

export default AllToy;