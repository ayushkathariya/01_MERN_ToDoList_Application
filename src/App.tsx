import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import IfLoggedIn from "./components/IfLoggedIn";
import IfNotLoggedIn from "./components/IfNotLoggedIn";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<IfLoggedIn />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<IfNotLoggedIn />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
