import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Admin, Customer } from './User'

const App = () => {
  const [user, setUser] = useState("hai");

  return (
    <Router>
      {user === "admin" || user === "supplier" ? (
        <Admin />
      ) : (
        <Customer user={user} />
      )}
    </Router>
  );
};

export default App;
