/*==================================================
EditCampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the edit campus page.
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

const EditCampusView = (props) => {
  const { handleChange, handleSubmit, name, imageUrl, address, description } = props;
  const classes = useStyles();

  // Render an Edit campus view with an input form
  return (
    <div>
      <h1>Edit Campus</h1>
      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle} style={{ backgroundColor: 'white' }}>
            <Typography style={{ fontWeight: 'bold', fontSize: '20px', color: '#11153e' }}>
              Campus
            </Typography>
          </div>

          <form name="form" style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Campus Name: </label>
            <input required value={name} type="text" name="name" onChange={(e) => handleChange(e)} />
            <br />
            <br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Image URL: </label>
            <input value={imageUrl} type="text" name="imageUrl" onChange={(e) => handleChange(e)} />
            <br />
            <br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Address: </label>
            <input value={address} type="text" name="address" onChange={(e) => handleChange(e)} />
            <br />
            <br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Description: </label>
            <input placeholder="Enter description here" style={{ width: '300px', height: '100px', resize: 'both', 
            padding: '5px', fontSize: '16px', verticalAlign: 'top', minHeight: '20px', maxWidth: '400px', maxHeight: '400px'}}
            required value={description} type="textarea" name="description" onChange={(e) => handleChange(e)} />
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

export default EditCampusView;