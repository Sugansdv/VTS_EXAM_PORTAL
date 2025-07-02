import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Exam = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
useEffect(() => {
      document.title = 'VTS_Exam_Portal | Exam';
    }, []);
  const name = localStorage.getItem('userName') || state?.name || 'N/A';
  const image = localStorage.getItem('userImage') || state?.image || '';

  const radiumGreen = '#d7f96a';

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const exams = [
    {
      group: 'Technical Questions',
      title: 'Figma Technical Questions',
      duration: '30 Minutes',
      date: 'May 15, 2025',
      time: '2:30 PM',
      route: '/technical-exam',
    },
    {
      group: 'Practical Questions',
      title: 'Figma Practical Questions',
      duration: '1 Day',
      date: 'May 16, 2025',
      time: '4:00 PM',
      route: null,
    },
  ];

  const handleStart = (exam) => {
    if (exam.route) {
      localStorage.setItem('currentTraineeName', name);
      navigate(exam.route, { state: { exam } });
    } else {
      alert(`Starting ${exam.title}…`);
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center mb-5">
        {image && (
          <img
            src={image}
            alt={name}
            className="rounded-circle me-3"
            width="48"
            height="48"
          />
        )}
        <div>
          <h5 className="mb-1 fw-semibold">Welcome {name}</h5>
          <small className="text-muted">{`It’s ${today}`}</small>
        </div>
      </div>

      <h4 className="fw-bold mb-3">Upcoming Exams</h4>

      <div
        className="p-4 rounded"
        style={{ backgroundColor: radiumGreen, minHeight: 300 }}
      >
        {exams.map((exam, idx) => (
          <div className="mb-4" key={idx}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <strong>{exam.group}</strong>
              <button
                className="btn btn-dark btn-sm px-3"
                onClick={() => handleStart(exam)}
              >
                Start an Exam
              </button>
            </div>

            <div
              className="d-flex justify-content-between align-items-center border border-primary rounded px-3 py-2"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <div>
                <div className="fw-semibold">{exam.title}</div>
                <small className="text-muted">Duration: {exam.duration}</small>
              </div>

              <div className="text-end">
                <div className="fw-semibold">{exam.date}</div>
                <small className="text-muted">{exam.time}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exam;
