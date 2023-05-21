import React, { useState, useEffect } from "react";

const DiscountSection = () => {
  const colors = ["text-red-500", "text-blue-500", "text-green-500"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-blue-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            className={`text-3xl font-extrabold ${colors[currentColorIndex]} transition-colors duration-500`}
          >
            Up to 65% Discount!
          </h2>
          <p className="mt-4 text-2xl font-thin  text-blue-200">
            Explore our wide range of toys at unbeatable prices. Hurry, this
            discount is available for a limited time only, until May 31st. Don't
            miss out on the opportunity to grab amazing deals on popular toys
            from Toygem!
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Featured Toys:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-900 text-lg font-semibold">
                  {" "}
                  Spiderman Black Rare Toy{" "}
                </p>
                <img
                  src="https://japanworld.it/60644-large_default/medicom-toy-mafex-spiderman-black-costume-comic-version.jpg"
                  alt=""
                />
                <p className={`text-gray-900 font-bold text-3xl ${colors[currentColorIndex]} transition-colors duration-1`}>Price : $250</p>
              </div>  

              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-900 text-lg font-semibold">
                  {" "}
                  Groot & Rocket Talking Action Figure{" "}
                </p>
                <img
                  src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/1713047624664?fmt=webp&qlt=70&wid=1680&hei=1680"
                  alt=""
                />
                <p className={`text-gray-900 font-bold text-3xl ${colors[currentColorIndex]} transition-colors duration-1`}>Price : $180</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-900 text-lg font-semibold">
                  Hawkman (Black Adam Movie) 7" Figure{" "}
                </p>
                <img
                  src="https://cdn11.bigcommerce.com/s-hlbgbzrg7y/images/stencil/640w/products/707/6126/15257_-_DC_BLACK_ADAM_MOVIE_7IN_FIGURES_-_HAWKMAN-04_NL__32304.1683923250.jpg?c=1"
                  alt=""
                />
                <p className={`text-gray-900 font-bold text-3xl ${colors[currentColorIndex]} transition-colors duration-1`}>Price : $210</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;
