import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const TechnicalExamPart1 = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const traineeName = localStorage.getItem("currentTraineeName");

  const questions = [
    "1. Where can label text be aligned?",
    "2. Where can label text be aligned?",
    "3. Where can label text be aligned?",
    "4. Where can label text be aligned?",
    "5. Where can label text be aligned?",
  ];
  const options = ["Top", "Right", "Center", "Left"];
  const [answers, setAnswers] = useState({});

  const handleChange = (qIndex, option) =>
    setAnswers((prev) => ({ ...prev, [qIndex]: option }));

  const goToNext = () => {
    const progress = JSON.parse(
      localStorage.getItem("technicalExamProgress") || "{}"
    );
    progress.part1 = answers;
    localStorage.setItem("technicalExamProgress", JSON.stringify(progress));
    navigate("/technical-exam1");
  };

  const goToPrevious = () => navigate("/exam");

  return (
    <div className="d-flex">
      <div className="container py-4">
        <h3 className="text-center mb-4 fw-bold">Figma Technical Questions</h3>
        <div className="p-4 rounded" style={{ backgroundColor: "#f0facc" }}>
          {questions.map((question, qIndex) => (
            <div className="mb-4" key={qIndex}>
              <p className="mb-2 fw-medium fs-4">{question}</p>
              <div className="d-flex gap-4 flex-wrap col-md-12 col-sm-6">
                {options.map((opt, oIndex) => (
                  <div
                    key={oIndex}
                    className="form-check form-check-inline fs-4 me-lg-5 custom-radio"
                  >
                    <input
                      type="radio"
                      name={`q${qIndex}`}
                      id={`q${qIndex}_opt${oIndex}`}
                      value={opt}
                      onChange={() => handleChange(qIndex, opt)}
                      checked={answers[qIndex] === opt}
                    />
                    <label htmlFor={`q${qIndex}_opt${oIndex}`}>{opt}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-center gap-3 mt-4">
            <button
              className="btn btn-primary"
              style={{ backgroundColor: "#0c1248", border: "none" }}
              onClick={goToPrevious}
            >
              Previous
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "#d6ff63", color: "#000" }}
              onClick={goToNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalExamPart1;
