import React, {PropTypes} from 'react';
import { Link, browserHistory } from 'react-router';
import validate from 'validate.js';
import update from 'immutability-helper';

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

class EditEmployeesPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
            },
            errors: {
                fname: "Enter Account Details"
            }
        }

        this.validate = this.validate.bind(this);
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

    validate() {
        var validationErrors = validate(this.state.data, constraints);
        if (validationErrors) {
            this.setState({
                errors: validationErrors
            });
        } else {
            this.setState({
                errors: {}
            });
        }
    }

    render() {
       return (
           <div className="col-md-8 col-md-offset-2">
               <div className="panel panel-default">
                    <div className="panel-body">
                    <h4>Edit Employees</h4>
                    <br/>
                    <form onChange={this.handleChange}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input className="form-control" type="email" name="email" value={this.state.email} placeholder="Enter Email Address..." />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input className="form-control" type="email" name="confEmail" value={this.state.confEmail} placeholder="Confrim Email Address..." />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Address</label>
                                <input className="form-control" type="password" name="password" value={this.state.password} placeholder="Enter password..." />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>National Insurance Number</label>
                                    <input className="form-control" type="password" name="confpassword" value={this.state.confpassword} placeholder="Confrim password..." />
                                </div>
                            </div>
                        </div>
                        <hr />
                    </form>
                   </div>
               </div>
           </div>
       );
    }
}

export default EditEmployeesPanel;
