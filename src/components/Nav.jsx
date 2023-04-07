import { MdHome, MdFace } from "react-icons/md";
import { RiMovieLine, RiSlideshow4Line } from "react-icons/ri";
import { FaSignOutAlt, FaRegMoon } from "react-icons/fa";
import { BsFillCaretRightFill } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
// Components
import { BurgerMenu } from "./Buttons";
import { ListItem } from "./ListItem";
import { useState } from "react";

export const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(false);
  };

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };
  return (
    <div>
      <div
        className={
          isExpanded
            ? "z-50 xl:bg-[#ff7700] hover:bg-[#ff7700] overflow-hidden h-14 xl:h-full hover:h-full w-16 fixed transition-width duration-500 xl:hover:w-[200px] hover:w-48"
            : "overflow-hidden w-16 hover:bg-[#ff7700] xl:bg-[#ff7700] fixed h-14 hover:h-full xl:h-full hover:w-16 z-50"
        }
        onMouseEnter={handleMouseEnter}
      >
        <BurgerMenu onClick={handleClick} />
        <ul className="flex flex-col justify-between h-full gap-10 mt-20 xl:mt-8 xl:gap-20 absolute top-0 left-0 w-full">
          <ListItem
            to="/home"
            text="Home"
            icon={MdHome}
            onClick={handleClick}
          />
          <ListItem
            to="/movie"
            text="Movie"
            icon={RiMovieLine}
            onClick={handleClick}
          />
          <ListItem
            to="/tv"
            text="Tv Show"
            icon={BsFillCaretRightFill}
            onClick={handleClick}
          />
          <div className="mt-auto flex-grow-1"></div>
          <ListItem
            to="/search"
            text="Search"
            icon={ImSearch}
            onClick={handleClick}
          />
          <ListItem
            to="/top"
            text="Top 20"
            icon={RiSlideshow4Line}
            onClick={handleClick}
          />
          <ListItem
            to="/upcoming"
            text="Upcoming"
            icon={RiSlideshow4Line}
            onClick={handleClick}
          />
          <div className="mt-auto flex-grow-1"></div>
          <ListItem
            to="/profile"
            text="Profile"
            icon={MdFace}
            onClick={handleClick}
          />
          <ListItem
            to="/darkmode"
            text="Theme"
            icon={FaRegMoon}
            onClick={handleClick}
          />
          <div className="mb-32">
            <ListItem
              to="/signout"
              text="Sign Out"
              icon={FaSignOutAlt}
              onClick={handleClick}
            />
          </div>
        </ul>
      </div>
    </div>
  );
};
