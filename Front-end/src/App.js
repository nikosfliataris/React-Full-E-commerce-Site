import React, { useEffect } from "react";
import "./App.css";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./Header/ComponentAPI/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is:", authUser);
      if (authUser) {
        dispatch({
          type: "set_user",
          user: authUser,
        });
      } else {
        dispatch({
          type: "set_user",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
