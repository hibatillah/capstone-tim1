import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Admin, Customer } from './User'

const App = () => {
  const [isLogin, setIsLogin] = useState(false); 
  const [user, setUser] = useState("customer");

  const handleLogin = () => setIsLogin(!isLogin); 
  const handleUser = (id) => setUser(id);

  return (
    <Router>
      {!isLogin ? (
        <Customer handleLogin={handleLogin} handleUser={handleUser} />
      ) : user === "admin" || user === "supplier" ? (
        <Admin user={user} />
      ) : (
        <Customer user={user} />
      )}
    </Router>
  );
};

export default App;
