import { Globe } from "lucide-react";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <section>
      <div className="hidden lg:grid grid-cols-3 items-center ">
        <img src="Logo.png" alt="brandLogo" />
        <SearchBar />
        <div className="flex justify-end items-center gap-2">
          <Globe size={20} />
          <button className="bg-quaternary text-quinary rounded-full py-1.5 p-2.5 ">
            MyFeedback for business
          </button>
        </div>
      </div>

      <div className="space-y-2 lg:hidden">
        <div className="flex items-center justify-between">
          <img src="Logo.png" alt="brandLogo" />
          <div className="flex justify-center items-center gap-2">
            <Globe size={20} />
            <button className="bg-quaternary text-quinary rounded-full py-1.5 p-2.5 hidden xs:flex">
              MyFeedback for business
            </button>
            <button className="bg-quaternary text-quinary rounded-full py-1.5 p-2.5 xs:hidden">
              for business
            </button>
          </div>
        </div>
        <SearchBar />
      </div>
    </section>
  );
}

export default Navbar;

