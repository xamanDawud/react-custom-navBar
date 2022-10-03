import React from "react";
import DisplayNav from "../DisplaNav/DisplayNav";
import Link from "../Link/Link";
import { Bars3Icon, BeakerIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const NavBar = () => {
  let [open, setOpen] = useState(false);
  let navs = [
    { id: 1, menu: "Home", path: "/home" },
    { id: 2, menu: "Categories", path: "/categories" },
    { id: 3, menu: "Blog", path: "/blog" },
    { id: 4, menu: "Contact", path: "/contact" },
  ];
  return (
    <nav className="bg-gray-600 md:static">
      <div onClick={() => setOpen(!open)} className="w-8 h-8 md:hidden">
        {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
      </div>
      <ul
        className={`md:flex justify-center w-full md:mt-0 absolute bg-gray-600 duration-500 ease-in ${
          open ? "mt-0" : "mt-[-130px]"
        }`}
      >
        {navs.map((nav) => (
          <Link key={nav.id} route={nav}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
