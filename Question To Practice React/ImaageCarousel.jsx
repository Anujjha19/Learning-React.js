//craete a componet that display the carousel of
//images allow the user to navigate threw images
// through previous and next button use UseState
//hook ,to manage the current image index and the
// use effect hook to fetch the images when the
//component get mount
import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch images here
    const fetchImages = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=5"
      );
      const data = await response.json();
      const imageUrls = data.map((image) => image.url);
      setImages(imageUrls);
    };
    fetchImages();
  }, []);

  useEffect(() => {
    // Automatically move to next image after 2 seconds
    const timer = setTimeout(() => {
      setCurrentImageIndex(
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
      );
    }, 2000);
    // Clear the timer on unmount and when currentImageIndex changes
    return () => clearTimeout(timer);
  }, [currentImageIndex, images.length]);

  const handlePreviousClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <div className="image-carousel">
      <button className="previous-button" onClick={handlePreviousClick}>
        Previous
      </button>
      <img
        className="carousel-image"
        src={images[currentImageIndex]}
        alt="Carousel"
      />
      <button className="next-button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
