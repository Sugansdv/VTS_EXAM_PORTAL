import React from 'react';
import TraineeCard from '../components/TraineeCard';
import profileImg from '../assets/images/Img 5.png';
import { Link } from 'react-router-dom';

const OfflineTrainees = () => {
  const trainees = [
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
      name: "Krish",
      duration: "90 Days",
      course: "UI/UX Design",
      mode: "Offline",
      email: "krish.uiux@vts.in",
      phone: "8901234567",
      image: profileImg,
    },
    {
      id: 3,
      name: "Vaishali",
      duration: "90 Days",
      course: "UI/UX Design",
      mode: "Offline",
      email: "vaish.uiux@vts.in",
      phone: "9876501234",
      image: profileImg,
    },
    {
      id: 4,
      name: "Lavanya",
      duration: "90 Days",
      course: "UI/UX Design",
      mode: "Offline",
      email: "lavi.uiux@vts.in",
      phone: "9998887770",
      image: profileImg,
    },
    {
      id: 5,
      name: "Arun",
      duration: "90 Days",
      course: "UI/UX Design",
      mode: "Offline",
      email: "arun.uiux@vts.in",
      phone: "9123451234",
      image: profileImg,
    },
    {
      id: 6,
      name: "Sam",
      duration: "90 Days",
      course: "UI/UX Design",
      mode: "Offline",
      email: "sam.uiux@vts.in",
      phone: "9345609871",
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

export default OfflineTrainees;
