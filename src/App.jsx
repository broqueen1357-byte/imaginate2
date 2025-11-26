import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Landing from "./pages/Landing";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Imaginate from "./pages/Imaginate";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import ThreeDResult from "./pages/ThreeDResult";
import NextStep from "./pages/NextStep";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="explore" element={<Explore />} />
          <Route path="about" element={<About />} />
          <Route path="imaginate" element={<Imaginate />} />
          <Route path="login" element={<Login />} />

          {/* NEW PAGES YOU ADDED */}
          <Route path="3d-result" element={<ThreeDResult />} />
          <Route path="next-step" element={<NextStep />} />
        </Route>
      </Routes>
    </Router>
  );
}
