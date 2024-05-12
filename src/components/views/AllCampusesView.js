/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import './css/AllCampusesView.css';

const AllCampusesView = (props) => {
  // If there is no campus, display a message, and allow to add a new campus
  if (!props.allCampuses.length) {
    return (
    <div className = "container">
      <p>There are no campuses.</p>
      <Link to={`/newcampus`}>
      <Button variant="contained" color="primary" type="submit">
        Add New Campus
      </Button>
      </Link>
      </div>
    );
  }

  // If there is at least one campus, sort campus by ID before rendering 
  // render All Campuses view, and allow to add a new campus
  return (
    <div className = "container">
      <h1>All Campuses</h1>

      {props.allCampuses.sort((campus1, campus2) => campus1.id - campus2.id).map((campus) => (
        <div key={campus.id} className="whitebox">
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <h4>Campus ID: {campus.id}</h4>
          <img src={campus.imageUrl} className="image"></img>
          <hr/>
        </div>
      
      ))}
      <br/>
      <Link to={`/newcampus`}>
      <Button variant="contained" color="primary" type="submit">
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