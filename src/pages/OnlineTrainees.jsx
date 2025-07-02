import React from 'react';
import TraineeCard from '../components/TraineeCard';
import profileImg from '../assets/images/Img 5.png';
import { Link } from 'react-router-dom';

const OnlineTrainees = () => {
  const trainees = [
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
      name: "Vishwa",
      duration: "30 Days",
      course: "UI/UX Design",
      mode: "Online",
      email: "vishwa.uiux@vts.in",
      phone: "9123456780",
      image: profileImg,
    },
    {
      id: 4,
      name: "Santoz",
      duration: "30 Days",
      course: "UI/UX Design",
      mode: "Online",
      email: "santoz..uiux@vts.in",
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
            {trainees.map((trainee) => (
              <div className="col-md-4 d-flex justify-content-center" key={trainee.id}>
                <TraineeCard {...trainee} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineTrainees;
