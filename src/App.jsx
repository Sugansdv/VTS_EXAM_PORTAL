import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import MobileSidebar from "./components/MobileSidebar";

import Overview from "./pages/Overview";
import Designing from "./pages/Designing";
import OnlineTrainees from "./pages/OnlineTrainees";
import OfflineTrainees from "./pages/OfflineTrainees";
import TraineeProfile from "./pages/TraineeProfile";
import Exam from "./pages/Exam";
import TechnicalExamPart1 from "./pages/TechnicalExamPart1";
import TechnicalExamPart2 from "./pages/TechnicalExamPart2";
import ThankYou from "./pages/ThankYou";
import Result from "./pages/Result";
import Toolbar from "./pages/Toolbar";
import Login from "./pages/Login";
import UploadQuestionPaper from "./pages/UploadQuestionsPaper";
import Development from "./pages/Development";


// This wrapper allows useLocation to work inside AppLayout
const AppLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === "/";

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    // Redirect to login if not logged in and not already on login page
    if (!isLoggedIn && location.pathname !== "/") {
      navigate("/");
    }
  }, [isLoggedIn, location.pathname, navigate]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/overview");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar (large screens) */}
        {!isLoginPage && (
          <nav className="col-lg-2 d-none d-lg-block bg-dark sidebar p-0">
            <Sidebar />
          </nav>
        )}

        {/* Mobile top bar + Mobile sidebar */}
        {!isLoginPage && (
          <>
            <div className="d-lg-none bg-dark p-2 text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">VTS Exam Portal</h5>
              <button
                className="btn btn-outline-light"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileSidebar"
              >
                ☰
              </button>
            </div>
            <MobileSidebar />
          </>
        )}

        <main
          className={
            isLoginPage
              ? "col-12"
              : "col-lg-10 ms-sm-auto px-md-4 mt-3"
          }
        >
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/overview"
              element={
                isLoggedIn ? <Overview /> : <Navigate to="/" replace />
              }
            />
            <Route path="/designing" element={<Designing />} />
             <Route path="/development" element={<Development />} />
            <Route path="/online" element={<OnlineTrainees />} />
            <Route path="/offline" element={<OfflineTrainees />} />
            <Route path="/trainee/:id" element={<TraineeProfile />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/technical-exam" element={<TechnicalExamPart1 />} />
            <Route path="/technical-exam1" element={<TechnicalExamPart2 />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/result" element={<Result />} />
            <Route path="/toolbar" element={<Toolbar />} />
            <Route path="/upload-qp" element={<UploadQuestionPaper />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
