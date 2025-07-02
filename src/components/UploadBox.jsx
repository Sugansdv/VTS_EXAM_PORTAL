import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const UploadBox = ({ label }) => {
  return (
    <div className="border border-success rounded p-4 mb-4" style={{ borderColor: '#d6ff63' }}>
      <h6>{label}</h6>
      <div
        className="border border-success border-dashed d-flex flex-column align-items-center justify-content-center p-5 mt-3"
        style={{ borderColor: '#d6ff63', minHeight: '150px', borderStyle: 'dashed' }}
      >
        <FaCloudUploadAlt size={40} color="#d6ff63" className="mb-3" />
        <p>Drag and drop your files here</p>
        <p className="mb-2">or</p>
        <button className="btn btn-dark btn-sm mb-2">Browse Files</button>
        <small className="text-muted">
          Supported formats: PDF, DOC, DOCX (Max: 10MB)
        </small>
      </div>
    </div>
  );
};

export default UploadBox;
