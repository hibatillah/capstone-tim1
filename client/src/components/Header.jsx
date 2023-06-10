import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
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
        return ""
    }
  }
  
  return (
    <header className="flex items-end justify-between h-[10%]">
      <h1>{title()}</h1>
      <div className="flex">
        <div
          id="search-box"
          className="flex items-center gap-3 py-2 pl-3 pr-4 rounded-lg bg-white"
        >
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Cari sesuatu..."
            autoComplete="off"
            className="w-64 text-tertiary text-base focus:outline-none order-2 peer/search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            class="w-5 h-5 stroke-grey-dark order-1 peer-focus/search:stroke-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
