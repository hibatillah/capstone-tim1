import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Header, Footer } from "./components";
import { Dashboard } from "./pages";

const App = () => {
  return (
    <Router>
      <div className="w-full h-screen flex">
        <div className="flex-none">
          <Navbar />
        </div>
        <div className="flex-1">
          <Header />
          <Routes>
            <Route index element={<Dashboard />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
