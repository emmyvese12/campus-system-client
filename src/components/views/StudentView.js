/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";
import './css/StudentView.css';
import Button from '@material-ui/core/Button';

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
            <p style={{marginBottom: "0"}}>GPA: </p>
          }

          {/* Check if student has campus data before rendering */}
          {student.campus && (
            <div>
              <p style={{display: "inline-block", marginRight: "2px"}}>Attends: </p>
              <Link style={{display: "inline-block", marginLeft: "2px"}} to={`/campus/${student.campus.id}` }>
                <h3>{student.campus.name}</h3>
              </Link>
            </div>
          )}
          {!student.campus && (
            <div>
               <p style={{display: "inline-block", marginRight: "2px"}}>Attends: </p>
              <h3 style={{display: "inline-block", marginLeft: "2px"}}>{student.firstname} {student.lastname} is not enrolled in a college.</h3>
            </div>
          )}
          <Link to={`/editstudent/${student.id}`} onClick={() => editStudent(student.id)}>
            <Button variant="contained" color="primary" type="submit">Edit</Button>
          </Link>
        </div>
      </div>
    </div>
  );

};

export default StudentView;