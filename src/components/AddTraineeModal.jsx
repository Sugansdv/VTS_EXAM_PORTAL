import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import profileImg from "../assets/images/Img 5.png";

const AddTraineeModal = ({ show, handleClose }) => {
  const [form, setForm] = useState({
    name: "",
    duration: "",
    course: "",
    mode: "online",
    email: "",
    phone: "",
    image: profileImg,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = form.mode === "online" ? "onlineTrainees" : "offlineTrainees";
    const existing = JSON.parse(localStorage.getItem(key)) || [];
    const newTrainee = { ...form, id: Date.now() };
    localStorage.setItem(key, JSON.stringify([...existing, newTrainee]));
    handleClose();
    window.location.reload();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Trainee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {["name", "duration", "course", "email", "phone"].map((field) => (
            <Form.Group key={field} className="mb-3">
              <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
              <Form.Control
                type="text"
                name={field}
                required
                value={form[field]}
                onChange={handleChange}
              />
            </Form.Group>
          ))}

          <Form.Group className="mb-3">
            <Form.Label>Mode</Form.Label>
            <Form.Select name="mode" value={form.mode} onChange={handleChange}>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </Form.Select>
          </Form.Group>

          <div className="text-center">
            <Button type="submit" variant="success">Add Trainee</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddTraineeModal;
