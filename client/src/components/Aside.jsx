import React from "react";
import { NavLink } from "react-router-dom";
import { Square, Box, Note, SignOut } from "./Svg";

const Aside = () => {
  const menu = [
    ["Dashboard", "/"],
    ["Produksi", "/production"],
    ["Pesanan", "/order"],
    ["Sign Out", "/auth"],
  ];

  return (
    <aside className="flex-none flex flex-col justify-start items-center gap-20 px-5 py-10 w-[15%] max-h-[calc(100vh-1.5rem)] bg-white rounded-xl dark:bg-black-dark">
      <h2 className="text-primary font-bold dark:text-primary-light">
        Rotte Bakery
      </h2>
      <ul className="flex flex-col gap-y-2 select-none">
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
              <div className="flex gap-3 items-center px-4 py-2 font-medium rounded-md hover:bg-grey-light dark:hover:bg-black-light">
                {(() => {
                  switch (name) {
                    case "Dashboard":
                      return <Square />;
                    case "Produksi":
                      return <Box />;
                    case "Pesanan":
                      return <Note />;
                    case "Sign Out":
                      return <SignOut />;
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
    </aside>
  );
};

export default Aside;
