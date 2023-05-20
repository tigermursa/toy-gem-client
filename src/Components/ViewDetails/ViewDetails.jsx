import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { FaPenAlt, FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ViewDetails.css";
import Spinner from "../Private/Spiner";
import useTitle from "../../Hooks/useTitle";

const ViewDetails = () => {
  const { id } = useParams(); // Access the ID from the route parameters
  const [user, setUser] = useState(null); // Store the selected user data
  useTitle("ViewDetails");

  useEffect(() => {
    // Fetch the data for the specific ID
    fetch(`https://server-toygem-tigermursa.vercel.app/toys/${id}`)
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
        fetch(`https://server-toygem-tigermursa.vercel.app/toys/${id}`, { method: "DELETE" })
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
      <div className="flex justify-center items-center mt-96 mb-96 font-semibold text-4xl text-blue-950">
        Loading{" "}
        <div className="ms-5">
          <Spinner></Spinner>
        </div>
      </div>
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
              <h6>Seller Name: {user?.sellerName}</h6>
              <h6 className="mb-3">Seller Email: {user.sellerEmail}</h6>
              <p>Description: {user.description}</p>
              <div className="mt-5 font-sans ">
                Rating: {user.rating} &#x2B50;&#x2B50;&#x2B50;
              </div>
              <div className="mt-5 font-sans ">
                Available Quantity: {user.quantity}
              </div>
              <div className="mt-5 font-sans text-3xl font-semibold ">
                Price: ${user.price}
              </div>
            </div>
          </div>
          <div className="product-img md:flex-1">
            <img className="product-photo" src={user.img} alt="Product" />
          </div>
        </div>
      </div>
      <div className="text-center mb-5">
        <button
          className="bg-blue-950 text-white py-2 px-4 rounded mt-6"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ViewDetails;
