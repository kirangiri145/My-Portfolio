import React, { useState } from "react";
import photo from "/kiran.jpg";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contacts",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container  mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex  justify-between  items-center h-16 border-b pb-3">
          <div className="flex items-center space-x-4">
            <img src={photo} className="h-12 w-12 rounded-full" alt="Profile" />
            <div>
              <h1 className="font-semibold text-xl cursor-pointer">
                Kiran Kumar <span className="text-green-500 text-2xl">Giri</span>
              </h1>
              <p className="text-sm text-blue-600">Web Developer</p>
            </div>
          </div>
          <nav>
            <ul className="md:flex hidden space-x-8 text-lg font-medium text-gray-600">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ?  <IoClose size={24} /> :( <IoMdMenu size={24} />)}
            </div>
          </nav>
        </div>

        {/* for mobile device*/}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-semibold"
                  key={id}
                >
                  <Link
                   onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
