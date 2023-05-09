import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        const imageUrls = data.slice(0, 10).map((photo) => photo.url);
        setImages(imageUrls);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  const previousImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <div>
      <button onClick={previousImage}>Previous</button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default ImageCarousel;
