import React, {PropTypes} from 'react';
import { Link, browserHistory } from 'react-router';
import validate from 'validate.js';
import update from 'immutability-helper';
import employeeApi from '../../../api/employeeApi';

class SearchEmployeesPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          empName: "",
          data: {
            fname: "",
            lname: "",
            street: "",
            house_number: "",
            town: "",
            postcode: "Belfast",
            nin: "",
            bank_acc_info_id: "",
            start_salary: ""
          }
        }

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
        this.setState(newState, this.validate);
    }

  onSearchSubmit(e) {
      e.preventDefault();

    let empName = this.state.empName;

    employeeApi.getEmployeeByName(empName, (err, result) => {
      if(err) {
        console.error("error");
      }
      this.setState({
          data: {
            fname: result.fname,
            lname: result.lname,
            street: result.street,
            house_number: result.house_number,
            town: result.town,
            postcode: result.postcode,
            nin: result.nin,
            start_salary: result.start_salary
          }
      });
  });
}

    render() {
       return (
           <div className="col-md-8 col-md-offset-2 searchEmpPanel">
               <div className="panel panel-default">
                    <div className="panel-body">
                    <h4>Search Employees</h4>
                    <br/>
                    <form onSubmit="" onChange={this.handleChange}>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Enter Employee Name</label>
                              <input className="form-control" name="empName" value={this.state.email} placeholder="e.g Richard Taylor" />
                            </div>
                          </div>
                          <div className="col-md-2">
                            <button type="submit" className="btn btn-primary searchEmpButton">Search</button>
                          </div>
                        </div>
                    </form>

                        <hr/>

                        <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label>First Name</label>
                                  <input className="form-control" name="fname" value={this.state.password} disabled/>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label>Last Name</label>
                                  <input className="form-control" name="lname" value={this.state.confpassword} disabled/>
                              </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label>National Insurance Number</label>
                                  <input className="form-control" name="nin" value={this.state.confpassword} disabled/>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label>Address</label>
                                  <input className="form-control" name="address" value={this.state.confpassword} disabled/>
                              </div>
                          </div>
                        </div>
                        <hr />
                   </div>
               </div>
           </div>
       );
    }
}

export default SearchEmployeesPanel;
