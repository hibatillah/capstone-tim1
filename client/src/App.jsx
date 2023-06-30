import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Admin, Customer } from './User'

const App = () => {
  const [isLogin, setIsLogin] = useState(false); 
  const [user, setUser] = useState("customer");

  return (
    <Router>
      {!isLogin ? (
        <Customer />
      ) : user === "admin" || user === "supplier" ? (
        <Admin user={user} />
      ) : (
        <Customer user={user} />
      )}
    </Router>
  );
};

export default App;
