import { Search, Globe } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const handelSubmit = () => {
    navigate(`/search?query=${search}&location=${location}`);
  };

  return (
    <>
      <section>
        <div className="hidden lg:flex justify-between items-center">
          <img src="Logo.png" alt="brandLogo" className="" />
          <div className="flex justify-center items-center border-2 border-[#ADADAD] rounded-full py-0.5 px-1 gap-2">
            <input
              type="text"
              className="ml-1 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="restaurant, hotel, service..."
            />
            <span className="h-4 w-0.5 mx-1  bg-[#ADADAD]"></span>
            <input
              type="text"
              className="outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Singapour..."
            />
            <button
              type="submit"
              className="text-quinary bg-primary rounded-full p-2"
              onClick={handelSubmit}
            >
              <Search size={18} />
            </button>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Globe size={20} />
            <button className="bg-quaternary text-quinary rounded-full py-1.5  p-2.5">
              MyFeedback for business
            </button>
          </div>
        </div>

        <div className="space-y-2 lg:hidden">
          <div className="flex items-center justify-between">
            <img src="Logo.png" alt="brandLogo" className="" />
            <div className="flex justify-center  items-center gap-2">
              <Globe size={20} />
              <button className="bg-quaternary text-quinary rounded-full py-1.5  p-2.5 hidden xs:flex">
                MyFeedback for business
              </button>
              <button className="bg-quaternary text-quinary rounded-full py-1.5  p-2.5 xs:hidden">
                for business
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center border-2 border-[#ADADAD] rounded-full py-0.5 px-1 gap-2">
            <input
              type="text"
              className="ml-1 outline-none w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="restaurant, hotel, service..."
            />
            <span className="h-4 w-0.5 mx-1  bg-[#ADADAD]"></span>
            <input
              type="text"
              className="outline-none w-full"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Singapour..."
            />
            <button
              type="submit"
              className="text-quinary bg-primary rounded-full p-2"
              onClick={handelSubmit}
            >
              <Search size={18} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
