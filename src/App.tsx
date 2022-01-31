import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Explore from "./pages/Explore/Explore";
import Notifications from "./pages/Notifications/Notifications";
import BookMarks from "./pages/BookMarks/BookMarks";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/bookmarks" element={<BookMarks />} />
      </Routes>
    </Router>
  );
};

export default App;
