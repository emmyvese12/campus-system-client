/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const AllCampusesView = (props) => {
  // If there is no campus, display a message, and allow to add a new campus
  if (!props.allCampuses.length) {
    return (
    <div>
      <p>There are no campuses.</p>
      <Link to={`/newcampus`}>
      <Button variant="contained" type="submit" style={
      {backgroundColor: "#808080",  
        borderColor: "#808080", 
        color: "white"}}>
        Add New Campus
      </Button>
      </Link>
      </div>
    );
  }

  // If there is at least one campus, render All Campuses view, and allow to add a new campus
  return (
    <div>
      <h1>All Campuses</h1>

      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <h4>campus id: {campus.id}</h4>
          <p>{campus.address}</p>
          <p>{campus.description}</p>
          <hr/>
        </div>
      ))}
      <br/>
      <Link to={`/newcampus`}>
      <Button variant="contained" type="submit" style={
      {backgroundColor: "#808080",  
        borderColor: "#808080", 
        color: "white"}}>
        Add New Campus
      </Button>
      </Link>
      <br/><br/>
    </div>
  );
};

// Validate data type of the props passed to component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;