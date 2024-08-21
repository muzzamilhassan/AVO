import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <div
      className={`fixed top-0 bg-black w-full flex text-white justify-between items-center px-10 lg:px-[175px] md:py-4 py-0${
        scroll ? "sticky" : ""
      } `}
    >
      <div className="text-2xl font-semibold text-white">
        a<span className="text-[#D1002C] text-4xl">v</span>o
      </div>
      <ul
        className={`lg:flex ${
          open
            ? "flex  flex-col justify-center items-center py-10 space-y-4 absolute top-0 left-0 w-full bg-black"
            : "hidden"
        } gap-4 space-x-4 uppercase font-semibold`}
      >
        <Link to={"/"}>
          <li className="text-[#D1002C]">Home</li>
        </Link>
        <Link to={"/about"}>
          <li className="hover:text-[#D1002C] !m-0">About</li>
        </Link>
        <Link to={"/work"}>
          <li className="hover:text-[#D1002C] !m-0">Work</li>
        </Link>
        <Link to={"/blog"}>
          <li className="hover:text-[#D1002C] !m-0">Blog</li>
        </Link>
        <Link to={"/contact"}>
          <li className="hover:text-[#D1002C] !m-0">Contact</li>
        </Link>
      </ul>
      <p onClick={() => setOpen(!open)} className="lg:hidden block">
        {
          open? <img src="/close.png" alt="" className="absolute z-50 top-10 right-10 w-8"/>:
          <img src="/menu.png" alt="" className="text-white w-8" />
        }
      </p>
    </div>
  );
};

export default Navbar;
