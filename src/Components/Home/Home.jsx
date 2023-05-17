import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";

const Home = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const [favorites, setFavorites] = useState([]);
  const [addedFavorites, setAddedFavorites] = useState([]);

  const handleAddToFavorites = (user) => {
    // Logic to add the user to favorites
    setFavorites([...favorites, user._id]);
    setAddedFavorites([...addedFavorites, user._id]);

    // Store the favorite user in local storage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    localStorage.setItem(
      "favorites",
      JSON.stringify([...storedFavorites, user])
    );

    // Show toast message
    toast.success("Your favorite food added to the list");
  };

  const isFavorite = (userId) => {
    return favorites.includes(userId);
  };

  const isAddedFavorite = (userId) => {
    return addedFavorites.includes(userId);
  };

  return (
    <div className="card-box">
      <div>
        <div>
          <div className="user-cards mt-5">
            {users.map((user) => (
              <div className="user-card" key={user._id}>
                <img className="food-img" src={user.img} alt="" />
                <h2 className="text-3xl font-bold mb-5 mt-5">{user.name}</h2>
                <p className="text-2xl mb-5">{user.country}</p>
                <button
                  className={`bg-red-500 text-white py-2 px-4 rounded mt-6 font-semibold ${
                    isAddedFavorite(user._id) ? "bg-gray-600" : ""
                  }`}
                  onClick={() => handleAddToFavorites(user)}
                  disabled={isFavorite(user._id)}
                >
                  {isAddedFavorite(user._id)
                    ? "Added to Favorites"
                    : "Add to Favorite"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Add this component at the end of your component */}
    </div>
  );
};

export default Home;
