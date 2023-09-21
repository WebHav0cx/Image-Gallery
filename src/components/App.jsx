import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./auth/signIn";
import Gallery from "../pages/Gallery";
import { AuthContextProvider } from "../configs/AuthContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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

export default function AppWrapper() {
  return (
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  );
}
