import React, { useState, useEffect } from "react";
import priyaImg from "../../assets/images/Img 1.png";
import rithikaImg from "../../assets/images/Img 2.png";
import reshmaImg from "../../assets/images/Img 3.png";
import { useNavigate } from "react-router-dom";

const OverviewRow2 = () => {
    const navigate = useNavigate();
  const staticTrainers = [
    { name: "Priya", role: "UI/UX Designer", trainees: 15, img: priyaImg },
    { name: "Rithika", role: "UI/UX Designer", trainees: 15, img: rithikaImg },
    { name: "Reshma", role: "UI/UX Designer", trainees: 15, img: reshmaImg },
  ];

  const staticExams = [
    { title: "Figma Technical Questions", duration: "30 Minutes", date: "May 15, 2025", time: "2:30 PM" },
    { title: "Figma Practical Questions", duration: "1 Day", date: "May 16, 2025", time: "4:00 PM" },
  ];

  const [dynamicTrainers, setDynamicTrainers] = useState([]);
  const [dynamicExams, setDynamicExams] = useState([]);
  const [showAllTrainers, setShowAllTrainers] = useState(false);

  useEffect(() => {
    const storedTrainers = JSON.parse(localStorage.getItem("dynamicTrainers")) || [];
    const storedExams = JSON.parse(localStorage.getItem("dynamicExams")) || [];
    setDynamicTrainers(storedTrainers);
    setDynamicExams(storedExams);
  }, []);

  useEffect(() => {
    localStorage.setItem("dynamicTrainers", JSON.stringify(dynamicTrainers));
  }, [dynamicTrainers]);

  useEffect(() => {
    localStorage.setItem("dynamicExams", JSON.stringify(dynamicExams));
  }, [dynamicExams]);

  const addTrainer = () => {
    const name = prompt("Enter trainer name:");
    const role = prompt("Enter role:");
    const img = prompt("Enter image URL:");
    const trainees = parseInt(prompt("Number of trainees:"), 10);
    if (name && role && img && !isNaN(trainees)) {
      setDynamicTrainers([...dynamicTrainers, { name, role, img, trainees }]);
    }
  };



  const displayedTrainers = showAllTrainers
    ? [...staticTrainers, ...dynamicTrainers]
    : [...staticTrainers, ...dynamicTrainers].slice(0, 3);

  return (
    <div className="container my-4">
      <div className="row g-4 align-items-start">
        {/* Active Trainers */}
        <div className="col-md-6 d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center mb-2 px-1">
            <h5 className="fw-bold mb-0">Active Trainers</h5>
            <span
              className="text-primary fw-semibold text-decoration-none"
              style={{ cursor: "pointer" }}
              onClick={() => setShowAllTrainers(!showAllTrainers)}
            >
              {showAllTrainers ? "Show Less" : "View All"}
            </span>
          </div>
          <div className="rounded p-3 flex-grow-1 d-flex flex-column" style={{ backgroundColor: "#d8f275" }}>
            <div className="d-flex justify-content-end mb-3">
              <button className="btn btn-dark btn-sm" onClick={addTrainer}>+ Add New</button>
            </div>
            {displayedTrainers.map((trainer, idx) => (
              <div key={idx} className="d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center">
                  <img src={trainer.img} alt={trainer.name} className="rounded-circle me-3" style={{ width: 50, height: 50, objectFit: "cover" }} />
                  <div>
                    <div className="fw-bold">{trainer.name}</div>
                    <div className="text-muted" style={{ fontSize: "0.9rem" }}>{trainer.role}</div>
                  </div>
                </div>
                <span className="badge bg-light text-dark px-3 py-2 me-lg-5">{trainer.trainees} Trainees</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Exams */}
        <div className="col-md-6 d-flex flex-column mt-5 pt-2">
          <div className="rounded p-3 flex-grow-1 d-flex flex-column" style={{ backgroundColor: "#d8f275" }}>
            <div className="d-flex justify-content-between align-items-center mb-2 px-1">
            <h5 className="fw-bold mb-0">Upcoming Exams</h5>
       <button
                className="btn btn-dark btn-sm py-2 px-4"
                onClick={() => navigate("/upload-qp")}
              >
                Upload New Exam
              </button>
          </div>
            {[...staticExams, ...dynamicExams].map((exam, idx) => (
              <div key={idx} className="border border-primary rounded p-2 mb-3 bg-transparent">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <div className="fw-semibold">{exam.title}</div>
                    <div className="text-muted" style={{ fontSize: "0.9rem" }}>Duration: {exam.duration}</div>
                  </div>
                  <div className="text-end">
                    <div className="fw-bold">{exam.date}</div>
                    <div style={{ fontSize: "0.9rem" }}>{exam.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewRow2;
