import React, { useState } from "react";
import Swal from "sweetalert2";

const AddToys = () => {
  const [ok, setOk] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const user = {
      name,
      img,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };

    form.reset();

    fetch("http://localhost:5000/users", {
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
      <h1 className="font-serif font-semibold text-3xl mt-5 mb-5">
        Add a Toy here
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          {/* Image upload */}
          <div className="mb-4">
            <label htmlFor="img" className="block text-gray-700 font-bold mb-2">
              Image
            </label>
            <input
              type="text"
              id="img"
              className="border border-gray-400 p-2 w-full"
              name="img"
              placeholder="Photo URL link address here"
              required
            />
          </div>
          {/* Food name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Toy Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-400 p-2 w-full"
              name="name"
              placeholder="Your food name"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* Seller name */}
          <div className="mb-4">
            <label
              htmlFor="sellerName"
              className="block text-gray-700 font-bold mb-2"
            >
              Seller Name
            </label>
            <input
              type="text"
              id="sellerName"
              className="border border-gray-400 p-2 w-full"
              name="sellerName"
              placeholder="Seller's name"
              required
            />
          </div>
          {/* Seller email */}
          <div className="mb-4">
            <label
              htmlFor="sellerEmail"
              className="block text-gray-700 font-bold mb-2"
            >
              Seller Email
            </label>
            <input
              type="email"
              id="sellerEmail"
              className="border border-gray-400 p-2 w-full"
              name="sellerEmail"
              placeholder="Seller's email"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* Sub-category */}
          <div className="mb-4">
            <label
              htmlFor="subCategory"
              className="block text-gray-700 font-bold mb-2"
            >
              Sub-category
            </label>
            <input
              type="text"
              id="subCategory"
              className="border border-gray-400 p-2 w-full"
              name="subCategory"
              placeholder="Sub-category"
              required
            />
          </div>
          {/* Price */}
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              className="border border-gray-400 p-2 w-full"
              name="price"
              placeholder="Price"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {" "}
          {/* Rating */}
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-gray-700 font-bold mb-2"
            >
              Rating
            </label>
            <input
              type="number"
              id="rating"
              className="border border-gray-400 p-2 w-full"
              name="rating"
              placeholder="Rating"
              required
            />
          </div>
          {/* Available quantity */}
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-bold mb-2"
            >
              Available Quantity
            </label>
            <input
              type="number"
              id="quantity"
              className="border border-gray-400 p-2 w-full"
              name="quantity"
              placeholder="Available Quantity"
              required
            />
          </div>
        </div>
        {/* Detail description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Detail Description
          </label>
          <textarea
            id="description"
            className="border border-gray-400 p-2 w-full"
            name="description"
            placeholder="Detail Description"
            required
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

export default AddToys;
