import React from "react";
import { NavLink, Link } from "react-router-dom";
import { DarkMode } from "./";
import { Square, Box, Note, Info } from "./Svg";

const Navbar = () => {
  const menu = [
    ["Beranda", "/"],
    ["Produk", "/product"],
    ["Pesanan", "/order"],
    ["Tentang Rotte", "/about"],
  ];

  return (
    <nav className="flex justify-center items-center gap-3 px-12 py-3 bg-white dark:bg-black-dark">
      <DarkMode />
      <h2 className="text-primary font-bold dark:text-primary-light">
        Rotte Bakery
      </h2>
      <ul className="flex mx-auto select-none">
        {menu.map(([name, path], i) => (
          <li key={i}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-tertiary stroke-primary dark:text-white dark:stroke-primary-light"
                  : "text-grey-dark stroke-grey-dark active:text-tertiary/70 active:stroke-tertiary/70 dark:active:text-grey dark:active:stroke-grey"
              }
            >
              <div className="flex gap-2 items-center px-4 py-2 font-medium rounded-md hover:bg-grey-light dark:hover:bg-black-light">
                {(() => {
                  switch (name) {
                    case "Beranda":
                      return <Square />;
                    case "Produk":
                      return <Box />;
                    case "Pesanan":
                      return <Note />;
                    case "Tentang Rotte":
                      return <Info />;
                    default:
                      return null;
                  }
                })()}
                <span>{name}</span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex gap-3 items-center">
        <Link to="/auth/login">
          <div className="btn btn-secondary">Login</div>
        </Link>
        <Link to="/auth/signup">
          <div className="btn btn-primary">Sign Up</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
