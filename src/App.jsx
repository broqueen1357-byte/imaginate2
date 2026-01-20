import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Landing from "./pages/Landing";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Imaginate from "./pages/Imaginate";
import NotFound from "./pages/NotFound";

import ThreeDResult from "./pages/imaginate/ThreeDResult";
import FeedBack from "./pages/imaginate/FeedBack";
import Loading from "./pages/imaginate/Loading";
import FinalSummary from "./pages/FinalSummary";

import Home from "./pages/Home";

import FinalShowcase from "./pages/imaginate/FinalShowcase";
import SavedImaginate from "./pages/imaginate/SavedImaginate";

// ADMIN
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import ConceptFallback from "./pages/imaginate/ConceptFallback";
import VideoPreview from "./pages/imaginate/VideoPreview";

// ✅ KEEP PROTECTED
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* ⭐ PUBLIC ROUTES */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="explore" element={<Explore />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* ⭐ USER HOME (AFTER LOGIN) */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* ⭐ IMAGINATE FLOW (NOW PUBLIC) */}
        <Route path="/imaginate" element={<Imaginate />}>
          <Route
            path="concept-fallback"
            element={<ConceptFallback userPrompt={location.state?.prompt} />}
          />
          <Route path="loading" element={<Loading />} />
          <Route path="3d-result" element={<ThreeDResult />} />
          <Route path="summary" element={<FinalSummary />} />
          <Route path="feedback" element={<FeedBack />} />
          <Route path="video-preview" element={<VideoPreview />} />
          <Route path="final-showcase" element={<FinalShowcase />} />
          <Route path="saved" element={<SavedImaginate />} />
        </Route>

        {/* ⭐ ADMIN DASHBOARD */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
