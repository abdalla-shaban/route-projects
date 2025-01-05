import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

const navLinks = [
  { path: "about", label: "About" },
  { path: "portfolio", label: "Portfolio" },
  { path: "contact", label: "Contact" },
];

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [inView, setInView] = useState(false);
  const handleDisplayMenu = () => setShowNav((prev) => !prev);

  window.onscroll = () => {
    window.scrollY > 100 ? setInView(true) : setInView(false);
  };
  return (
    <header
      className={`fixed w-full top-0 bg-blue-950 text-white z-50 transition-all duration-500 ${
        inView ? "py-4" : "py-8"
      }`}
    >
      <nav className="flex justify-between items-center max-w-screen-sm md:max-w-screen-lg mx-auto uppercase font-bold px-4 lg:px-0">
        <Link
          to="/"
          className="text-xl md:text-3xl leading-none relative"
          onClick={() => setShowNav(false)}
        >
          Start Framework
        </Link>
        <ul className={`hidden md:flex items-center gap-8`}>
          {navLinks.map(({ path, label }, i) => (
            <li key={i} className="text-sm md:text-lg">
              <NavLink to={path}>{label}</NavLink>
            </li>
          ))}
        </ul>
        <MobileNav
          navLinks={navLinks}
          showNav={showNav}
          setShowNav={setShowNav}
        />
        <button onClick={handleDisplayMenu} className="md:hidden">
          <FaBars className="text-xl" />
        </button>
      </nav>
    </header>
  );
}
