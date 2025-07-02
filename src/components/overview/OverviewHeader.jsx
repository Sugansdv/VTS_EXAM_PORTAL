import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import notificationIcon from "../../assets/images/Notification.png";
import profilePic from "../../assets/images/Img 1.png";
import traineesIcon from "../../assets/images/Total Trainees.png";
import coursesIcon from "../../assets/images/courses.png";
import examsIcon from "../../assets/images/Exams.png";
import { FaSearch } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

const today = new Date();
const formattedDate = today.toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const OverviewHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedTrainee, setSearchedTrainee] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleSearch = () => {
    const onlineStatic = [
      { id: 1, name: "Kavya", course: "UI/UX", mode: "Online", email: "kavya.uiux@vts.in", phone: "9156800278" },
      { id: 2, name: "Dharun", course: "UI/UX", mode: "Online", email: "dharun.uiux@vts.in", phone: "9876543210" },
      {
            id: 3,
            name: "Ram",
            course: "UI/UX Design",
            mode: "Online",
            email: "ram.uiux@vts.in",
            phone: "9123456780"
          },
          {
            id: 4,
            name: "Santoz",
            course: "UI/UX Design",
            mode: "Online",
            email: "santoz.uiux@vts.in",
            phone: "9988776655"
          },
          {
            id: 5,
            name: "Sugan",
            course: "UI/UX Design",
            mode: "Online",
            email: "sugan.uiux@vts.in",
            phone: "9012345678"
          },
          {
            id: 6,
            name: "Manoj",
            course: "UI/UX Design",
            mode: "Online",
            email: "manoj.uiux@vts.in",
            phone: "9345678901"
          },
    ];

    const offlineStatic = [
      { id: 1, name: "Ramesh", course: "UI/UX", mode: "Offline", email: "ramesh.uiux@vts.in", phone: "8657544011" },
      { id: 2, name: "Diya", course: "UI/UX", mode: "Offline", email: "diya.uiux@vts.in", phone: "8901234567" },
      {
            id: 3,
            name: "Geetha",
            course: "UI/UX Design",
            mode: "Offline",
            email: "geetha.uiux@vts.in",
            phone: "9876501234"
          },
          {
            id: 4,
            name: "Keerthi",
            course: "UI/UX Design",
            mode: "Offline",
            email: "keerthi.uiux@vts.in",
            phone: "9998887770"
          },
          {
            id: 5,
            name: "Sujitha",
            course: "UI/UX Design",
            mode: "Offline",
            email: "sujitha.uiux@vts.in",
            phone: "9123451234"
          },
          {
            id: 6,
            name: "Ramu",
            course: "UI/UX Design",
            mode: "Offline",
            email: "ramu.uiux@vts.in",
            phone: "9345609871"
          },
    ];

    const onlineFromStorage = JSON.parse(localStorage.getItem("onlineTrainees")) || [];
    const offlineFromStorage = JSON.parse(localStorage.getItem("offlineTrainees")) || [];

    const all = [...onlineStatic, ...offlineStatic, ...onlineFromStorage, ...offlineFromStorage];

    const result = all.find((t) =>
      t.name.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (result) {
      setSearchedTrainee(result);
      setShowModal(true);
    } else {
      alert("No trainee found with that name.");
    }
  };

  return (
    <div className="container py-4">
      <div className="row align-items-center mb-4">
        <div className="col-md-4 text-md-start text-center mb-2 mb-md-0">
          <h4 className="fw-bold">Good Morning!!!</h4>
          <p className="text-muted mb-0">It's {formattedDate}</p>
        </div>

        <div className="col-md-4 d-flex justify-content-center mb-2 mb-md-0">
          <div className="input-group" style={{ maxWidth: "300px", width: "100%" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search Trainee by Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="btn text-dark"
              style={{ backgroundColor: "#d8f275" }}
              onClick={handleSearch}
            >
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="col-md-4 d-flex justify-content-end gap-3" style={{ position: "relative", paddingRight: "20px" }}>
          <img src={notificationIcon} alt="Notification" width={25} style={{ marginRight: "20px" }} />
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-circle"
            width={35}
            height={35}
            style={{ cursor: "pointer" }}
            onClick={() => setShowDropdown(prev => !prev)}
          />
          {showDropdown && (
            <div
              className="position-absolute bg-white shadow p-2 rounded"
              style={{ top: "55px", right: "20px", zIndex: 1000, minWidth: "120px" }}
            >
              <button className="dropdown-item text-danger text-center" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Info Cards */}
      <div className="row g-3">
        <div className="col-md-4">
          <div className="p-3 rounded bg-warning-subtle d-flex justify-content-between align-items-center">
            <div>
              <small className="text-muted">Total Trainees</small>
              <h5 className="fw-bold mb-0">500</h5>
            </div>
            <div className="rounded-circle d-flex justify-content-center align-items-center" style={{
              backgroundColor: "#fff", width: "50px", height: "50px", border: "2px solid #f1c40f"
            }}>
              <img src={traineesIcon} alt="Trainees" width={25} />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 rounded bg-success-subtle d-flex justify-content-between align-items-center">
            <div>
              <small className="text-muted">Active Courses</small>
              <h5 className="fw-bold mb-0">15</h5>
            </div>
            <div className="rounded-circle d-flex justify-content-center align-items-center" style={{
              backgroundColor: "#fff", width: "50px", height: "50px", border: "2px solid #28a745"
            }}>
              <img src={coursesIcon} alt="Courses" width={25} />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 rounded d-flex justify-content-between align-items-center" style={{ backgroundColor: "#ec40af" }}>
            <div>
              <small>Upcoming Exams</small>
              <h5 className="fw-bold mb-0">12</h5>
            </div>
            <div className="rounded-circle d-flex justify-content-center align-items-center" style={{
              backgroundColor: "#fff", width: "50px", height: "50px", border: "2px solid #fff"
            }}>
              <img src={examsIcon} alt="Exams" width={25} />
            </div>
          </div>
        </div>
      </div>

      {/* 🔍 Trainee Detail Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Trainee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {searchedTrainee ? (
            <>
              <p><strong>Name:</strong> {searchedTrainee.name}</p>
              <p><strong>Course:</strong> {searchedTrainee.course}</p>
              <p><strong>Mode:</strong> {searchedTrainee.mode}</p>
              <p><strong>Email:</strong> {searchedTrainee.email}</p>
              <p><strong>Phone:</strong> {searchedTrainee.phone}</p>
            </>
          ) : (
            <p>No trainee data.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OverviewHeader;
