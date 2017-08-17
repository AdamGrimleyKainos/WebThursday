import React from 'react';
import update from 'immutability-helper';

class ResultsPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var self = this;
    var results = self.props.results;

    var createEmpRow = function(emp) {
      return (
        <tr key={emp.employee_id}>
          <td>{emp.fname}</td>
          <td>{emp.lname}</td>
          <td>{emp.house_number}</td>
          <td>{emp.street}</td>
          <td>{emp.town}</td>
          <td>{emp.postcode}</td>
          <td>{emp.nin}</td>
          <td>{emp.bank_acc_info_id}</td>
          <td>{emp.start_salary}</td>
          <td>{emp.dept_id}</td>
        </tr>
      );
    };

    if (self.props.results.length > 0) {
      results = <tbody>{results.map(createEmpRow)}</tbody>;
    } else {
      results = <h3>No Report Generated</h3>
    }

    return (
      <div className="col-md-8 col-md-offset-2 searchEmpPanel">
          <div className="panel panel-default">
               <div className="panel-body">
               <h4>Generate Department Report</h4>
               <br/>
                 <div className="row">
               <table className="table table-striped table-hover tableytable">
                 <thead>
                   <tr>
                     <th>fname</th>
                     <th>lname Name</th>
                     <th>house_number</th>
                     <th>street</th>
                     <th>town</th>
                     <th>postcode</th>
                     <th>nin</th>
                     <th>bank_acc_info_id</th>
                     <th>start_salary</th>
                     <th>dept_id</th>
                   </tr>
                 </thead>
                 {results}
               </table>
             </div>
              </div>
          </div>
      </div>
    );
  }
}

export default ResultsPanel;
