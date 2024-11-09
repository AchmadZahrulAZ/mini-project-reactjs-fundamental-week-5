import React from 'react';
import PropTypes from 'prop-types';

const StudentDetail = ({ toggleModal, student }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Student Detail</h5>
          <button 
            type="button" 
            className="btn-close"
            data-bs-dismiss="modal" 
            aria-label="Close"
            onClick={toggleModal}
          ></button>
        </div>
        <div className="modal-body">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Class:</strong> {student.class}</p>
          <p><strong>Year:</strong> {student.year}</p>
          <p><strong>NIM:</strong> {student.nim}</p>
          <p><strong>Guardian:</strong> {student.guardianName}</p>
          <p><strong>BirthDate:</strong> {student.birthDate}</p>
          <p><strong>Address:</strong> {student.address}</p>
          <p><strong>Gender:</strong> {student.gender}</p>
        </div>
      </div>
    </div>
  );
}

// PropTypes for validation
StudentDetail.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    nim: PropTypes.string.isRequired,
    guardianName: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }).isRequired,
};

export default StudentDetail;