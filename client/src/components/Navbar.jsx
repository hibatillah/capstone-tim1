import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { DarkMode, ToggleNotif } from "./";
import { Square, Box, Note, Info, SignOut } from "./Svg";

const Navbar = ({ user, handleNotif, handleLogin }) => {
  const menu = [
    ["Beranda", "/"],
    ["Menu", "/menu"],
    ["Pesanan", `${user === "customer" ? `/order/:${user.id}` : "/order"}`],
    ["Tentang Rotte", "/about"],
  ];

  // handle logout
  const navigate = useNavigate();
  const handleLogout = () => {
    handleLogin();
    navigate("/");
    console.log("logout success");
  };

  return (
    <nav className="flex justify-center items-center gap-3 px-12 py-3 bg-white dark:bg-black-dark">
      <a href="/">
        <h2 className="text-primary font-bold dark:text-primary-light">
          Rotte Bakery
        </h2>
      </a>
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
                    case "Menu":
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
      <div
        className={`flex items-center ${
          user === "customer" ? "gap-0" : "gap-3"
        }`}
      >
        <DarkMode />
        {user === "customer" ? (
          <>
            <ToggleNotif handleNotif={handleNotif} />
            <div onClick={() => handleLogout(false)} className="w-10 h-10 rounded-md bg-white grid place-items-center cursor-pointer select-none active:bg-primary group dark:bg-black-dark dark:active:bg-primary">
              <SignOut custom="stroke-grey-dark group-hover:stroke-primary group-active:stroke-white dark:group-hover:stroke-primary-light dark:group-active:stroke-white" />
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <div className="btn btn-secondary">Login</div>
            </Link>
            <Link to="/register">
              <div className="btn btn-primary">Sign Up</div>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
