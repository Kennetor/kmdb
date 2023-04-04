import React from "react";
import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
export const ListItem = ({ to, text, icon: Icon, className }) => {
  const { onClose } = useDisclosure();
  return (
    <li className={`list-none text-xl ${className}`} onClick={() => onClose()}>
      <Link to={to} onClick={() => onClose()}>
        <div className="min-w-[60px] h-16 mt-4">
          {Icon && <Icon className="m-auto text-5xl md:block" />}
          {/* Add "hidden md:block" to hide the icon on screens smaller than md */}
        </div>
        <span className="hover:text-green-700 pr-[10px] text-left px-2.5 whitespace-nowrap">
          {text}
        </span>
      </Link>
    </li>
  );
};
