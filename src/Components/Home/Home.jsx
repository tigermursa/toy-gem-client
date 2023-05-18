import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import PhotoGallery from "./HomeSections/PhotoGallery";

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
      {" "}
      {/* Added a container with the "slider-container" class */}
      <Slider {...settings}>
        <div className="slider-slide">
          <img
            src="/public/sliderphoto1.jpg"
            alt="Slide 1"
            className="slider-image"
          />
        </div>
        <div className="slider-slide">
          <img
            src="/public/slider2r.jpg"
            alt="Slide 2"
            className="slider-image"
          />
        </div>
        <div className="slider-slide">
          <img
            src="/public/slider3.jpg"
            alt="Slide 3"
            className="slider-image"
          />
        </div>
        {/* Add more slide content as needed */}
      </Slider>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="slider-container">
        <div className="mySlider mb-10">
          <HomeSlider />
        </div>
      </div>
      <div>
        <h1 className="text-2xl md:text-5xl font-bold font-serif p-1">BEST MARVEL ACTION FIGURE COLLECTIONS</h1>
      </div>
      <div className="photo-gallery-container mb-5">
        <PhotoGallery></PhotoGallery>
      </div>
    </>
  );
};

export default Home;
