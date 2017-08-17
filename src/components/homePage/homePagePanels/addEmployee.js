import React, {PropTypes} from 'react';
import { Link, browserHistory } from 'react-router';
import validate from 'validate.js';
import update from 'immutability-helper';
import employeeApi from '../../../api/employeeApi';

var profileURLText = {
    paddingTop: "6px",
    paddingRight: "0px"
};

var profURLLabel = {
    paddingLeft: "0px"
};

var profileURLInput = {
    padding: "0px"
};

var constraints = {
    fname: {
        presence: true
    }
};

class AddEmployeePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                fname: "",
                lname: "",
                streetname: "",
                houseNumber: "",
                town: "",
                postcode: "",
                nin: "",
                bank_acc_info_id: "",
                start_salary: "",
                dept_id: ""
            }
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;

        var newState = update(this.state, {
            data: {
                [name]: {
                    $set: target.value
                }
            }
        });
        this.setState(newState);
    }

    onSubmit(e) {
      e.preventDefault();

      let empData = this.state.data;

      employeeApi.postEmployee(empData, (err, result) => {
        if(err) {
          console.error("error");
        }
          console.log("success!");
    });
  }

    render() {
       return (
           <div className="col-md-8 col-md-offset-2 searchEmpPanel" id="bottomPanel">
               <div className="panel panel-default">
                    <div className="panel-body">
                    <h4>Add Employee</h4>
                    <br/>
                    <form onSubmit={this.onSubmit} onChange={this.handleChange}>

                        <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label>First Name</label>
                                  <input className="form-control disabled" name="fname" value={this.state.data.fname}/>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label>Last Name</label>
                                  <input className="form-control disabled" name="lname" value={this.state.data.lname} />
                              </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label>streetname</label>
                                  <input className="form-control disabled" name="streetname" value={this.state.data.streetname} />
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label>houseNumber</label>
                                  <input className="form-control disabled" name="houseNumber" value={this.state.data.houseNumber} />
                              </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label>town</label>
                                  <input className="form-control disabled" name="town" value={this.state.data.town} />
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label>postcode</label>
                                  <input className="form-control disabled" name="postcode" value={this.state.data.postcode} />
                              </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label>National Insurance Number</label>
                                  <input className="form-control disabled" name="nin" value={this.state.data.nin} />
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label>Bank account number</label>
                                  <input className="form-control disabled" name="bank_acc_info_id" value={this.state.data.bank_acc_info_id} />
                              </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label>Starting Salary</label>
                                  <input className="form-control disabled" name="start_salary" value={this.state.data.start_salary} />
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label>Department ID</label>
                                  <input className="form-control disabled" name="dept_id" value={this.state.data.dept_id} />
                              </div>
                          </div>
                        </div>
                        <hr />
                        <button type="submit" className="btn btn-primary btn-block searchEmpButton">Add Employee</button>
                    </form>
                   </div>
               </div>
           </div>
       );
    }
}

export default AddEmployeePanel;
