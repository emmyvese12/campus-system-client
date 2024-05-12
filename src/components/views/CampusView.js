/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
import './css/CampusView.css';

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;
  
  // Render a single Campus view with list of its students
  return (
    <div className="container">
      <h1>{campus.name}</h1>
      <div className="whitebox">
        <img src={campus.imageUrl} className="image"></img>
        <p>Address: {campus.address}</p>
        <p>Description: {campus.description}</p>
        <button className="editButton" type="button" onClick="">
          Edit Campus Information
        </button>
        <button className="deleteButton" type="button" onClick={() => null}>
          Delete Campus
        </button>
        <h2>Student Names</h2>
        {campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id} className="grid-container">
              <Link to={`/student/${student.id}`}>
                <h2>{name}</h2>
              </Link>             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CampusView;