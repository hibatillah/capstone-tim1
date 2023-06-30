import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Aside, Header, Navbar, Footer, Notifications } from "./components";
import {
  Home,
  Menu,
  CustomerOrder,
  About,
  Login,
  Register,
  Dashboard,
  Production,
  Supply,
  Order,
  Materials,
  Unknown,
} from "./pages";

const ToggleNotif = () => {
  const [toggleNotif, setToggleNotif] = useState(false);
  const handleNotif = () => setToggleNotif(!toggleNotif);

  return {
    toggleNotif,
    handleNotif,
  }
};

export const Admin = ({ user }) => {
  const { toggleNotif, handleNotif } = ToggleNotif();

  return (
    <div className="relative w-full h-screen flex gap-x-5 py-3 pl-3 bg-grey-light dark:bg-black-light font-outfit">
      <Aside user={user} />
      <div className="h-[calc(100vh-1.5rem)] pr-3 flex-auto space-y-5 overflow-y-scroll">
        <Header handleNotif={handleNotif} />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/production" element={<Production />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/order" element={<Order />} />
          <Route path="/supply" element={<Supply />} />
          <Route path="*" element={<Unknown />} />
        </Routes>
      </div>
      <Notifications stateNotif={toggleNotif} handleNotif={handleNotif} />
    </div>
  );
};

export const Customer = ({ user, handleUser,handleLogin }) => {
  const { toggleNotif, handleNotif } = ToggleNotif();

  return (
    <div className="w-full min-h-screen bg-grey-light font-outfit dark:bg-black-light">
      <Navbar user={user} handleNotif={handleNotif} />
      {user === "customer" ? (
        <Notifications stateNotif={toggleNotif} handleNotif={handleNotif} />
      ) : null}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path={user === "customer" ? `/order/:${user.id}` : "/order"}
          element={<CustomerOrder />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login handleUser={handleUser} handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Unknown />} />
      </Routes>
      <Footer />
    </div>
  );
};
