import React from "react";

const TrainerCard = ({ name, role, img, trainees }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3 p-3 rounded bg-light shadow-sm">
      <div className="d-flex align-items-center gap-3">
        <img
          src={img}
          alt={name || "Trainer"}
          className="rounded-circle border"
          width={50}
          height={50}
        />
        <div>
          <h6 className="mb-1 fw-semibold">{name || "Unnamed"}</h6>
          <small className="text-muted">{role || "No Role Specified"}</small>
        </div>
      </div>
      <span className="badge bg-warning text-dark px-3 py-2 rounded">
        {trainees} Trainee{trainees > 1 ? "s" : ""}
      </span>
    </div>
  );
};

export default TrainerCard;
