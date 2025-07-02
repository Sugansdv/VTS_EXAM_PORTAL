import React from "react";

const ExamCard = ({ title, duration, date, time }) => {
  return (
    <div className="bg-light p-2 px-3 rounded mb-2">
      <h6 className="mb-1">{title}</h6>
      <small className="text-muted">Duration: {duration}</small>
      <div className="d-flex justify-content-between mt-2">
        <span className="fw-bold">{date}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default ExamCard;
