import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Admin, Customer } from './User'

const App = () => {
  const [user] = useState("");

  return (
    <Router>
      {user === "admin" || user === "supplier" ? (
        <Admin user={user} />
      ) : (
        <Customer user={user} />
      )}
    </Router>
  );
};

export default App;
