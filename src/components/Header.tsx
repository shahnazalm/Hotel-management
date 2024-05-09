import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  return (
    <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-betweem">
      <div className="flex items-center w-full md:2/3">
        <Link href={"/"} className="font-black text-tertiary-light ">
          Hotelzz
        </Link>
        <ul className="flex item-center ml-5">
          <li className="flex items-center">
            <Link href={"/auth"}>
              <FaUserCircle className="cursor-pointer" />
            </Link>
          </li>
          <li className="ml-2">
            <MdDarkMode className="cursor_pointer" />
          </li>
        </ul>
      </div>

      <ul className=" flex items-center justify-between w-full md:w-1/3 mt-4">
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href={"/room"}>Rooms</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href={"/"}>Contant</Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
