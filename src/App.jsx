import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import Home from "./components/Home";
import NotFound from "./404";
import PageLayout from "./PageLayout";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import Groups from "./components/Groups";
import Tutors from "./components/Tutors";
import FindGroups from "./components/FindGroups";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/find-groups" element={<FindGroups />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
