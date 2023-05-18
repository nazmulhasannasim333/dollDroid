
const MyToy = ({toy, index, handleDelete}) => {
    const {img, name, seller_name, seller_email, category, _id, quantity, price, details} = toy;
    return (
        <tr>
        <td>{index + 1}</td>
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
          <button className="btn btn-ghost btn-xs bg-indigo-600 text-white">update</button>
          
        </th>
        <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs bg-red-600 text-white">delete</button>
          
        </th>
      </tr>
    );
};

export default MyToy;