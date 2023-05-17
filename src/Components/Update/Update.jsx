import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
const Update = () => {
  const theLoadedUsers = useLoaderData();
  console.log(theLoadedUsers);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const img = form.img.value;
    const user = { name, country, img };
    console.log(user);
    fetch(`http://localhost:3000/users/${theLoadedUsers._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Food Updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Create Food</h1>
        <form onSubmit={handleSubmit}>
          {/* Image upload */}
          <div className="mb-4">
            <label
              htmlFor="foodName"
              className="block text-gray-700 font-bold mb-2"
            >
              Image
            </label>
            <input
              type="text"
              id="foodName"
              className="border border-gray-400 p-2 w-full"
              name="img"
            
              defaultValue={theLoadedUsers?.img}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="foodName"
              className="block text-gray-700 font-bold mb-2"
            >
              Food Name
            </label>
            <input
              type="text"
              id="foodName"
              className="border border-gray-400 p-2 w-full"
              name="name"
              defaultValue={theLoadedUsers?.name}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-gray-700 font-bold mb-2"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              className="border border-gray-400 p-2 w-full"
              name="country"
              defaultValue={theLoadedUsers?.country}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
