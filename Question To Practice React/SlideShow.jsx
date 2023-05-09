/* //Display the slide show of image.
import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/400x300/FF5733/FFFFFF?text=Image%201',
  'https://via.placeholder.com/400x300/C70039/FFFFFF?text=Image%202',
  'https://via.placeholder.com/400x300/900C3F/FFFFFF?text=Image%203',
  'https://via.placeholder.com/400x300/581845/FFFFFF?text=Image%204',
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <div>
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default Slideshow;
 */

import React, { useState } from "react";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

const images = [img1, img2, img3];

function Slideshow() {
  const [index, setIndex] = useState(0);

  const handleClickPrev = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleClickNext = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      <button onClick={handleClickPrev}>Prev</button>
      <img
        src={images[index]}
        alt={`Image ${index + 1}`}
        style={{ width: "400px", height: "300px" }}
      />
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
}

export default Slideshow;
