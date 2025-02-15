import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/BellaImage/Gallery1.png",
  "/BellaImage/Gallery2.png",
  "/BellaImage/Gallery3.png",
  "/BellaImage/Gallery4.png",
  "/BellaImage/Gallery5.png",
  "/BellaImage/Gallery2.png",
  "/BellaImage/Gallery1.png",
];

function ImageGallery({ onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 backdrop-blur-[1px]  flex justify-center items-center z-50">
      <div className="relative  bg-white p-4 rounded-lg shadow-2xl">
        
        {/* Close Button */}
        <button className="absolute top-3 right-3 p-2 bg-gray-200 rounded-full z-10" onClick={onClose}>
          <X size={24} />
        </button>

        {/* Main Image with Counter */}
        <div className="relative">
          <img
            src={images[currentIndex]}
            alt="Selected"
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <span className="absolute top-2 right-2 bg-black text-white text-sm px-2 py-1 rounded">
            {currentIndex + 1}/{images.length}
          </span>
        </div>

        {/* Navigation Arrows */}
        <button className="absolute top-1/2 left-2 p-2 bg-white rounded-full shadow" onClick={prevImage}>
          <ChevronLeft size={24} />
        </button>
        <button className="absolute top-1/2 right-2 p-2 bg-white rounded-full shadow" onClick={nextImage}>
          <ChevronRight size={24} />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 my-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>

        {/* Thumbnail Preview */}
        <div className="flex justify-center space-x-2 overflow-x-auto">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                index === currentIndex ? "border-gray-800" : "border-transparent"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
