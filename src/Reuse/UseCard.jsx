import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Card({
  imageSrc,
  heading,
  description,
  rating,
  reviewCount,
  width = "285px",
  background = "#F8F8F8",
  link,
  flex,
  imageStyle,

}) {
  const navigate = useNavigate();
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      nextImage();
    }
    if (touchStart - touchEnd < -150) {
      prevImage();
    }
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSrc.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + imageSrc.length) % imageSrc.length
    );
  };

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <section>
      <div
        className={`${flex} h-auto rounded-b-md rounded-2xl space-y-2 cursor-pointer`}
        style={{ width, background,}}
        onClick={handleClick}
      >
        {/* Image */}
        <div className={` ${imageStyle} relative`}>
          <img
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            src={imageSrc[currentImageIndex]}
            alt="Card"
            className="w-full"
          />
          {/* Image Indicator Dots */}
          <div className="flex justify-center items-center space-x-2 mt-2 absolute bottom-1 left-1/2 transform -translate-x-1/2">
            {imageSrc.map((_, index) => (
              <div
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
          >
            &lt;
          </button>
          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
        {/* Heading */}
        <div className="p-2.5 space-y-2">
          <h1 className="text-2xl font-bold">{heading}</h1>
          {/* Description */}
          <p className="text-gray-600">{description}</p>
          {/* Rating and Reviews */}
          <div className="flex gap-1 items-center">
            {[...Array(5)].map((_, index) => {
              if (index < fullStars) {
                return (
                  <img
                    key={index}
                    src="Star.png"
                    alt="full-star"
                    className="w-4 h-4 bg-yellow-500"
                  />
                );
              } else if (index === fullStars && hasHalfStar) {
                return (
                  <img
                    key={index}
                    src="HalfStar.svg"
                    alt="half-star"
                    className="w-4 h-4 bg-yellow-500"
                  />
                );
              } else {
                return (
                  <img
                    key={index}
                    src="Star.png"
                    alt="empty-star"
                    className="w-4 h-4 bg-gray-300"
                  />
                );
              }
            })}
            {/* Rating and Review Count */}
            <div className="flex items-center ml-0.5">
              <span className="font-bold">{rating}</span>
              <span className="text-gray-600"> ({reviewCount} reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
