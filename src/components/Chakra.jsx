import { MdHome, MdFace } from "react-icons/md";
import { RiMovieLine, RiSlideshow4Line } from "react-icons/ri";
import { FaSignOutAlt, FaRegMoon } from "react-icons/fa";
import { BsFillCaretRightFill } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ListItem } from "./ListItem";
import { BurgerMenu } from "./Buttons";

function PlacementExample() {
  const [isOpen, setIsOpen] = useState(false);
  const { onOpen, onClose } = useDisclosure();

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    onOpen();
  };

  return (
    <div className="xl:hidden">
      <Button>
        <BurgerMenu colorScheme="blue" onClick={handleButtonClick} />
      </Button>
      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        // onClick={handleButtonClick}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default PlacementExample;
