import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Square, Box, Note, SignOut } from "./Svg";

const Aside = ({ user }) => {
  const menuAdmin = [
    ["Dashboard", "/"],
    ["Produksi", "/production"],
    ["Pesanan", "/order"],
    ["Sign Out", "/auth"],
  ];

  const menuSupplier = [
    ["Dashboard", "/"],
    ["Suplai", "/supply"],
    ["Sign Out", "/auth"],
  ];

  const [activeUser, setActiveUser] = useState([]);
  useEffect(() => {
    setActiveUser(user === "admin" ? menuAdmin : menuSupplier);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeUser, user]);

  return (
    <aside className="flex-none flex flex-col justify-start items-center gap-20 px-5 py-10 w-[15%] max-h-[calc(100vh-1.5rem)] bg-white rounded-xl dark:bg-black-dark">
      <a href="/">
        <h2 className="text-primary font-bold dark:text-primary-light">
          Rotte Bakery
        </h2>
      </a>
      <ul className="flex flex-col gap-y-2 select-none">
        {activeUser.map(([name, path], i) => (
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
                {user === "admin"
                  ? (() => {
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
                    })()
                  : (() => {
                      switch (name) {
                        case "Dashboard":
                          return <Square />;
                        case "Suplai":
                          return <Box />;
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
