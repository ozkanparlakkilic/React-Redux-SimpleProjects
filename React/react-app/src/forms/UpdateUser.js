
import React, { Component } from "react";
import UserConsumer from "../context";
import axios from 'axios';

class UpdateUser extends Component {
  state = {
    name: "",
    department: "",
    salary: "",
    error : false
  };

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount = async () => {
      const {id} = this.props.match.params;
      const response = await axios.get(`http://localhost:3004/users/${id}`);

      const {name,department,salary} = response.data;

      this.setState({
          name,
          salary,
          department
      });
  }
  
  validateForm = () => {
    const {name,salary,department} = this.state;

    if(name === "" || salary === "" || department === ""){
      return false;
    }
    return true;
  }


  UpdateUser = async (dispatch,e) => {
    e.preventDefault();
    const {id} = this.props.match.params;
    const {name,salary,department} = this.state;
    const updatedUser = {
        name,
        salary,
        department
    };

    if(!this.validateForm()){
        this.setState({
          error : true
        })
        return;
      }

    const response = await axios.put(`http://localhost:3004/users/${id}`,updatedUser);

    dispatch({type : "UPDATE_USER",payload : response.data});
    //Redirect
    this.props.history.push("/");
  };

  render() {
    const { name, department, salary,error } = this.state;

    return (
      <UserConsumer>
        {(value) => {

          const {dispatch} = value;
          return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    {
                      error ? 
                      <div className = "alert alert-danger">Lütfen Bilgilerinizi Eksiksiz Giriniz.</div>
                      : null
                    }
                  <div className="card-header">
                    <h4>Update User Form</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.UpdateUser.bind(this,dispatch)}>
                      <div className="form-group mb-2">
                        <label htmlFor="name" className="mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter name"
                          className="form-control"
                          value={name}
                          onChange={this.changeInput}
                        />
                      </div>
                      <div className="form-group mb-2">
                        <label htmlFor="department" className="mb-1">
                          Department
                        </label>
                        <input
                          type="text"
                          name="department"
                          id="department"
                          placeholder="Enter department"
                          className="form-control"
                          value={department}
                          onChange={this.changeInput}
                        />
                      </div>
                      <div className="form-group mb-2">
                        <label htmlFor="salary" className="mb-1">
                          Salary
                        </label>
                        <input
                          type="text"
                          name="salary"
                          id="salary"
                          placeholder="Enter Salary"
                          className="form-control"
                          value={salary}
                          onChange={this.changeInput}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-warning w-100 mt-2"
                      >
                        Update User
                      </button>
                    </form>
                  </div>
                </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default UpdateUser;
