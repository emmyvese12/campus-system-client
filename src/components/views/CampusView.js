/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import './css/CampusView.css';

// Take in props data to construct the component
const CampusView = (props) => {
  const { campus, editCampus } = props;
  let image_desc = "The " + campus.name + " campus";
  
  // Render a single Campus view with list of its students
  return (
    <div className="container">
      <h1>{campus.name}</h1>
      <div className="whitebox">
        <img src={campus.imageUrl} className="image" alt={image_desc}></img>
        <p>Address: {campus.address}</p>
        <p>Description: {campus.description}</p>
        <Link to={`/editcampus/${campus.id}`} onClick={() => editCampus(campus.id)}>
          <Button variant="contained" color="primary" type="submit">
            EDIT CAMPUS INFORMATION
          </Button>
        </Link>
        &nbsp;
        <Button variant="contained" color="secondary" type="submit" onClick={() => null}>
          DELETE CAMPUS
        </Button>
        <h2>Student Names</h2>
        { campus.students && (campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id} className="grid-container">
              <Link to={`/student/${student.id}`}>
                <h2>{name}</h2>
              </Link>             
            </div>
          );
        }))}
      </div>
    </div>
  );
};

export default CampusView;