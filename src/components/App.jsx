import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./auth/signIn";
import Gallery from "../pages/Gallery";
import { AuthContextProvider } from "../configs/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
