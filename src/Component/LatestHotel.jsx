import Card from "../Reuse/UseCard";
import LatestHotelInfo from "../Source/LatestHotelInfo";

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function LatestHotel() {
  const shuffledInfo = shuffleArray(LatestHotelInfo);

  
  return (
    <section className="flex justify-center items-center w-full">
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full">
      {shuffledInfo.map((info, index) => (
        <div key={index} className="w-full">
          <Card
            imageSrc={info.imageSrc}
            heading={info.heading}
            description={info.description}
            rating={info.rating}
            reviewCount={info.reviewCount}
            width="100%"
            link={info.link}
          />
        </div>
      ))}
    </div>
  </section>
  
  );
}

export default LatestHotel;
