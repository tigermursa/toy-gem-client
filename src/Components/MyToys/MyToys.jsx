import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../Provider/AuthProvider";

const MyToys = () => {
  useTitle("MyToys");
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch(`http://localhost:5000/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [user]);

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 mt-5">
          <thead>
            <tr>
              <th className="px-4 py-3 text-center text-sm font-medium border-b border-r">
                Image
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium border-b border-r">
                Seller
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium border-b border-r">
                Toy Name
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium border-b border-r">
                Sub-category
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium border-b border-r">
                Price
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium border-b border-r">
                Available Quantity
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium border-b">
                View Details
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="px-4 py-3 border-b border-r">
                  <img
                    className="w-12 h-12 mx-auto rounded-md"
                    src={user.img}
                    alt=""
                  />
                </td>
                <td className="px-4 py-3 border-b border-r">
                  {user.sellerName}
                </td>
                <td className="px-4 py-3 border-b border-r">{user.name}</td>
                <td className="px-4 py-3 border-b border-r">
                  {user.subCategory}
                </td>
                <td className="px-4 py-3 border-b border-r">{user.price}</td>
                <td className="px-4 py-3 border-b border-r">{user.quantity}</td>
                <td className="px-4 py-3 border-b">
                  <div className="flex justify-center">
                    <Link to={`/details/${user._id}`}>
                      <button className="text-white font-bold bg-blue-950 p-2 md:p-3 hover:bg-blue-800 rounded-full">
                        View Details
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mb-5">
        <Link to="/addtoys">
          <button className="bg-blue-950 text-white py-2 px-4 rounded mt-6">
            Add a Toy
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyToys;
