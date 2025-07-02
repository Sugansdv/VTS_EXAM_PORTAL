import React, { useState } from "react";
import { FaSearch, FaFilter, FaPlus } from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import OverviewRow2 from "../components/overview/Overviewrow2";
import OverviewRow3 from "../components/overview/OverviewRow3";

const Toolbar = () => {
  const [show, setShow] = useState(false);
  const [classMode, setClassMode] = useState(""); // track selected mode
  const navigate = useNavigate();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (classMode === "online") {
      navigate("/online");
    } else if (classMode === "offline") {
      navigate("/offline");
    }

    handleClose(); // close modal after navigation
  };

  return (
    <>
      {/* Toolbar */}
      <div className="d-flex justify-content-center mt-4">
        <div className="d-flex align-items-center gap-3">
          {/* Search Group */}
          <div className="input-group" style={{ maxWidth: "220px" }}>
            <input
              type="text"
              className="form-control border-end-0"
              placeholder="Search"
            />
            <button
              className="btn"
              style={{
                backgroundColor: "#d4f06e",
                border: "1px solid #ced4da",
                borderLeft: "none",
              }}
            >
              <FaSearch />
            </button>
          </div>

          {/* Filter Button */}
          <button
            className="btn d-flex align-items-center gap-2 text-white"
            style={{ backgroundColor: "#161527" }}
            onClick={handleShow}
          >
            <FaFilter size={14} />
            <span>Filter</span>
          </button>

          {/* Add Trainees Button */}
          <button
            className="btn d-flex align-items-center gap-2 text-white"
            style={{ backgroundColor: "#161527" }}
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
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Filter By</h5>
            <button className="btn-close" onClick={handleClose}></button>
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
    </>
  );
};

export default Toolbar;
