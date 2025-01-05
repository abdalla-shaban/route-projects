import { NavLink } from "react-router-dom";

export default function MobileNav({ navLinks, showNav, setShowNav }) {
  return (
    <ul
      className={`${
        showNav
          ? "flex flex-col gap-8 absolute w-full bg-blue-950 left-0 top-full p-6 z-50"
          : "hidden"
      }`}
    >
      {navLinks.map(({ path, label }, i) => (
        <li key={i} className="text-sm md:text-lg">
          <NavLink to={path} onClick={() => setShowNav(false)}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
