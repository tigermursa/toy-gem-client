import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./FoodGetDel.css";
import Swal from "sweetalert2";
import { FaPenAlt, FaRegTrashAlt } from "react-icons/fa";
const FoodGetDel = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  console.log(users);
  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:3000/users/${_id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = users.filter((user) => user._id !== _id);
              setUsers(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3 text-center text-sm font-medium border-b border-r">
              Image
            </th>
            <th className="px-6 py-3 text-center text-sm font-medium border-b border-r">
              Name
            </th>
            <th className="px-6 py-3 text-center text-sm font-medium border-b border-r">
              Country
            </th>
            <th className="px-6 py-3 text-center text-sm font-medium border-b border-r">
              Edit
            </th>
            <th className="px-6 py-3 text-center text-sm font-medium border-b">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="px-6 py-4 border-b border-r">
                <img
                  className="w-16 h-16 m-auto rounded-md"
                  src={user.img}
                  alt=""
                />
              </td>
              <td className="px-6 py-4 border-b  border-r">{user.name}</td>
              <td className="px-6 py-4 border-b border-r">{user.country}</td>
              <td className="px-6 py-4 border-b border-r">
                <div>
                  <Link to={`/update/${user._id}`}>
                    <button className="mr-2">
                      <FaPenAlt />
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
      <div>
        <Link to="/add">
          <button className="bg-red-500 text-white py-2 px-4 rounded mt-6">
            Add a new Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodGetDel;
// old
