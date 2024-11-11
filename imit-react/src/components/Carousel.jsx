import { useEffect, useState } from "react";
import axios from "axios";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch images from backend
    axios.get("http://localhost:3001/images")
      .then((response) => setImages(response.data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="flex flex-col items-center text-center bg-gray-800 text-white py-16 w-full">
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-bold">
          Capture Your Imagination with Captcharts
        </h1>
      </div>

      {/* Carousel container */}
      <div className="relative w-full max-w-2xl overflow-hidden">
        {images.length > 0 ? (
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${images.length * 100}%`, // Adjust width to accommodate all images
            }}
          >
            {images.map((image) => (
              <div
                key={image._id}
                className="w-full flex-shrink-0"
                style={{ width: "100%" }} // Each image takes full width
              >
                <img
                  src={image.image}
                  alt={image.name}
                  className="w-full h-64 object-cover rounded"
                />
              </div>
            ))}
          </div>
        ) : (
          <p>No images available</p>
        )}

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
        >
          Prev
        </button>
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Carousel;
