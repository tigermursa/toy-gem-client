import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const MyToys = () => {
  useTitle("MyToys");
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [sortByPrice, setSortByPrice] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${_id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = users.filter((user) => user._id !== _id);
              setUsers(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleSortByPrice = () => {
    if (sortByPrice === "asc") {
      const sortedUsers = [...users].sort((a, b) => a.price - b.price);
      setUsers(sortedUsers);
      setSortByPrice("desc");
    } else {
      const sortedUsers = [...users].sort((a, b) => b.price - a.price);
      setUsers(sortedUsers);
      setSortByPrice("asc");
    }
  };

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 mt-5 ">
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
              <th className="px-4 py-3 text-center text-sm font-medium border-b border-r ">
                View Details
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium border-b ">
                Delete
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
                <td className="px-6 py-4 border-b border-r">
                  <div>
                    <Link to={`/update/${user._id}`}>
                      <button className="mr-2">
                        <FaEdit />
                      </button>
                    </Link>
                  </div>
                </td>
                <td className="px-6 py-4 border-b">
                  <div>
                    <button onClick={() => handleDelete(user._id)}>
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mb-96">
        <Link to="/addtoys">
          <button className="bg-blue-950 text-white py-2 px-4 rounded mt-6">
            Add a Toy
          </button>
        </Link>
        <button className=" bg-blue-950 text-white py-2 px-4 rounded ml-2 focus:outline-none" onClick={handleSortByPrice}>Sort by price 
          {sortByPrice === "asc" ? "▲" : "▼"}
        </button>
      </div>
    </div>
  );
};

export default MyToys;
