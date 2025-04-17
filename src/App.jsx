import React from "react";
import Home from "./component/home";
import UserContext from "./context/UserContext";

function App() {
  return (
    <div>
      <UserContext>
        <Home />
      </UserContext>
    </div>
  );
}

export default App;
