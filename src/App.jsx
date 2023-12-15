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
  const myGroupsInit = [0, 1];
  const myTutorsInit = [0, 2];
  const myEventsInit = [0, 1, 2, 3];
  const myTutorEventsInit = [0, 2];

  React.useEffect(() => {
    if (localStorage.getItem("myGroups")) {
      return;
    }
    localStorage.setItem("myGroups", JSON.stringify(myGroupsInit));
    localStorage.setItem("myTutors", JSON.stringify(myTutorsInit));
    localStorage.setItem("myEvents", JSON.stringify(myEventsInit));
    localStorage.setItem("myTutorEvents", JSON.stringify(myTutorEventsInit));
    console.log("Initialized local storage");
  }, []);

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
