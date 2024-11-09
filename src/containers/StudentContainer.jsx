import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StudentTable from '../components/StudentTable';
import StudentForm from '../components/StudentForm';
import StudentDetail from '../components/StudentDetail';

const StudentContainer = () => {
  const [modalForm, setModalForm] = useState(false);
  const [modalDetail, setModalDetail] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editedStudent, setEditedStudent] = useState(null);
  const [students, setStudents] = useState([
    {
      name: 'Achmad Zahrul Ali Zadan',
      class: 'XII MIPA 1',
      year: 2024,
      nim: '00002401',
      guardianName: 'Siti',
      birthDate: '',
      address: 'Jl. Jenderal',
      gender: '',
    },
  ]);
  const [currentStudent, setCurrentStudent] = useState({
    name: '',
    class: '',
    year: 2000,
    nim: '',
    guardianName: '',
    birthDate: '',
    address: '',
    gender: '',
  });

  const generateUniqueNIM = (year) => {
    let baseNIM = `0000${year}`;
    let uniqueNIM;
    let counter = 1;

    do {
      uniqueNIM = `${baseNIM}${String(counter).padStart(3, '0')}`;
      counter++;
    } while (students.some(student => student.nim === uniqueNIM));

    return uniqueNIM;
  };

  const toggleModalForm = (isEditMode = false) => {
    setIsEdit(isEditMode);
    setModalForm(prev => !prev);
  };

  const toggleModalDetail = () => {
    setModalDetail(prev => !prev);
  };

  const handleEditStudent = (student, index) => {
    setCurrentStudent(student);
    setEditedStudent(index);
    toggleModalForm(true);
  };

  const handleDeleteStudent = (index) => {
    setStudents(prevStudents => prevStudents.filter((_, i) => i !== index));
  };

  const handleInfoStudent = (student) => {
    setCurrentStudent(student);
    toggleModalDetail();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentStudent(prevStudent => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleAddOrUpdateStudent = () => {
    const year = parseInt(currentStudent.year, 10);
    if (year < 2000 || year > 2024) {
      alert("Year must be between 2000 and 2024.");
      return;
    }

    if (currentStudent.address.length < 20) {
      alert("Address must be at least 20 characters long.");
      return;
    }

    if (isEdit && editedStudent !== null) {
      setStudents(prevStudents => {
        const updatedStudents = [...prevStudents];
        updatedStudents[editedStudent] = currentStudent;
        return updatedStudents;
      });
    } else {
      if (!currentStudent.nim) {
        currentStudent.nim = generateUniqueNIM(currentStudent.year);
      }
      setStudents(prevStudents => [...prevStudents, currentStudent]);
    }

    setCurrentStudent({
      name: '',
      class: '',
      year: 2000,
      nim: '',
      guardianName: '',
      birthDate: '',
      address: '',
      gender: '',
    });
    toggleModalForm(isEdit);
  };

  return (
    <>
      <StudentTable
        students={students}
        handleEditStudent={handleEditStudent}
        toggleModalForm={toggleModalForm}
        toggleModalDetail={handleInfoStudent}
        handleDeleteStudent={handleDeleteStudent}
      />
      {modalForm && (
        <StudentForm
          isEdit={isEdit}
          onSubmit={handleAddOrUpdateStudent}
          onChange={handleInputChange}
          toggleModal={toggleModalForm}
          student={currentStudent}
        />
      )}
      {modalDetail && (
        <StudentDetail
          toggleModal={toggleModalDetail}
          student={currentStudent}
        />
      )}
    </>
  );
}

// Validasi tipe data props
StudentContainer.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      class: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      nim: PropTypes.string.isRequired,
      guardianName: PropTypes.string.isRequired,
      birthDate: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
    })
  ),
};

export default StudentContainer;