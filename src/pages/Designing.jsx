import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Toolbar from "./Toolbar";

const Designing = () => {
   useEffect(() => {
      document.title = 'VTS_Exam_Portal | Design';
    }, []);
  return (
    <div className="d-flex">
      <div className="container-fluid">

        <div className="mt-4">
          <Toolbar />
        </div>

      </div>
    </div>
  );
};

export default Designing;
