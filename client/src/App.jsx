import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Admin, Customer } from './User'

const App = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const handleLogin = (id) => setIsLogin(id); 

  const [user, setUser] = useState({
    id: '',
    name: '',
    role: 'admin',
  });
  const handleUser = (id, name, role) => setUser({
    id: id,
    name: name,
    role: role,
  });

  return (
    <Router>
      {!isLogin ? (
        <Customer user={user} handleLogin={handleLogin} handleUser={handleUser} />
      ) : user?.role === "admin" || user?.role === "supplier" ? (
        <Admin user={user} handleLogin={handleLogin} handleUser={handleUser} />
      ) : (
        <Customer user={user} handleLogin={handleLogin} handleUser={handleUser} />
      )}
    </Router>
  );
};

export default App;
