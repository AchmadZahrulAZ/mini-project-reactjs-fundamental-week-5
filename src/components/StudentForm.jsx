import React from 'react';
import PropTypes from 'prop-types';

const StudentForm = ({ toggleModal, student, onChange, onSubmit, isEdit }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{isEdit ? 'Edit Student' : 'Add New Student'}</h5>
          <button 
            type="button" 
            className="btn-close" 
            aria-label="Close"
            onClick={() => toggleModal(isEdit)}
          ></button>
        </div>
        <div className="modal-body">
          <form>
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input 
                type="text" 
                name="name" 
                value={student.name} 
                onChange={onChange} 
                id="name" 
                className="form-control" 
                required 
              />
            </div>
            {/* Class */}
            <div className="mb-3">
              <label htmlFor="class" className="form-label">
                Class:
              </label>
              <input 
                type="text" 
                name="class" 
                value={student.class} 
                onChange={onChange} 
                id="class" 
                className="form-control" 
                required 
              />
            </div>
            {/* Year */}
            <div className="mb-3">
              <label htmlFor="year" className="form-label">
                Year:
              </label>
              <input 
                type="number" 
                name="year" 
                value={student.year} 
                onChange={onChange} 
                id="year" 
                min="2000" 
                max="2024" 
                className="form-control" 
                required 
              />
              <small className="form-text text-muted">Year must be between 2000 and 2024.</small>
            </div>
            {/* NIM */}
            <div className="mb-3">
              <label htmlFor="nim" className="form-label">
                NIM:
              </label>
              <input 
                type="text" 
                name="nim" 
                value={student.nim} 
                id="nim" 
                className="form-control" 
                disabled 
              />
              <small className="form-text text-muted">Auto generate unique NIM.</small>
            </div>
            {/* Guardian Name */}
            <div className="mb-3">
              <label htmlFor="guardianName" className="form-label">
                Guardian Name:
              </label>
              <input 
                type="text" 
                name="guardianName" 
                value={student.guardianName} 
                onChange={onChange} 
                id="guardianName" 
                className="form-control" 
                required 
              />
            </div>
            {/* Birth Date */}
            <div className="mb-3">
              <label htmlFor="birthDate" className="form-label">
                Birth Date:
              </label>
              <input 
                type="date" 
                name="birthDate" 
                value={student.birthDate} 
                onChange={onChange} 
                id="birthDate" 
                className="form-control" 
                required 
              />
              <small className="form-text text-muted">Please use the ISO 8601 format (YYYY-MM-DD).</small>
            </div>
            {/* Address */}
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <textarea 
                name="address" 
                value={student.address} 
                onChange={onChange} 
                id="address" 
                rows="3" 
                className="form-control" 
                minLength="20" 
                required 
              />
            </div>
            {/* Gender */}
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">Gender:</label>
              <select 
                className="form-control" 
                id="gender" 
                name="gender" 
                value={student.gender} 
                onChange={onChange} 
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </form>
        </div>
        <div className="modal-footer mt-5">
          <button 
            type="button" 
            className={`btn ${isEdit ? 'btn-warning' : 'btn-primary'}`} 
            onClick={onSubmit}
          >
            <i className={`bi ${isEdit ? 'bi-pencil-square' : 'bi-save'}`}></i> {isEdit ? 'Update' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
}

// PropTypes for validation
StudentForm.propTypes = {
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
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
};

export default StudentForm;