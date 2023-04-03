import "../index.css";
import { MdHome } from "react-icons/md";
import { MdFace } from "react-icons/md";
import { RiMovieLine } from "react-icons/ri";
import { RiSlideshow4Line } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <MdHome className="text-5xl m-auto" />
          <a href="#">
            <span class="icon">
              <i class="fa-solid fa-house"></i>
            </span>
            <span class="title">Home</span>
          </a>
        </li>
        <li>
          <MdFace className="text-5xl m-auto" />
          <a href="#">
            <span class="icon">
              <i class="fa-solid fa-user"></i>
            </span>
            <span class="title">Profile</span>
          </a>
        </li>
        <li>
          <RiSlideshow4Line className="text-5xl m-auto" />
          <a href="#">
            <span class="icon">
              <i class="fa-solid fa-message"></i>
            </span>
            <span class="title">Top 20</span>
          </a>
        </li>
        <li>
          <RiMovieLine className="text-5xl m-auto" />
          <a href="#">
            <span class="icon">
              <i class="fa-solid fa-circle-info"></i>
            </span>
            <span class="title">Upcoming</span>
          </a>
        </li>
        <li>
          <BiCog className="text-5xl m-auto" />
          <a href="#">
            <span class="icon">
              <i class="fa-solid fa-gear"></i>
            </span>
            <span class="title">Settings</span>
          </a>
        </li>
        <li>
          <FaSignOutAlt className="text-5xl m-auto" />
          <a href="#">
            <span class="icon">
              <i class="fa-solid fa-right-from-bracket"></i>
            </span>
            <span class="title">SignOut</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
