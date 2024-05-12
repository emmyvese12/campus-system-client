import { Component } from 'react';
import EditCampusView from '../views/EditCampusView';
import Header from './Header';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { editCampusThunk } from '../../store/thunks';
import { fetchCampus } from '../../store/actions/actionCreators';

class EditCampusContainer extends Component {
  // Initialize state
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name, 
      address: this.props.address, 
      description: this.props.description,
      imageUrl: this.props.imageUrl,
      redirect: false, 
      redirectId: null
    };
  }

  componentDidMount() {
    // Get campus ID from URL (API link)
    this.props.fetchCampus(this.props.match.params.id);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.

    let id = /[^/]*$/.exec(window.location.href)[0];
    let campus = {
        name: this.state.name, 
        address: this.state.address, 
        description: this.state.description,
        imageUrl: this.state.imageUrl,
    };
    
    try {
      // Edit campus in back-end database
      await this.props.editCampus(id, campus);

      // Update state and trigger redirect to show the updated student
      this.setState({
        name: "",
        address: "",
        description: "",
        imageUrl: "",
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
    // Go back to the single campus view after clicking submit
    if(this.state.redirect) {
      return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
    }
    return (
      <div>
        <Header />
        <EditCampusView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={this.props.campus.name}
          address={this.props.campus.address}
          description={this.props.campus.description}
          imageUrl={this.props.campus.imageUrl}
        />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    campus: state.campus,  // Get the State object from Reducer "campus"
  };
};

const mapDispatch = (dispatch) => {
  return({
      editCampus: (id, campus) => dispatch(editCampusThunk(id, campus)),
      fetchCampus: (id) => dispatch(fetchCampus(id)),
  })
}

export default connect(mapState, mapDispatch)(EditCampusContainer);