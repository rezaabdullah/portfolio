"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const navlink = [
  {
    id: "home",
    name: "Home",
    path: "/",
  },
  {
    id: "about",
    name: "About Me",
    path: "/#about",
  },
  {
    id: "skills",
    name: "Skills",
    path: "/#skills",
  },
  // {
  //   id: "projects",
  //   name: "Projects",
  //   path: "/projects",
  // },
  {
    id: "contact",
    name: "Contact",
    path: "/#contact",
  },
];

const Navbar = () => {
  // show menu icon in mobile screen
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="sticky inset-0 top-0 z-10 border-b border-inherit bg-slate-100">
      <nav>
        <div className="max-w-7xl mx-auto flex h-16 justify-between items-center px-4 md:px-6 xl:px-8">
          <Link className="text-4xl" href={"/"}>
            A|R
          </Link>
          {/* large screen menu */}
          <div className="hidden space-x-8 uppercase text-sm font-semibold md:flex">
            {navlink.map((link) => (
              <Link
                className="hover:text-sky-600 hover:ease-in-out hover:duration-300"
                href={link.path}
                key={link.id}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* mobile and tablet screen menu */}
          <div
            className="text-2xl ease-in-out duration-300 md:hidden"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </div>
          {isOpen && (
            // overlay before opening the mobile menu
            <div className="fixed top-[64px] inset-0 bg-slate-950/50">
              {/* mobile and tablet menu */}
              <div className="flex flex-col text font-semibold absolute inset-y-0 right-0 w-2/3 sm:w-1/2 h-screen justify-start bg-slate-100">
                {navlink.map((link) => (
                  <Link
                    className="p-4 hover:text-sky-600 hover:bg-slate-300 hover:ease-in-out hover:duration-300"
                    href={link.path}
                    key={link.id}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
