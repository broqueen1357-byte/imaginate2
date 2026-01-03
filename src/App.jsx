import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Landing from "./pages/Landing";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Imaginate from "./pages/Imaginate";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import ThreeDResult from "./pages/imaginate/ThreeDResult";
import FeedBack from "./pages/imaginate/FeedBack";
import Loading from "./pages/imaginate/Loading";
import FinalSummary from "./pages/FinalSummary";

import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

import Home from "./pages/Home";   // ⭐ Make sure this exists

import FinalShowcase from "./pages/imaginate/FinalShowcase";
import SavedImaginate from "./pages/imaginate/SavedImaginate";


// ADMIN
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import VideoPreview from "./pages/imaginate/VideoPreview";
import ConceptFallback from "./pages/imaginate/ConceptFallback";

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

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* ⭐ USER HOME (AFTER LOGIN) */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* ⭐ IMAGINATE FLOW (PROTECTED) */}
        <Route
          path="/imaginate"
          element={
            <ProtectedRoute>
              <Imaginate />
            </ProtectedRoute>
          }
        >
          <Route path="concept-fallback" element={<ConceptFallback
          userPrompt={location.state?.prompt} />} />
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
