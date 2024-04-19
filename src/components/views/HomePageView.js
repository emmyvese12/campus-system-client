/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import { Link } from "react-router-dom";
import './css/HomePageView.css';
import campusImg from './img/campusImg.jpeg'
import studentImg from './img/studentImg.jpeg'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  links:{
    textDecoration: 'none',
  }
}));

const HomePageView = () => {
  // Render Home page view
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <div className="container">
      <h1>Home Page</h1>

      <div className="child">
        <h2>View Campuses</h2>
        <Link className={classes.links} to={'/campuses'} >
          <Button variant="contained" color="primary">
            Click Here!
          </Button>
        </Link>
        <br></br>
        <img src={campusImg} alt="Campus Image"></img>
      </div>

      <div className="child">
        <h2>View Students</h2>
        <Link className={classes.links} to={'/students'} >
          <Button variant="contained" color="primary">
            Click Here!
          </Button>
        </Link>
        <br></br>
        <img src={studentImg} alt="Student Image"></img>
      </div>
</div>
    </div>
  );    
}

export default HomePageView;