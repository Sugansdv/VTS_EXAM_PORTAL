import React, { useState, useEffect } from 'react';
import TraineeCard from '../components/TraineeCard';
import profileImg from '../assets/images/Img 5.png';
import { Link } from 'react-router-dom';

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

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("offlineTrainees")) || [];
    setTrainees([...staticTrainees, ...stored]);
  }, []);

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
                <TraineeCard {...trainee} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfflineTrainees;
