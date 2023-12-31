import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-auto mb-4 sm:mb-0">
            <h1 className="text-xl font-bold">ToyGem</h1>
          </div>
          <div className="w-full sm:w-1/2 md:w-auto">
            <ul className="flex flex-wrap">
              <li className="w-1/2 md:w-1/4 mb-2">
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  NEED SUPPORT
                </a>
              </li>
              <li className="w-1/2 md:w-1/4 mb-2">
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  WHERE TO BUY
                </a>
              </li>
              <li className="w-1/2 md:w-1/4 mb-2">
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Facebook
                </a>
              </li>
              <li className="w-1/2 md:w-1/4 mb-2">
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  PLEASE CONTACT US AT
                </a>
              </li>
              <li className="w-1/2 md:w-1/4 mb-2">
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  CORPORATE
                </a>
              </li>
              <li className="w-1/2 md:w-1/4 mb-2">
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                OUR PAYMENT METHOD:
                </a>
              </li>
              <li className="w-1/2 md:w-1/4 mb-2">
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Youtube
                </a>
              </li>
              <li className="w-1/2 md:w-1/4 mb-2">
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="w-1/2 md:w-1/4 mb-2">
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  DO NOT SELL MY PERSONAL INFORMATION
                </a>
              </li>
              <li className="w-1/2 md:w-1/4 mb-2">
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                 <img className="m-auto" src="https://i0.wp.com/leowebbd.com/wp-content/uploads/2020/08/payments-bd.png?resize=183%2C22&ssl=1" alt="" />
                </a>
              </li>
              <li className="w-1/2 md:w-1/4 mb-2">
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  instagram
                </a>
              </li>
              <li className="w-1/2 md:w-1/4 mb-2">
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  info@toygem.com || Our address: 123 Toy Street, Toy Town, Dhaka.
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-300">
            &copy; 2023 ToyGem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;