import { Link } from "react-router-dom";

export const ListItem = ({ to, text, icon: Icon, className, onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <li className={`list-none text-xl ${className}`}>
      <Link to={to} onClick={handleClick}>
        <div className="min-w-[60px] h-16 mt-4">
          <Icon className="m-auto text-5xl md:block" />
        </div>
        <span className="pr-[10px] text-left px-2.5 whitespace-nowrap hover:underline">
          {text}
        </span>
      </Link>
    </li>
  );
};
