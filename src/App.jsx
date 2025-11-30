import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import MainLayout from "./layouts/MainLayout";

import Landing from "./pages/Landing";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Imaginate from "./pages/Imaginate";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import ThreeDResult from "./pages/imaginate/ThreeDResult";
import NextStep from "./pages/NextStep";
import Loading from "./pages/imaginate/Loading";  // ⭐ Add this import

import FinalSummary from "./pages/FinalSummary";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Pages inside main layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="explore" element={<Explore />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Imaginate and its nested pages */}
        <Route path="imaginate" element={<Imaginate />}>
          <Route path="loading" element={<Loading />} />        {/* ⭐ Added */}
          <Route path="3d-result" element={<ThreeDResult />} />
          <Route path="summary" element={<FinalSummary />} />
          <Route path="next-step" element={<NextStep />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
