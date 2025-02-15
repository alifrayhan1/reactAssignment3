


function Banner({ rating = 4.5, reviewCount = 100 }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <section className="relative">
      <div className="bg-[url('/BellaImage/Banner.png')] bg-cover bg-no-repeat  p-6 space-y-5">
        <h1 className="text-4xl text-white font-bold">Bella Italia</h1>

        {/* Rating and Reviews */}
        <div className="flex gap-1 items-center mt-2">
          {[...Array(5)].map((_, index) => {
            if (index < fullStars) {
              // Full star
              return (
                <img
                  key={index}
                  src="/Star.png"
                  alt="full-star"
                  className="w-4 h-4 bg-yellow-600"
                />
              );
            } else if (index === fullStars && hasHalfStar) {
              // Half star
              return (
                <img
                  key={index}
                  src="/HalfStar.svg"
                  alt="half-star"
                  className="w-4 h-4 bg-yellow-600"
                />
              );
            } else {
              // Empty star
              return (
                <img
                  key={index}
                  src="/EmptyStar.png"
                  alt="empty-star"
                  className="w-4 h-4 bg-yellow-600"
                />
              );
            }
          })}

          {/* Rating Text */}
          <div className="flex items-center ml-1">
            <span className="font-bold text-sm text-white">{rating.toFixed(1)}</span>
            <span className="text-white text-xs ml-1">({reviewCount} reviews)</span>
          </div>
        </div>
        <p className="text-xs text-white">The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. <br />
        The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
        <div className="flex items-center my-8 gap-2">
            <img src="/BellaImage/LocationW.png" alt="locationIcon"/>
            <p className="text-xs text-white">Singapour, Bishan-Ang Mo Kio Park </p>

        </div>
        <div className="flex items-center my-8 gap-2">
            <img src="/BellaImage/TimeW.png" alt="Time"/>
            <p className="text-white text-xs">7j/7, 08:00 - 22:00</p>
        </div>

      </div>
      <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2">
  <img src="/BellaImage/Stamp.png" alt="" className="h-[70%] w-[70%] xs:h-[80%] xs:w-[80%]" />
</div>

    </section>
  );
}

export default Banner;
