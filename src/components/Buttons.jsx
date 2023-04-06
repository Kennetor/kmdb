import { FaBars } from "react-icons/fa";

export const BurgerMenu = () => {
  return (
    <div className="p-2 xl:hidden z-50 xl:bg-[#ff7700] hover:bg-[#ff7700] w-16 fixed">
      <button className="text-white text-2xl">
        <FaBars className="w-10 h-10" />
      </button>
    </div>
  );
};

export const SeeMoreButton = () => {
  return (
    <div className="">
      <button>More Info</button>
    </div>
  );
};
