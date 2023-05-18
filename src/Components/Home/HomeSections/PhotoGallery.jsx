import React from "react";
import "./PhotoGallery.css"
const PhotoGallery = () => {
  const images = [
    {
      id: 1,
      src: "https://i.pinimg.com/originals/b2/ff/02/b2ff020a299e78c92fe626a0221d3517.jpg",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://nerdreactor.com/wp-content/uploads/2015/02/superhero-action-figure-toys-photography-hrjoe-1.jpg",
      alt: "Image 5",
    },
    {
      id: 3,
      src: "https://i.shgcdn.com/33622921-088a-4e8d-a594-625b55f918a9/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      alt: "Image 5",
    },
    {
      id: 4,
      src: "https://rukminim1.flixcart.com/image/416/416/jk4bngw0/action-figure/u/u/t/action-figure-imodish-original-imaf7fyxgaksawum.jpeg?q=70",
      alt: "Image 4",
    },
    {
      id: 5,
      src: "https://cdn.pixabay.com/photo/2022/06/09/06/02/dr-strange-7251770_960_720.jpg",
      alt: "Image 5",
    },

    {
      id: 6,
      src: "https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH2f0b6d1efdef4c0692ad9e596e604bc5p.jpg_480x480.jpg",
      alt: "Image 2",
    },

    {
      id: 7,
      src: "https://lzd-img-global.slatic.net/g/p/47b53ccd54307cffc2cff8d3c045a055.jpg_720x720q80.jpg_.webp",
      alt: "Image 3",
    },
    {
      id: 8,
      src: "https://www.picturethemagic.com/wp-content/uploads/2019/12/marvel-toys-featured-image.jpg",
      alt: "Image 5",
    },
    {
      id: 9,
      src: "https://cdn.shopify.com/s/files/1/0560/1070/2957/products/Marvel-Avengers-Ultimate-Protectors--Action-Figure.jpg?v=1671186023",
      alt: "Image 5",
    },
  ];

  return (
    <>
      <div className="">
        <div className="flex flex-wrap justify-center">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className=" gallery-img"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
