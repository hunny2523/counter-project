import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import Signup from "./pages/signUp/SignUp";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.user)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/" replace /> : <Signup />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} replace />
      </Routes>
    </Router>
  );
}

export default App;
