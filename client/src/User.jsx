import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Aside, Header, Navbar, Footer, Notifications } from "./components";
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
      <Aside />
      <div className="flex-auto space-y-5">
        <Header handleNotif={handleNotif} />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/production" element={<Production />} />
          <Route path="/order" element={<Order />} />
          <Route path="/supply" element={<Supply />} />
          <Route path="*" element={<Unknown />} />
        </Routes>
      </div>
      <Notifications stateNotif={toggleNotif} handleNotif={handleNotif} />
    </div>
  );
};

export const Customer = ({ user }) => {
  return (
    <div className="w-full min-h-screen bg-grey-light font-outfit dark:bg-black-light">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product" element={<Menu />} />
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
};
