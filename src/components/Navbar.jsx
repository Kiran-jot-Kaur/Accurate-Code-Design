import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/whiteLogo.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b bg-transparent backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-xl font-bold flex items-center">
          <img
            src={Logo}
            alt="Accurate Code Design Logo"
            className="h-12 max-w-full object-contain border-2 border-white rounded-full"
          />
          <p className="text-white font-semibold ml-2">ACD</p>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/courses" className="nav-link">
            Courses
          </NavLink>
          <NavLink to="/internship" className="nav-link">
            Internship
          </NavLink>
          <NavLink to="/projects" className="nav-link">
            Projects
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-gray-600 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors duration-200"
          >
            Enroll Now
          </NavLink>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t bg-slate-300">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <NavLink
              to="/"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/courses"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </NavLink>
            <NavLink
              to="/internship"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Internship
            </NavLink>
            <NavLink
              to="/projects"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-block rounded-md bg-black px-5 py-2 text-center text-sm font-medium text-white"
            >
              Enroll Now
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
