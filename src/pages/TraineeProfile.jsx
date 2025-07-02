import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

const TraineeProfile = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // ✅ Get from localStorage or state fallback
  const name = localStorage.getItem('userName') || state?.name || 'N/A';
  const image = localStorage.getItem('userImage') || state?.image || '';
  const course = state?.course || 'N/A';

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const radiumGreen = '#d7f96a';

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const getCalendarDays = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const days = [];
    let dayCount = 1;

    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || dayCount > totalDays) {
          row.push('');
        } else {
          row.push(dayCount++);
        }
      }
      days.push(row);
    }
    return days;
  };

  const calendarDays = getCalendarDays(month, year);

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(y => y - 1);
    } else {
      setMonth(m => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(y => y + 1);
    } else {
      setMonth(m => m + 1);
    }
  };

  const handleStartExam = () => {
    navigate('/exam', { state: { name, image, today } });
  };

  return (
    <div className="container-fluid">
      <div className="row mt-3 g-4">
        {/* Left */}
        <div className="col-12 col-md-6">
          <div className="d-flex align-items-center border border-primary p-3 rounded mb-3 w-100">
            <img src={image} alt={name} className="rounded-circle me-3" width="50" height="50" />
            <div>
              <h6 className="mb-0">Welcome {name}</h6>
              <small className="text-muted">It’s {today}</small>
            </div>
          </div>

          <div className="card p-3 w-100" style={{ backgroundColor: radiumGreen }}>
            <div className="d-flex justify-content-between">
              <strong>Upcoming Exams</strong>
              <button className="btn btn-dark btn-sm" onClick={handleStartExam}>
                Start an Exam
              </button>
            </div>

            <div className="mt-3 border border-primary p-2 rounded bg-transparent">
              <strong>Figma Technical Questions</strong><br />
              <small>Duration: 30 Minutes</small><br />
              <small className="text-muted">May 15, 2025 – 2:30 PM</small>
            </div>

            <div className="mt-3 border border-primary p-2 rounded bg-transparent">
              <strong>Figma Practical Questions</strong><br />
              <small>Duration: 1 Day</small><br />
              <small className="text-muted">May 16, 2025 – 4:00 PM</small>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="col-12 col-md-6">
          <div className="card text-center p-4 w-100" style={{ backgroundColor: '#e6ffb3' }}>
            <img src={image} alt={name} className="rounded-circle mx-auto mb-3" width="100" height="100" />
            <h5>{name}</h5>
            <p className="text-muted">{course}</p>

            <h6 className="text-start">Course Progress</h6>
            <div className="mb-2">
              <div className="d-flex justify-content-between">
                <small>Figma</small><small>95%</small>
              </div>
              <div className="progress" style={{ height: 15 }}>
                <div className="progress-bar" style={{ width: '95%', backgroundColor: radiumGreen }}></div>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-between">
                <small>Adobe Photoshop</small><small>20%</small>
              </div>
              <div className="progress" style={{ height: 15 }}>
                <div className="progress-bar" style={{ width: '20%', backgroundColor: radiumGreen }}></div>
              </div>
            </div>

            {/* Calendar */}
            <h6 className="text-start mt-4">Exam Calendar</h6>
            <div className="bg-dark rounded p-3 overflow-auto">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-bold" style={{ color: radiumGreen }}>
                  {monthNames[month]} {year}
                </span>
                <div>
                  <button className="btn btn-sm btn-outline-light me-1 px-2 py-0" onClick={handlePrevMonth}>‹</button>
                  <button className="btn btn-sm btn-outline-light px-2 py-0" onClick={handleNextMonth}>›</button>
                </div>
              </div>

              <table className="table table-borderless table-sm mb-0 text-center" style={{ backgroundColor: 'black', minWidth: '100%' }}>
                <thead>
                  <tr>
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                      <th key={d} style={{ color: radiumGreen, backgroundColor: 'black' }}>
                        {d}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="small fw-bold">
                  {calendarDays.map((week, i) => (
                    <tr key={i}>
                      {week.map((day, j) => {
                        const isToday =
                          day === new Date().getDate() &&
                          month === new Date().getMonth() &&
                          year === new Date().getFullYear();

                        return (
                          <td
                            key={j}
                            style={{
                              width: '40px',
                              height: '40px',
                              backgroundColor: 'black',
                              color: isToday ? 'white' : radiumGreen,
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              padding: 0,
                            }}
                          >
                            <div
                              style={{
                                width: 28,
                                height: 28,
                                borderRadius: '50%',
                                backgroundColor: isToday ? radiumGreen : 'transparent',
                                color: isToday ? 'white' : radiumGreen,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: 'auto',
                              }}
                            >
                              {day}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraineeProfile;
