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
    <div className="p-2 md:hidden z-50 xl:bg-[#ff7700] hover:bg-[#ff7700] w-16 fixed transition-width duration-500 ease-out xl:hover:w-[230px] hover:w-48">
      <button className="text-white text-2xl" onClick={onOpen}>
        <FaBars className="w-10 h-10" />
      </button>
      <Drawer onClose={onClose} isOpen={isOpen} size="xs" placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" className="bg-orange-600">
            Basic Drawer
          </DrawerHeader>
          <DrawerBody className="bg-orange-600">
            <DrawerCloseButton />
            <ul className="flex flex-col justify-between h-screen gap-10 mt-20 xl:mt-8 xl:gap-20 w-full z-50">
              <ListItem
                to="/home"
                text="Home"
                icon={MdHome}
                onClick={() => onClose()}
              />
              <ListItem
                to="/movie"
                text="Movie"
                icon={RiMovieLine}
                onClick={() => onClose()}
              />
              <ListItem
                to="/tv"
                text="Tv Show"
                icon={BsFillCaretRightFill}
                onClick={() => onClose()}
              />

              {/* <div className="mt-auto space flex-grow-1"></div> */}
              <ListItem
                to="/search"
                text="Search"
                icon={ImSearch}
                onClick={() => {
                  onClose();
                }}
              />
              <ListItem
                to="/top"
                text="Top 20"
                icon={RiSlideshow4Line}
                onClick={() => {
                  onClose();
                }}
              />
              <ListItem
                to="/upcoming"
                text="Upcoming"
                icon={RiSlideshow4Line}
              />

              {/* <div className="mt-auto space flex-grow-1"></div> */}
              <ListItem
                to="/profile"
                text="Profile"
                icon={MdFace}
                onClick={() => {
                  onClose();
                }}
              />
              <ListItem
                to="/darkmode"
                text="Theme"
                icon={FaRegMoon}
                onClick={() => {
                  onClose();
                }}
              />
              {/* <div className="mb-32"> */}
              <ListItem
                to="/signout"
                text="Sign Out"
                icon={FaSignOutAlt}
                onClick={() => {
                  onClose();
                }}
              />
              {/* </div> */}
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
