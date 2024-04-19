import { editStudent } from "../../store/actions/actionCreators";

/*==================================================
EditStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  },
  customizeAppBar: {
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));

const EditStudentView = (props) => {
  const { handleChange, handleSubmit, firstname, lastname, email, imageURL, gpa, campusId } = props;
  const classes = useStyles();

  // Render an Edit Student view with an input form
  return (
    <div>
      <h1>Edit Student</h1>
      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle} style={{ backgroundColor: 'white' }}>
            <Typography style={{ fontWeight: 'bold', fontSize: '20px', color: '#11153e' }}>
              Edit a student
            </Typography>
          </div>

          <form name="form" style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>First Name: </label>
            <input required value={firstname} type="text" name="firstname" onChange={(e) => handleChange(e)} />
            <br />
            <br />

            <label name="form" style={{ color: '#11153e', fontWeight: 'bold' }}>Last Name: </label>
            <input required value={lastname} type="text" name="lastname" onChange={(e) => handleChange(e)} />
            <br />
            <br />

            <label name="form" style={{ color: '#11153e', fontWeight: 'bold' }}>Email: </label>
            <input required value={email} type="email" name="email" onChange={(e) => handleChange(e)} />
            <br />
            <br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Image URL: </label>
            <input value={imageURL} type="text" name="imageURL" onChange={(e) => handleChange(e)} />
            <br />
            <br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>GPA: </label>
            <input min="0" max="4" value={gpa} type="number" step="0.01" name="gpa" onChange={(e) => handleChange(e)} />
            <br />
            <br />


            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Campus Id: </label>
            <input required value={campusId} type="text" name="campusId" onChange={(e) => handleChange(e)} />
            <br />
            <br />

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditStudentView;