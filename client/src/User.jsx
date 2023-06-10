import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Aside, Header, Navbar, Footer } from "./components";
import {
  Home,
  Menu,
  CustomerOrder,
  About,
  Auth,
  Dashboard,
  Production,
  Supply,
  Order,
  Unknown,
} from "./pages";

export const Admin = () => {
  // toggle notification
  const [toggleNotif, setToggleNotif] = useState(false);
  const handleNotif = () => {
    setToggleNotif(!toggleNotif);
  };

  useEffect(() => {
    console.info({ toggleNotif });
  }, [toggleNotif]);

  return (
    <div className="relative w-full min-h-screen flex gap-x-5 py-3 pl-3 pr-5 bg-grey-light dark:bg-black-light font-outfit">
      <nav className="flex-none flex flex-col justify-start items-center gap-20 px-5 py-10 w-[15%] max-h-[calc(100vh-1.5rem)] bg-white rounded-xl dark:bg-black-dark">
        <Aside />
      </nav>
      <div className="flex-auto space-y-5">
        <Header handleNotif={handleNotif} />
        <main>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/production" element={<Production />} />
            <Route path="/order" element={<Order />} />
            <Route path="/supply" element={<Supply />} />
            <Route path="*" element={<Unknown />} />
          </Routes>
        </main>
      </div>
      <div
        className={`
        ${toggleNotif ? "right-0" : "-right-full"} 
        fixed top-0 w-1/5 py-5 pl-5 pr-4 h-screen bg-white dark:bg-black-dark shadow-lg shadow-grey-dark dark:shadow-black-light transition-all duration-500 ease-in-out`}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-tertiary dark:text-white">
            Notifikasi
          </h3>
          <div
            onClick={handleNotif}
            className="p-1 rounded hover:bg-grey-light cursor-pointer active:bg-primary-light group dark:hover:bg-grey-dark/30 dark:active:bg-primary-light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              class="w-5 h-5 stroke-tertiary group-active:stroke-white dark:stroke-grey"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Customer = ({ user }) => {
  return (
    <div className="w-full min-h-screen p-3 bg-grey-light">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path={user === "customer" ? `/order/:${user.id}` : "/order"}
          element={<CustomerOrder />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Unknown />} />
      </Routes>
      <Footer />
    </div>
  );
}