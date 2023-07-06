import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Square, Box, Note, SignOut, Gift } from "./Svg";

const Aside = ({ user, handleLogin }) => {
  const menu = {
    admin: [
      ["Dashboard", "/"],
      ["Produksi", "/production"],
      ["Material", "/materials"],
      ["Pesanan", "/order"],
    ],
    supplier: [
      ["Dashboard", "/"],
      ["Suplai", "/supply"],
    ],
  };

  // handle logout
  const navigate = useNavigate();
  const handleLogout = () => {
    handleLogin(false);
    navigate("/");
    console.log("logout success");
  };

  return (
    <aside className="flex-none flex flex-col justify-start items-center gap-20 px-5 pt-10 pb-8 w-[15%] max-h-[calc(100vh-1.5rem)] bg-white rounded-xl dark:bg-black-dark">
      <a href="/">
        <h2 className="text-primary font-bold dark:text-primary-light">
          Rotte Bakery
        </h2>
      </a>
      <ul className="flex flex-col gap-y-2 select-none">
        {menu[user.role].map(([name, path], i) => (
          <li key={i}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-tertiary stroke-primary dark:text-white dark:stroke-primary-light"
                  : "text-grey-dark stroke-grey-dark active:text-tertiary/70 active:stroke-tertiary/70 dark:active:text-grey dark:active:stroke-grey"
              }
            >
              <div className="flex gap-3 items-center px-4 py-2 font-medium rounded-md hover:bg-grey-light dark:hover:bg-black-light">
                {user.role === "admin"
                  ? (() => {
                      switch (name) {
                        case "Dashboard":
                          return <Square />;
                        case "Produksi":
                          return <Gift />;
                        case "Material":
                          return <Box />;
                        case "Pesanan":
                          return <Note />;
                        default:
                          return null;
                      }
                    })()
                  : (() => {
                      switch (name) {
                        case "Dashboard":
                          return <Square />;
                        case "Suplai":
                          return <Box />;
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
        onClick={handleLogout}
        className="mt-auto flex gap-3 items-center px-4 py-2 font-medium rounded-md text-grey-dark stroke-grey-dark active:text-tertiary/70 active:stroke-tertiary/70 dark:active:text-grey dark:active:stroke-grey hover:bg-grey-light dark:hover:bg-black-light cursor-pointer"
      >
        <SignOut /> Logout
      </div>
    </aside>
  );
};

export default Aside;
