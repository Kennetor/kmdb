// Icons
import { MdHome, MdFace } from "react-icons/md";
import { RiMovieLine, RiSlideshow4Line } from "react-icons/ri";
import { FaSignOutAlt, FaRegMoon } from "react-icons/fa";
import { BsFillCaretRightFill } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
// Components
import { BurgerMenu } from "./Buttons";
import { ListItem } from "./ListItem";
import { CharkraBurgerMenu } from "./ChakraBurgerMenu";

export const Nav = () => {
  return (
    <div>
      <CharkraBurgerMenu />
      <div className="z-50 xl:bg-[#ff7700] hover:bg-[#ff7700] overflow-hidden h-full w-16 xl:block hidden transition-width duration-500  xl:hover:w-[230px] hover:w-48">
        <ul className="flex flex-col justify-between h-full gap-10 mt-20 xl:mt-8 xl:gap-20 absolute top-0 left-0 w-full">
          <ListItem to="/home" text="Home" icon={MdHome} />
          <ListItem to="/movie" text="Movie" icon={RiMovieLine} />
          <ListItem to="/tv" text="Tv Show" icon={BsFillCaretRightFill} />

          <div className="mt-auto space flex-grow-1"></div>
          <ListItem to="/search" text="Search" icon={ImSearch} />
          <ListItem to="/top" text="Top 20" icon={RiSlideshow4Line} />
          <ListItem to="/upcoming" text="Upcoming" icon={RiSlideshow4Line} />

          <div className="mt-auto space flex-grow-1"></div>
          <ListItem to="/profile" text="Profile" icon={MdFace} />
          <ListItem to="/darkmode" text="Theme" icon={FaRegMoon} />
          <div className="mb-32">
            <ListItem to="/signout" text="Sign Out" icon={FaSignOutAlt} />
          </div>
        </ul>
      </div>
    </div>
  );
};
