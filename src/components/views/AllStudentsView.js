/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";
import './css/AllStudentsView.css';

const AllStudentsView = (props) => {
  const { students, deleteStudent } = props;
  // If there is no student, display a message
  if (!students.length) {
    return (
      <div>
        <p>There are no students.</p>
        <Link to={`newstudent`}>
          <button>Add New Student</button>
        </Link>
      </div>
    );
  }

  // If there is at least one student, render All Students view 
  return (
    <div>
      <h1>All Students</h1>
      <hr />

      {students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <br></br>
              <img src={student.imageURL} className="picture" alt="Can't render img"></img>
              <h2>{name}</h2>
            </Link>
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
            <br></br>
            <br></br>
            <hr />
          </div>
        );
      }
      )}
      <br />
      <Link to={`/newstudent`}>
        <button>Add New Student</button>
      </Link>
      <br /><br />
    </div>
  );
};


export default AllStudentsView;