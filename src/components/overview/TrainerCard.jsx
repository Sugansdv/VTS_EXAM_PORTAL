import React from "react";

const TrainerCard = ({ name, role, img, trainees }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3 p-2 rounded bg-light">
      <div className="d-flex align-items-center gap-3">
        <img src={img} alt={name} className="rounded-circle" width={50} height={50} />
        <div>
          <h6 className="mb-0">{name}</h6>
          <small className="text-muted">{role}</small>
        </div>
      </div>
      <span className="bg-warning px-3 py-1 rounded">{trainees} Trainees</span>
    </div>
  );
};

export default TrainerCard;
