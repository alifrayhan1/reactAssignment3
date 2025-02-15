const ratingData = [
  { stars: 5, percentage: 100 },
  { stars: 4, percentage: 80 }, 
  { stars: 3, percentage: 60 },
  { stars: 2, percentage: 40 },
  { stars: 1, percentage: 20 },
];

function OverAll() {
  return (
    <>
      <section>
        <div className=" flex flex-col xs:flex-row justify-center items-center gap-10 border-y border-gray-300 py-10">
          <div className="flex gap-2">
            <div>
              <img src="/BellaImage/Over.png" alt="" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Overall rating</h1>
              <p className="text-gray-600">834 Reviews</p>
              <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src="Star.png"
                  alt={`star-${index}`}
                  className="bg-yellow-600 w-5 h-5 p-0.5"
                />
              ))}
            </div>
            </div>
          </div>
          <div className="w-3/5">
            {ratingData.map(({ stars, percentage }) => (
              <div key={stars} className="flex gap-2 items-center">
                <div className="w-20">
                  <p className="text-gray-600">
                    {stars} star{stars > 1 ? "s" : ""}
                  </p>
                </div>
                <div className="flex w-full">
                  <span
                    style={{ width: `${percentage}%` }}
                    className="h-1.5 bg-primary rounded-l-full"
                  ></span>
                  <span
                    style={{ width: `${100 - percentage}%` }}
                    className="h-1.5 bg-gray-400 rounded-r-full"
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default OverAll;
