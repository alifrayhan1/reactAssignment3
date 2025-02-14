import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryInfo from "../Source/CategoryInfo";

function Category() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();

  const handleClick = (index, link) => {
    setSelectedIndex(index);
    navigate(link);
  };

  return (
    <section>
      <div className="grid lg:grid-cols-12 grid-cols-6 gap-2">
        {CategoryInfo.map((info, index) => (
          <div
            key={index}
            onClick={() => handleClick(index, info.link)}
            className={`cursor-pointer flex flex-col items-center ${
              selectedIndex === index ? "text-primary underline" : "text-text"
            } hover:text-primary hover:underline`}
          >
            <img src={info.icon} alt={info.title} className="h-5 w-5 xs:h-8 xs:w-8" />
            <p className="text-center text-xs xs:text-base">{info.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;


