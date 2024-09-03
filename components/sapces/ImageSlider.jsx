"use client";

import { useEffect, useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex >= images.length - 1
        ? setCurrentIndex(0)
        : setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);
  return (
    <div className="w-full h-full flex flex-col items-center justify-around">
      {images && (
        <img
          src={images[currentIndex]}
          alt="image slider"
          className="rounded-2xl w-full min-h-80 max-h-80 object-cover shadow-lg h-full shadow-blue-200"
        />
      )}
      <div className="w-full mt-5 leading-loose">
        {images &&
          images.map((image, i) => {
            return (
              <img
                src={image}
                key={i}
                onClick={() => setCurrentIndex(i)}
                alt="image slider"
                className={`rounded-xl max-h-20 opacity-40 max-w-16 sm:max-w-20 md:max-w-28 inline-flex me-2 mb-2 border-2 ${
                  currentIndex === i &&
                  "border-primaryColor opacity-100 shadow-md shadow-blue-300"
                }`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ImageSlider;
