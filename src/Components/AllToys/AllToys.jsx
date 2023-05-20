import React, { useState, useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./AllToys.css";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const AllToys = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteMode, setDeleteMode] = useState(false);
  const { user } = useContext(AuthContext); // Access user
  useTitle("AddToy");
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = (_id) => {
    if (!user) {
      Swal.fire("Please login to perform this action");
      return;
    }

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
        fetch(`https://server-toygem-tigermursa.vercel.app/toys/${_id}`, {
          method: "DELETE",
        })
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

  const handleDeleteModeToggle = () => {
    if (!user) {
      Swal.fire("Please login to perform this action");
      return;
    }

    setDeleteMode(!deleteMode);
    Swal.fire(
      deleteMode
        ? "Delete mode is off now! You can't delete!"
        : "Delete mode is on now! You can delete!"
    );
  };

  return (
    <div className="container mx-auto">
      <div className="mb-4 flex items-center justify-center mt-10">
        <input
          type="text"
          placeholder="Search by toy name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-60"
        />
        <button
          className="bg-blue-950 hover:bg-blue-600 text-white py-3 px-6 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onClick={() => setSearchTerm("")}
        >
          Clear
        </button>
      </div>

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
              <th className="px-4 py-3 text-center text-sm font-medium border-b border-r">
                View Details
              </th>
              <th
                className={`px-4 py-3 text-center text-sm font-medium border-b ${
                  deleteMode ? "block" : "hidden"
                }`}
              >
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
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
                <td className="px-4 py-3 border-b border-r">
                  <div className="flex justify-center">
                    <Link to={`/details/${user._id}`}>
                      <button className="text-white font-bold bg-blue-950 p-2 md:p-3 hover:bg-blue-800 rounded-full">
                        View Details
                      </button>
                    </Link>
                  </div>
                </td>
                <td className="px-4 py-3 border-b">
                  <div className="flex justify-center">
                    {deleteMode && user && (
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="text-white font-bold bg-red-600 p-2 md:p-3 hover:bg-red-800 rounded-full"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center my-5">
        <button
          className={`bg-blue-950 text-white py-2 px-4 rounded mr-2 ${
            deleteMode ? "hidden" : "block"
          }`}
          onClick={handleDeleteModeToggle}
        >
          {user ? "Delete Mode On" : "Login to Enable Delete Mode"}
        </button>
        <button
          className={`bg-blue-950 text-white py-2 px-4 rounded mr-2 ${
            deleteMode ? "block" : "hidden"
          }`}
          onClick={handleDeleteModeToggle}
        >
          {user ? "Delete Mode Off" : "Login to Disable Delete Mode"}
        </button>
        <Link to="/addtoys">
          <button className="bg-blue-950 text-white py-2 px-4 rounded hidden">
            Add a Toy
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllToys;
