/*==================================================
StudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { editStudentThunk, fetchStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";

class StudentContainer extends Component {
  // Get student data from back-end database
  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }

  // after the user clicks the unenroll button, edit the student and remove the campus
  handleOnClick = async (student) => {
    let person = {
      id: student.id,
      firstname: student.firstname,
      lastname: student.lastname,
      email: student.email,
      imageURL: student.imageURL,
      gpa: student.gpa,
      campusId: null
    };
    await this.props.editStudent(person.id, person);
    window.location.reload(); // refresh the page after updating the student
  };
  
  // Render Student view by passing student data as props to the corresponding View component
  render() {
    return (
      <div>
        <Header />
        <StudentView
          student={this.props.student}
          editStudent={this.props.editStudent}
          unenrollStudent={this.handleOnClick}  />
      </div>
    );
  }
}

// The following 2 input arguments are passed to the "connect" function used by "StudentContainer" to connect to Redux Store.  
// The following 2 input arguments are passed to the "connect" function used by "AllCampusesContainer" component to connect to Redux Store.
const mapState = (state) => {
  return {
    student: state.student,  // Get the State object from Reducer "student"
  };
};
// 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (id, student) => dispatch(editStudentThunk(id, student))
  };
};

// Export store-connected container by default
// StudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(StudentContainer);