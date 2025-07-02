import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const correctAnswersPart1 = ['Left', 'Left', 'Left', 'Left', 'Left'];
const correctAnswersPart2 = ['Left', 'Left', 'Left', 'Left', 'Left'];

const TechnicalExamPart2 = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const questions = [
    '6. Where can label text be aligned?',
    '7. Where can label text be aligned?',
    '8. Where can label text be aligned?',
    '9. Where can label text be aligned?',
    '10. Where can label text be aligned?'
  ];
  const options = ['Top', 'Right', 'Center', 'Left'];

  const handleChange = (qIndex, option) =>
    setAnswers(prev => ({ ...prev, [qIndex]: option }));

  const goToPrevious = () => navigate('/technical-exam');

  const handleSubmit = () => {
  const part1Answers = JSON.parse(localStorage.getItem('technicalExamProgress'))?.part1 || {};
  let correctCount = 0;

  // Count correct answers for Part 1
  correctAnswersPart1.forEach((ans, i) => {
    if (part1Answers[i] === ans) correctCount += 1;
  });

  // Count correct answers for Part 2
  correctAnswersPart2.forEach((ans, i) => {
    if (answers[i] === ans) correctCount += 1;
  });

  const score = correctCount * 3; // 🔥 3 marks per correct answer

  const name = localStorage.getItem('currentTraineeName') || 'Unknown';
  const results = JSON.parse(localStorage.getItem('technicalExamResults') || '[]');
  results.push({ name, score, date: new Date().toLocaleString('en-GB') });
  localStorage.setItem('technicalExamResults', JSON.stringify(results));
  localStorage.removeItem('technicalExamProgress');

  navigate('/thankyou', { state: { score } });
};


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
            <button className="btn btn-primary" style={{ backgroundColor: '#0c1248', border: 'none' }} onClick={goToPrevious}>
              Previous
            </button>
            <button className="btn" style={{ backgroundColor: '#d6ff63', color: '#000' }} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalExamPart2;
