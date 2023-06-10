import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Aside, Header, Navbar, Footer } from "./components";
import { Home, Menu, CustomerOrder, About, Auth, Dashboard, Production, Supply, Order, Unknown } from "./pages";

const App = () => {
  const [user, setUser] = useState('admin')

  return (
    <Router>
      {user === "admin" || user === "supplier" ? (
        <div className="w-full min-h-screen flex gap-x-5 py-3 pl-3 pr-5 bg-grey-light dark:bg-black-dark font-outfit">
          <nav className="flex-none flex flex-col justify-start items-center gap-20 px-5 py-10 w-[15%] max-h-[calc(100vh-1.5rem)] bg-white rounded-xl">
            <Aside />
          </nav>
          <div className="flex-auto space-y-5">
            <Header />
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
        </div>
      ) : (
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
      )}
    </Router>
  );
};

export default App;
