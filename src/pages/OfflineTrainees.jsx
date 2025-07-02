import React, { useState, useEffect } from 'react';
import TraineeCard from '../components/TraineeCard';
import profileImg from '../assets/images/Img 5.png';
import { Link } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';

const OfflineTrainees = () => {
  const staticTrainees = [
    {
      id: 1,
      name: "Ramesh",
      duration: "90 Days",
      course: "UI/UX Design",
      mode: "Offline",
      email: "ramesh.uiux@vts.in",
      phone: "8657544011",
      image: profileImg,
    },
    {
      id: 2,
      name: "Diya",
      duration: "90 Days",
      course: "UI/UX Design",
      mode: "Offline",
      email: "diya.uiux@vts.in",
      phone: "8901234567",
      image: profileImg,
    },
    {
      id: 3,
      name: "Geetha",
      duration: "90 Days",
      course: "UI/UX Design",
      mode: "Offline",
      email: "geetha.uiux@vts.in",
      phone: "9876501234",
      image: profileImg,
    },
    {
      id: 4,
      name: "Keerthi",
      duration: "90 Days",
      course: "UI/UX Design",
      mode: "Offline",
      email: "keerthi.uiux@vts.in",
      phone: "9998887770",
      image: profileImg,
    },
    {
      id: 5,
      name: "Sujitha",
      duration: "90 Days",
      course: "UI/UX Design",
      mode: "Offline",
      email: "sujitha.uiux@vts.in",
      phone: "9123451234",
      image: profileImg,
    },
    {
      id: 6,
      name: "Ramu",
      duration: "90 Days",
      course: "UI/UX Design",
      mode: "Offline",
      email: "ramu.uiux@vts.in",
      phone: "9345609871",
      image: profileImg,
    },
  ];

  const [trainees, setTrainees] = useState([]);
  const [currentTrainee, setCurrentTrainee] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("offlineTrainees")) || [];
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

    const nonStatic = updated.filter((t) => t.id > 6); // Save only dynamic ones
    localStorage.setItem("offlineTrainees", JSON.stringify(nonStatic));

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

      {/* 🔧 Edit Modal */}
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

export default OfflineTrainees;
