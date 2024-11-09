import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-5">
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button className="btn btn-secondary mt-3" onClick={() => navigate('/')}>
        <i className="bi bi-arrow-left"></i> Back to Homepage
      </button>
    </div>
  );
};

export default NotFound;