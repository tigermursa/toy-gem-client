import React, { useState } from "react";
import Swal from "sweetalert2";

import { useLoaderData } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import useTitle from "../../Hooks/useTitle";

const options = [
  { value: "Avengers", label: "Avengers" },
  { value: "Transformer", label: "Transformer" },
  { value: "Justice League", label: "Justice League" },
];
const Update = () => {
  const theLoadedUsers = useLoaderData();
  console.log(theLoadedUsers);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = selectedOption.value;
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

    fetch(`https://server-toygem-tigermursa.vercel.app/toys/${theLoadedUsers._id}`, {
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
            text: "Toy updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  useTitle("Update");
  return (
    <div className="p-4">
      <h1 className="font-serif font-semibold text-3xl mt-5 mb-5">
        Update Toys Info
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="img" className="block text-gray-700 font-bold mb-2">
              Image
            </label>
            <input
              type="text"
              id="img"
              className="border border-gray-400 p-2 w-full"
              name="img"
              defaultValue={theLoadedUsers?.img}
              required
            />
          </div>
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
              defaultValue={theLoadedUsers?.name}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
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
              defaultValue={theLoadedUsers?.sellerName}
              required
            />
          </div>
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
              defaultValue={theLoadedUsers?.sellerEmail}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="subCategory"
              className="block text-gray-700 font-bold mb-2"
            >
              Sub-category
            </label>
            <CreatableSelect
              options={options}
              value={selectedOption}
              onChange={handleSelectChange}
              id="subCategory"
              className="border border-gray-400 p-2 w-full"
              name="subCategory"
              placeholder="Select Sub-category"
              required
            />
          </div>
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
              defaultValue={theLoadedUsers?.price}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-gray-700 font-bold mb-2"
            >
              Rating
            </label>
            <input
              id="rating"
              className="border border-gray-400 p-2 w-full"
              name="rating"
              defaultValue={theLoadedUsers?.rating}
              required
            />
          </div>
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
              defaultValue={theLoadedUsers?.quantity}
              required
            />
          </div>
        </div>
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
            defaultValue={theLoadedUsers?.description}
            required
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
  );
};

export default Update;
