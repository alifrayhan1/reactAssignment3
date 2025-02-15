import { useState } from "react";
import ImageGallery from "./Gallery";

function Place() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <section>
        <div className="space-y-5 relative">
          <h1 className="text-2xl font-bold">
            Discover our magnificent place in photos
          </h1>
          <p className="text-xs text-gray-500">
            The lorem ipsum is, in printing, a series of meaningless words used <br />
            temporarily to calibrate a layout.
          </p>
          <div className="grid grid-cols-4 gap-2">
            <img src="/BellaImage/Gallery1.png" alt="Gallery1" className="col-span-2 w-full h-full object-cover rounded-lg" />
            <div className="grid grid-rows-2 gap-4">
              <img src="/BellaImage/Gallery3.png" alt="Gallery3" className="w-full h-full object-cover rounded-lg" />
              <img src="/BellaImage/Gallery4.png" alt="Gallery4" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <img src="/BellaImage/Gallery5.png" alt="Gallery5" className="w-full h-full object-cover rounded-lg" />
              <img src="/BellaImage/Gallery3.png" alt="Gallery6" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
          
          {/* View More Button */}
          <button
            onClick={() => setIsGalleryOpen(true)}
            className="bg-white py-1 px-2 flex gap-2 items-center absolute bottom-2 left-2 rounded-full cursor-pointer hover:bg-primary hover:text-white hover:border hover:border-white transition-shadow"
          >
            <img src="/BellaImage/View.png" alt="" className="h-2 w-2 xs:h-3 xs:w-3" />
            <span className="font-semibold text-[8px] xs:text-xs">
              View all photos (7)
            </span>
          </button>
        </div>
      </section>

      {/* Image Gallery Modal */}
      {isGalleryOpen && <ImageGallery onClose={() => setIsGalleryOpen(false)} />}
    </>
  );
}

export default Place;
