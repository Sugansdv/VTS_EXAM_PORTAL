import React from 'react';
import Sidebar from '../components/Sidebar';
import UploadBox from '../components/UploadBox';

const UploadQuestionPaper = () => {
  return (
    <div className="d-flex">
      <div className="container-fluid p-4">
        <UploadBox label="Upload Technical Question Paper" />
        <UploadBox label="Upload Practical Question Paper" />
      </div>
    </div>
  );
};

export default UploadQuestionPaper;
