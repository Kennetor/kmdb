import { Link } from "react-router-dom";

export const ListItem = ({ to, text, icon: Icon, className }) => {
  return (
    <li className={`list-none text-xl ${className} text-black`}>
      <Link to={to}>
        <div className="min-w-[60px] h-16 mt-4">
          <Icon className="m-auto text-5xl text-black md:block" />
        </div>
        <span className="pr-[10px] text-left px-2.5 whitespace-nowrap hover:underline">
          {text}
        </span>
      </Link>
    </li>
  );
};
