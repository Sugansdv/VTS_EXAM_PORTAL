import React, { useState } from "react";
import { FaSearch, FaFilter, FaPlus } from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import OverviewRow2 from "../components/overview/Overviewrow2";
import OverviewRow3 from "../components/overview/OverviewRow3";
import AddTraineeModal from "../components/AddTraineeModal";

const Toolbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedTrainee, setSearchedTrainee] = useState(null);
  const [showResultModal, setShowResultModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [classMode, setClassMode] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const onlineStatic = [
      { name: "Kavya", course: "UI/UX", mode: "Online", email: "kavya.uiux@vts.in", phone: "9156800278" },
      { name: "Dharun", course: "UI/UX", mode: "Online", email: "dharun.uiux@vts.in", phone: "9876543210" },
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

    const result = all.find(t =>
      t.name.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (result) {
      setSearchedTrainee(result);
      setShowResultModal(true);
    } else {
      alert("No trainee found.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (classMode === "online") {
      navigate("/online");
    } else if (classMode === "offline") {
      navigate("/offline");
    }

    setShowFilterModal(false);
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <div className="d-flex align-items-center gap-3">
          {/* 🔍 Search Input */}
          <div className="input-group" style={{ maxWidth: "220px" }}>
            <input
              type="text"
              className="form-control border-end-0"
              placeholder="Search Trainee by Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="btn"
              style={{
                backgroundColor: "#d4f06e",
                border: "1px solid #ced4da",
                borderLeft: "none",
              }}
              onClick={handleSearch}
            >
              <FaSearch />
            </button>
          </div>

          {/* Filter Button */}
          <button
            className="btn d-flex align-items-center gap-2 text-white"
            style={{ backgroundColor: "#161527" }}
            onClick={() => setShowFilterModal(true)}
          >
            <FaFilter size={14} />
            <span>Filter</span>
          </button>

          {/* Add Trainees Button */}
          <button
            className="btn d-flex align-items-center gap-2 text-white"
            style={{ backgroundColor: "#161527" }}
            onClick={() => setShowAddModal(true)}
          >
            <FaPlus size={14} />
            <span>Add Trainees</span>
          </button>
        </div>
      </div>

      <div className="mt-4">
        <OverviewRow2 />
        <OverviewRow3 />
      </div>

      {/* Filter Modal */}
      <Modal show={showFilterModal} onHide={() => setShowFilterModal(false)} centered>
        <Modal.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Filter By</h5>
            <button className="btn-close" onClick={() => setShowFilterModal(false)}></button>
          </div>
          <hr />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="traineeName">
              <Form.Label>Trainees Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="courseName">
              <Form.Label>Course Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="duration">
              <Form.Label>Durations</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Class Mode</Form.Label>
              <div>
                <Form.Check
                  label="Online"
                  type="radio"
                  name="classMode"
                  id="online"
                  value="online"
                  checked={classMode === "online"}
                  onChange={(e) => setClassMode(e.target.value)}
                  className="mb-2"
                />
                <Form.Check
                  label="Offline"
                  type="radio"
                  name="classMode"
                  id="offline"
                  value="offline"
                  checked={classMode === "offline"}
                  onChange={(e) => setClassMode(e.target.value)}
                />
              </div>
            </Form.Group>

            <div className="text-center">
              <Button
                type="submit"
                style={{
                  backgroundColor: "#d4f06e",
                  border: "none",
                  color: "#000",
                  fontWeight: "500",
                }}
              >
                Submit
              </Button>
            </div>
          </Form>
          <hr className="mt-4" />
        </Modal.Body>
      </Modal>

      {/* Add Trainee Modal */}
      <AddTraineeModal show={showAddModal} handleClose={() => setShowAddModal(false)} />

      {/* Search Result Modal */}
      <Modal show={showResultModal} onHide={() => setShowResultModal(false)} centered>
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
            <p>No data found.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowResultModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Toolbar;
