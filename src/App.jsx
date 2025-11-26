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
          <Route path="login" element={<Login />} />

          {/* Full-page routes */}
          <Route path="imaginate" element={<Imaginate />} />
          <Route path="imaginate/3d-result" element={<ThreeDResult />} />
          <Route path="imaginate/next-step" element={<NextStep />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
