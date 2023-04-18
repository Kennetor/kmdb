import { FaBars } from "react-icons/fa";

export const BurgerMenu = () => {
  return (
    <div className="p-2 xl:hidden z-50 xl:bg-[#ff7700] hover:bg-[#ff7700] w-16 fixed">
      <button className="text-2xl text-white">
        <FaBars className="w-10 h-10" />
      </button>
    </div>
  );
};

// export const SeeMoreButton = () => {
//   return (
//     <div className="">
//       <button>More Info</button>
//     </div>
//   );
// };

export const SearchBtn = () => {
  return (
    <button
      onClick={handleSearch}
      className="w-40 m-auto mt-10 text-4xl text-center text-white bg-gray-500 rounded-lg flext hover:bg-green-600"
    >
      Search
    </button>
  );
};
