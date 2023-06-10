import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  // mode toggle
  const [theme, setTheme] = useState('light')
  const handleTheme = () => {
    setTheme((theme) => theme === "dark" ? "light" : "dark");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const activeTheme = () => document.documentElement.setAttribute("class", theme);
  
  useEffect(() => {
    activeTheme()
    console.log('theme:',theme)
  },[theme])

  // change title based on location
  const location = useLocation();
  const title = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";
      case "/production":
        return "Produksi";
      case "/order":
        return "Pesanan";
      default:
        return "";
    }
  };

  return (
    <header className="flex items-end justify-between h-[10%]">
      <h1>{title()}</h1>
      <div className="flex gap-3">
        <label
          htmlFor="search"
          id="search-box"
          className="flex items-center gap-3 py-2 pl-3 pr-4 rounded-md bg-white cursor-text"
        >
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Cari sesuatu..."
            autoComplete="off"
            className="w-64 text-tertiary text-base focus:outline-none order-2 peer/search "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            class="w-5 h-5 stroke-grey-dark order-1 cursor-text peer-focus/search:stroke-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </label>
        <div className="w-10 h-10 rounded-md bg-white grid place-items-center cursor-pointer select-none active:bg-primary group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-5 h-5 fill-grey-dark group-hover:fill-primary group-active:fill-white"
          >
            <path
              fill-rule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div onClick={handleTheme} className="w-10 h-10 rounded-md bg-white grid place-items-center cursor-pointer select-none active:bg-primary group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-5 h-5 fill-grey-dark group-hover:fill-primary group-active:fill-white"
          >
            <path
              fill-rule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
