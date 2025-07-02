import React, { useEffect, useState } from 'react';
import UploadQuestionsPaper from './UploadQuestionsPaper';

const Development = () => {
  const [trainees, setTrainees] = useState([]);

  useEffect(() => {
    document.title = 'VTS_Exam_Portal | Development';
  }, []);

  return (
    <div className="container-fluid">
      <UploadQuestionsPaper />
    </div>
  );
};

export default Development;
