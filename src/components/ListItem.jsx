import React from "react";
import { Link } from "react-router-dom";

export const ListItem = ({ to, text, icon: Icon, className }) => {
  return (
    <li className={`list-none text-xl ${className}`}>
      <Link to={to}>
        <div className="min-w-[60px] h-16 mt-4">
          {Icon && <Icon className="m-auto text-5xl hidden md:block" />}
          {/* Add "hidden md:block" to hide the icon on screens smaller than md */}
        </div>
        <span className="hover:text-green-700 pr-[10px] text-left px-2.5 whitespace-nowrap">
          {text}
        </span>
      </Link>
    </li>
  );
};
