// src/components/StudentTable.jsx
import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../hooks/useLanguage';

const StudentTable = ({ toggleModalForm, toggleModalDetail, students, handleEditStudent, handleDeleteStudent }) => {
  const { getText } = useLanguage();

  return (
    <div className="table-responsive mt-5">
      <table className="table table-bordered border-dark caption-top">
        <thead>
          <tr>
            <th scope="col" colSpan="4" className="bg-dark bg-gradient">
              <button onClick={() => toggleModalForm(false)} className="float-end btn btn-primary btn-sm">
                <i className="bi bi-plus-circle-fill"></i> {getText('Add New Student', 'Tambah Siswa Baru')}
              </button>
            </th>
          </tr>
          <tr className="text-center">
            <th scope="col" className="bg-black bg-gradient text-white">No</th>
            <th scope="col" className="bg-black bg-gradient text-white">NIM</th>
            <th scope="col" className="bg-black bg-gradient text-white">{getText('Name', 'Nama')}</th>
            <th scope="col" className="bg-black bg-gradient text-white">{getText('Action', 'Aksi')}</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {students.map((student, index) => (
            <tr key={student.nim}>
              <th scope="row">{index + 1}</th>
              <td>{student.nim}</td>
              <td>{student.name}</td>
              <td>
                <button 
                className="btn btn-primary mx-1" onClick={() => toggleModalDetail(student)}
                >
                  <i className="bi bi-info-square-fill"></i>
                </button>
                <button className="btn btn-warning mx-1" onClick={() => handleEditStudent(student, index)}>
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button className="btn btn-danger mx-1" onClick={() => handleDeleteStudent(index)}>
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Validasi tipe data dengan PropTypes
StudentTable.propTypes = {
  toggleModalForm: PropTypes.func.isRequired,
  toggleModalDetail: PropTypes.func.isRequired,
  students: PropTypes.arrayOf(
    PropTypes.shape({
      nim: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleEditStudent: PropTypes.func.isRequired,
  handleDeleteStudent: PropTypes.func.isRequired,
};

export default StudentTable;
