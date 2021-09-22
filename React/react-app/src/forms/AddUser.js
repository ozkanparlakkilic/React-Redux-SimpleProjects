import React, { Component } from "react";
import posed from "react-pose";
import UserConsumer from "../context";
import axios from 'axios';

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block",
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none",
    },
  },
});

class AddUser extends Component {
  state = {
    visible: true,
    name: "",
    department: "",
    salary: "",
    error : false
  };

  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validateForm = () => {
    const {name,salary,department} = this.state;

    if(name === "" || salary === "" || department === ""){
      return false;
    }
    return true;
  }

  addUser = async (dispatch,e) => {
    e.preventDefault();
    const { name, department, salary } = this.state;

    const newUser = {
      name: name,
      department: department,
      salary: salary,
    };

    if(!this.validateForm()){
      this.setState({
        error : true
      })
      return;
    }

    await axios.post(`http://localhost:3004/users/`,newUser);

    dispatch({ type: "ADD_USER", payload: newUser });

    //Redirect
    this.props.history.push("/");
  };

  render() {
    const { visible, name, department, salary,error } = this.state;

    return (
      <UserConsumer>
        {(value) => {

          const {dispatch} = value;
          return (
            <div className="col-md-8 mb-4">
              <button
                onClick={this.changeVisibility}
                className="btn btn-dark w-100 mb-2"
              >
                {visible ? "Hide Form" : "Show Form"}
              </button>

              <Animation pose={visible ? "visible" : "hidden"}>
                <div className="card">
                  <div className="card-header">
                    <h4>Add User Form</h4>
                  </div>
                  <div className="card-body">
                    {
                      error ? 
                      <div className = "alert alert-danger">Lütfen Bilgilerinizi Eksiksiz Giriniz.</div>
                      : null
                    }
                    <form onSubmit={this.addUser.bind(this,dispatch)}>
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
                        className="btn btn-primary w-100 mt-2"
                      >
                        Add User
                      </button>
                    </form>
                  </div>
                </div>
              </Animation>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default AddUser;
