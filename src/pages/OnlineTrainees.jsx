import React, { useState, useEffect } from 'react';
import TraineeCard from '../components/TraineeCard';
import profileImg from '../assets/images/Img 5.png';
import { Link } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';

const OnlineTrainees = () => {
  const staticTrainees = [
    {
      id: 1,
      name: "Kavya",
      duration: "30 Days",
      course: "UI/UX Design",
      mode: "Online",
      email: "kavya.uiux@vts.in",
      phone: "9156800278",
      image: profileImg,
    },
    {
      id: 2,
      name: "Dharun",
      duration: "30 Days",
      course: "UI/UX Design",
      mode: "Online",
      email: "dharun.uiux@vts.in",
      phone: "9876543210",
      image: profileImg,
    },
    {
      id: 3,
      name: "Ram",
      duration: "30 Days",
      course: "UI/UX Design",
      mode: "Online",
      email: "ram.uiux@vts.in",
      phone: "9123456780",
      image: profileImg,
    },
    {
      id: 4,
      name: "Santoz",
      duration: "30 Days",
      course: "UI/UX Design",
      mode: "Online",
      email: "santoz.uiux@vts.in",
      phone: "9988776655",
      image: profileImg,
    },
    {
      id: 5,
      name: "Sugan",
      duration: "30 Days",
      course: "UI/UX Design",
      mode: "Online",
      email: "sugan.uiux@vts.in",
      phone: "9012345678",
      image: profileImg,
    },
    {
      id: 6,
      name: "Manoj",
      duration: "30 Days",
      course: "UI/UX Design",
      mode: "Online",
      email: "manoj.uiux@vts.in",
      phone: "9345678901",
      image: profileImg,
    },
  ];

  const [trainees, setTrainees] = useState([]);
  const [currentTrainee, setCurrentTrainee] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("onlineTrainees")) || [];
    const allTrainees = [...staticTrainees, ...stored];
    setTrainees(allTrainees);
  }, []);

  const handleEdit = (trainee) => {
    setCurrentTrainee({ ...trainee });
    setShowModal(true);
  };

  const handleSave = () => {
    const updated = trainees.map((t) =>
      t.id === currentTrainee.id ? currentTrainee : t
    );

    setTrainees(updated);

    // Save only non-static trainees to localStorage
    const nonStatic = updated.filter((t) => t.id > 6);
    localStorage.setItem("onlineTrainees", JSON.stringify(nonStatic));

    setShowModal(false);
  };

  return (
    <div className="d-flex">
      <div className="container-fluid">
        <h5 className="mt-3">
          Trainer Name &gt;
          <Link to="/online" className="text-decoration-none text-black mx-1">
            Online Trainees
          </Link>
          &gt;
          <Link to="/offline" className="text-decoration-none mx-1 text-black">
            Offline Trainees
          </Link>
        </h5>

        <div className="container mt-4">
          <div className="row gx-2 gy-3">
            {trainees.map((trainee, index) => (
              <div className="col-md-4 d-flex justify-content-center" key={index}>
                <TraineeCard {...trainee} onEdit={() => handleEdit(trainee)} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🟡 Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Trainee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentTrainee && (
            <>
              <Form.Group className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={currentTrainee.name}
                  onChange={(e) =>
                    setCurrentTrainee({ ...currentTrainee, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  value={currentTrainee.course}
                  onChange={(e) =>
                    setCurrentTrainee({ ...currentTrainee, course: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={currentTrainee.email}
                  onChange={(e) =>
                    setCurrentTrainee({ ...currentTrainee, email: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  value={currentTrainee.phone}
                  onChange={(e) =>
                    setCurrentTrainee({ ...currentTrainee, phone: e.target.value })
                  }
                />
              </Form.Group>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OnlineTrainees;
