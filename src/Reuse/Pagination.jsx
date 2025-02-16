import { Link, useLocation } from "react-router-dom";

function Pagination() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <>
      <section>
        <div className="flex items-center text-primary text-sm pb-2 font-bold">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            return (
              <div key={index} className="flex items-center">
                <span>/</span>
                <Link to={routeTo} className="hover:text-black capitalize">
                  {name}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Pagination;
