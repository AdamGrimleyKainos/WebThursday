import React from 'react';
import update from 'immutability-helper';

class DepartmentPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-8 col-md-offset-2 generateReportPanel">
          <div className="panel panel-default">
               <div className="panel-body">
               <h4>Generate Department Report</h4>
               <br/>
               <form onSubmit={this.props.onSearchSubmit} onChange={this.props.handleChange}>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                           <label>Department Id</label>
                           <input className="form-control" name="dept_id" value={this.props.deptid}/>
                       </div>
                     </div>
                   </div>
                   <hr />
                   <button type="submit" className="btn btn-primary btn-block searchEmpButton">Generate Report</button>
               </form>
              </div>
          </div>
      </div>
    );
  }
}

export default DepartmentPanel;
