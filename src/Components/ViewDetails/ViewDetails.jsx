import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { FaPenAlt, FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ViewDetails.css";
const ViewDetails = () => {
  const { id } = useParams(); // Access the ID from the route parameters
  const [user, setUser] = useState(null); // Store the selected user data

  useEffect(() => {
    // Fetch the data for the specific ID
    fetch(`http://localhost:5000/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data); // Update the state with the fetched user data
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const navigate = useNavigate();
  const handleDelete = () => {
    if (!user) return;

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
        fetch(`http://localhost:5000/users/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
              ).then(() => {
                navigate("/"); // Redirect to the home page
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  if (!user) {
    return (
      <div className="mt-72 mb-72 text-4xl text-yellow-400">Loading......</div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <div className="flex flex-col-reverse md:flex-row container-details">
          <div className="product-info md:flex-1">
            <div className="product-text">
              <h1>{user.name}</h1>
              <h2>{user.subCategory}</h2>
              <p>{user.description}</p>
              <div className="mt-5 font-sans ">Rating: {user.rating} &#x2B50;&#x2B50;&#x2B50;</div>
              <div className="mt-5 font-sans text-3xl ">
                Price : ${user.price}
              </div>
            </div>
          </div>
          <div className="product-img md:flex-1">
            <img src={user.img} className="" alt="Product" />
          </div>
        </div>
      </div>
      <div className="text-center mb-5">
        <Link to="/">
          <button className="bg-blue-950 text-white py-2 px-4 rounded mt-6">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewDetails;