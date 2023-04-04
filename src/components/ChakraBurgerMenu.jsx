import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
// Icons
import { MdHome, MdFace } from "react-icons/md";
import { RiMovieLine, RiSlideshow4Line } from "react-icons/ri";
import { FaSignOutAlt, FaRegMoon } from "react-icons/fa";
import { BsFillCaretRightFill } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { useDisclosure } from "@chakra-ui/react";
// Components
// import { BurgerMenu } from "./Buttons";
import { ListItem } from "./ListItem";
import { FaBars } from "react-icons/fa";
export const CharkraBurgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="p-2 xl:hidden z-50 xl:bg-[#ff7700] hover:bg-[#ff7700] w-16 fixed transition-width duration-500 ease-out xl:hover:w-[230px] hover:w-48">
      <button className="text-white text-2xl" onClick={onOpen}>
        <FaBars className="w-10 h-10" />
      </button>
      <Drawer onClose={onClose} isOpen={isOpen} size="xs" placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" className="bg-yellow-400">
            Basic Drawer
          </DrawerHeader>
          <DrawerBody className="bg-orange-600">
            <ul className="flex flex-col justify-between h-screen gap-10 mt-20 xl:mt-8 xl:gap-20 w-full z-50">
              <ListItem to="/home" text="Home" icon={MdHome} />
              <ListItem to="/movie" text="Movie" icon={RiMovieLine} />
              <ListItem to="/tv" text="Tv Show" icon={BsFillCaretRightFill} />

              <div className="mt-auto space flex-grow-1"></div>
              <ListItem to="/search" text="Search" icon={ImSearch} />
              <ListItem to="/top" text="Top 20" icon={RiSlideshow4Line} />
              <ListItem
                to="/upcoming"
                text="Upcoming"
                icon={RiSlideshow4Line}
              />

              <div className="mt-auto space flex-grow-1"></div>
              <ListItem to="/profile" text="Profile" icon={MdFace} />
              <ListItem to="/darkmode" text="Theme" icon={FaRegMoon} />
              <div className="mb-32">
                <ListItem to="/signout" text="Sign Out" icon={FaSignOutAlt} />
              </div>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
