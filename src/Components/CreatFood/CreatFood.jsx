import React, { useState } from "react";
import Swal from "sweetalert2";
const CreatFood = () => {
  const [ok, setOk] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const img = form.img.value;
    const user = { name, country, img };
    console.log(user);
    form.reset();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          setOk("Users added successfully");
          Swal.fire({
            title: "Success!",
            text: "Food Added to the Data Base",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="p-4">
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
            placeholder="photo url link address here "
          />
        </div>
        {/* Food name */}
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
            placeholder="Your food name "
          />
        </div>
        {/* Country Food */}
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
            placeholder="food country  "
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatFood;
