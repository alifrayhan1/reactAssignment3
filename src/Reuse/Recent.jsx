function Recent({ user, location, date, rating, reviewText,reviewText1, images }) {
    return (
      <section>
        <div className="bg-gray-100 w-[457px] space-y-2 p-2 rounded-xl">
          <div className="flex items-center justify-start gap-5">
            <img
              src={user.profileImage}
              alt="profile"
              className="bg-white rounded-full p-2"
            />
            <div>
              <h1 className="font-bold text-lg">{user.name}</h1>
              <p className="text-gray-600">{location}</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: rating }).map((_, index) => (
                <img
                  key={index}
                  src="Star.png"
                  alt={`Star ${index + 1}`}
                  className="bg-yellow-600"
                />
              ))}
            </div>
            <p>{date}</p>
          </div>
          <div className="h-40">
          <p className="text-gray-600">{reviewText}</p>
          <p className="text-gray-600">{reviewText1}</p>
  </div>
          <div className="flex gap-2 items-center justify-start">
            {images.map((imgSrc, index) => (
              <img key={index} src={imgSrc} alt={`Recent Image ${index + 1}`} className="w-24 h-24" />
            ))}
          </div>
          <p className="cursor-pointer underline font-semibold">Discover</p>
        </div>
      </section>
    );
  }
  
  export default Recent;
  