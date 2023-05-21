import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import PhotoGallery from "./HomeSections/PhotoGallery";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link, useLoaderData } from "react-router-dom";
import { FaRegStar, FaShoppingCart } from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";
import Partners from "./HomeSections/Partners";
import DiscountSection from "./HomeSections/DiscountSection";
const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-slide">
          <img src="/sliderphoto1.jpg" alt="Slide 1" className="slider-image" />
        </div>
        <div className="slider-slide">
          <img src="/slider2r.jpg" alt="Slide 2" className="slider-image" />
        </div>
        <div className="slider-slide">
          <img src="/slider3.jpg" alt="Slide 3" className="slider-image" />
        </div>
      </Slider>
    </div>
  );
};

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  useTitle("Home");
  const handleTabSelect = (index) => {
    setActiveTab(index);
  };
  const toys = useLoaderData();
  console.log(toys);
  return (
    <>
      <div className="slider-container">
        <div className="mySlider mb-10">
          <HomeSlider />
        </div>
      </div>
      <div className="photo-gallery-container mb-5">
        <PhotoGallery />
      </div>
      <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
        <TabList>
          <Tab>Avengers</Tab>
          <Tab>Transformers</Tab>
          <Tab>Justice League</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {toys
              .filter((toy) => toy.subCategory === "Avengers")
              .map((toy) => (
                <div key={toy._id} className="toy-card flex flex-col h-full">
                  <div className="product-card flex flex-col justify-between h-full">
                    <div className="badge">Hot</div>
                    <div className="product-tumb">
                      <img src={toy.img} alt="" />
                    </div>
                    <div className="product-details">
                      <span className="product-catagory">
                        Avengers Action Figure
                      </span>
                      <h4>
                        <a>{toy.name}</a>
                      </h4>
                      <p className="flex-grow">
                        {toy.description.split(" ").slice(0, 17).join(" ")}
                      </p>
                      <div className="product-bottom-details">
                        <div className="product-price">
                          <small>420</small>${toy.price}
                        </div>
                        <div className="product-price flex items-center justify-center">
                          <FaRegStar className="text-xl p-1" />
                          {toy.rating}
                        </div>
                        <div className="product-links  flex mt-10 ">
                          <a href="">
                            <FaShoppingCart className="text-4xl" />
                          </a>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <Link to={`/details/${toy._id}`}>
                          <button className="text-white font-bold bg-blue-950 p-2 md:p-3 hover:bg-blue-800 rounded-full">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {toys
              .filter((toy) => toy.subCategory === "Transformer")
              .map((toy) => (
                <div key={toy._id} className="toy-card flex flex-col h-full">
                  <div className="product-card flex flex-col justify-between h-full">
                    <div className="badge">Hot</div>
                    <div className="product-tumb">
                      <img src={toy.img} alt="" />
                    </div>
                    <div className="product-details">
                      <span className="product-catagory">
                        Avengers Action Figure
                      </span>
                      <h4>
                        <a className="font-bold">{toy.name}</a>
                      </h4>
                      <p className="flex-grow">
                        {toy.description.split(" ").slice(0, 17).join(" ")}
                      </p>
                      <div className="product-bottom-details">
                        <div className="product-price">
                          <small>310</small>${toy.price}
                        </div>
                        <div className="product-price flex items-center justify-center">
                          <FaRegStar className="text-xl p-1" />
                          {toy.rating}
                        </div>
                        <div className="product-links  flex mt-10 ">
                          <a href="">
                            <FaShoppingCart className="text-4xl" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mb-9">
                      <Link to={`/details/${toy._id}`}>
                        <button className="text-white font-bold bg-blue-950 p-2 md:p-3 hover:bg-blue-800 rounded-full">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {toys
              .filter((toy) => toy.subCategory === "Justice League")
              .map((toy) => (
                <div key={toy._id} className="toy-card flex flex-col h-full">
                  <div className="product-card flex flex-col justify-between h-full">
                    <div className="badge">Hot</div>
                    <div className="product-tumb">
                      <img src={toy.img} alt="" />
                    </div>
                    <div className="product-details">
                      <span className="product-catagory">
                        Avengers Action Figure
                      </span>
                      <h4>
                        <a>{toy.name}</a>
                      </h4>
                      <p className="flex-grow">
                        {toy.description.split(" ").slice(0, 17).join(" ")}
                      </p>
                      <div className="product-bottom-details">
                        <div className="product-price">
                          <small>290</small>${toy.price}
                        </div>
                        <div className="product-price flex items-center justify-center">
                          <FaRegStar className="text-xl p-1" />
                          {toy.rating}
                        </div>
                        <div className="product-links  flex mt-10 ">
                          <a href="">
                            <FaShoppingCart className="text-4xl" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mb-9">
                      <Link to={`/details/${toy._id}`}>
                        <button className="text-white font-bold bg-blue-950 p-2 md:p-3 hover:bg-blue-800 rounded-full">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
      </Tabs>
      <DiscountSection></DiscountSection>
      <Partners></Partners>
    </>
  );
};

export default Home;
