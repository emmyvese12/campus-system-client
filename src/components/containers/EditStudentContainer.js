import { Component } from 'react';
import EditStudentView from '../views/EditStudentView';
import Header from './Header';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { editStudentThunk } from '../../store/thunks';
import { fetchStudent } from '../../store/actions/actionCreators';

class EditStudentContainer extends Component {
  // Initialize state
  constructor(props) {
    super(props);
    this.state = {
      firstname: this.props.student.firstname, 
      lastname: this.props.student.lastname, 
      email: this.props.student.email,
      imageURL: this.props.student.imageURL,
      gpa: this.props.student.gpa,
      campusId: this.props.student.campusId, 
      redirect: false, 
      redirectId: null
    };
  }

  componentDidMount() {
    // Get student ID from URL (API link)
    this.props.fetchStudent(this.props.match.params.id);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.

    if(this.state.gpa === "") {
        this.state.gpa = 0;
    }

    let id = /[^/]*$/.exec(window.location.href)[0];
    let student = {
        id: this.state.id,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        imageURL: this.state.imageURL,
        gpa: this.state.gpa,
        campusId: this.state.campusId
    };
    
    try {
      await this.props.editStudent(id, student);
      // Update state and trigger redirect to show the updated student
      this.setState({
        firstname: "",
        lastname: "",
        email: "",
        imageURL: "",
        gpa: "",
        campusId: "",
        redirect: true,
        redirectId: id
      });
    } catch(error) {
      alert("Please enter a valid campusID.");
    }
  };

  // Unmount when the component is being removed from the DOM:
  componentWillUnmount() {
    this.setState({redirect: false, redirectId: null});
  }

  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/student/${this.state.redirectId}`}/>)
    }
    return (
      <div>
        <Header />
        <EditStudentView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          firstname={this.props.student.firstname}
          lastname={this.props.student.lastname}
          email={this.props.student.email}
          imageURL={this.props.student.imageURL}
          gpa={this.props.student.gpa}
          campusId={this.props.student.campusId}
        />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    student: state.student,  // Get the State object from Reducer "student"
  };
};

const mapDispatch = (dispatch) => {
  return({
      editStudent: (id, student) => dispatch(editStudentThunk(id, student)),
      fetchStudent: (id) => dispatch(fetchStudent(id)),
  })
}

export default connect(mapState, mapDispatch)(EditStudentContainer);