import { MdHome, MdFace } from "react-icons/md";
import { RiMovieLine, RiSlideshow4Line } from "react-icons/ri";
import { FaSignOutAlt, FaRegMoon } from "react-icons/fa";
import { BsFillCaretRightFill } from "react-icons/bs";
// import { BiCog } from "react-icons/bi";

import { useState } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [active, setActive] = useState(false);

  const toggleNavigation = () => {
    setActive(!active);
  };

  const handleClick = () => {
    setActive(false);
  };

  return (
    <div className={`navigation ${active ? "active" : ""} z-50`}>
      <ul className="flex flex-col justify-between h-full gap-10 mt-8 xl:gap-20">
        <li>
          <Link to="/home" onClick={handleClick}>
            <div className="icon">
              <MdHome className="m-auto text-5xl" />
            </div>
            <span className="title">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/movie">
            <span className="icon">
              <RiMovieLine className="m-auto text-5xl" />
            </span>
            <span className="title">Movies</span>
          </Link>
        </li>
        <li>
          <Link to="/tv">
            <span className="icon">
              <BsFillCaretRightFill className="m-auto text-5xl" />
            </span>
            <span className="title">Tv shows</span>
          </Link>
        </li>
        <div className="mt-auto space flex-grow-1"></div>
        <li>
          <a href="#">
            <span className="icon">
              <RiSlideshow4Line className="m-auto text-5xl" />
            </span>
            <span className="title">Top 20</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <RiMovieLine className="m-auto text-5xl" />
            </span>
            <span className="title">Upcoming</span>
          </a>
        </li>
        <div className="mt-auto space flex-grow-1"></div>
        <li>
          <a href="#">
            <span className="icon">
              <MdFace className="m-auto text-5xl" />
            </span>
            <span className="title">Profile</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <FaRegMoon className="m-auto text-5xl" />
            </span>
            <span className="title">Dark Mode</span>
          </a>
        </li>
        <li className="mb-20">
          <a href="#">
            <span className="icon">
              <FaSignOutAlt className="m-auto text-5xl" />
            </span>
            <span className="title">SignOut</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
