/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";
import './css/StudentView.css';

const StudentView = (props) => {
  const { student, editStudent, unenrollStudent } = props;

  // Render a single Student view 
  return (
    <div>
      <div className="studentView">
        <h1>{student.firstname + " " + student.lastname}</h1>
        <div className="studentInfo">
          <img src={student.imageURL} className="Profilepicture" alt="Can't render img"></img>
          <p>First Name: {student.firstname} </p>
          <p>Last Name: {student.lastname} </p>
          <p>Email: {student.email}</p>

          {/* Render GPA only if it is not empty */}
          {student.gpa &&
            <p>GPA: {student.gpa}</p>
          }
          {!student.gpa &&
            <p>GPA: </p>
          }
          {/* Check if student has campus data before rendering */}
          {student.campus && (
            <Link to={`/campus/${student.campus.id}`}>
              <h3>{student.campus.name}</h3>
            </Link>
          )}
          {!student.campus && (
            <h3>GO TO COLLEGE</h3>
          )}
          <Link to={`/editstudent/${student.id}`} onClick={() => editStudent(student.id)}>
            <button>Edit</button>
          </Link>
          <button style={{ marginLeft: "10px" }} onClick={() => unenrollStudent(student)}>Unenroll</button>
        </div>
      </div>
    </div>
  );

};

export default StudentView;