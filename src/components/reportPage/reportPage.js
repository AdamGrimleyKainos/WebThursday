import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import DepartmentPanel from './departmentPanel';
import ReportResultsPanel from './reportResultsPanel';
import reportsApi from '../../api/reportsApi';

class Report extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dept_id: "",
      data: {
        employee:[]
      }
    }
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSearchSubmit(e) {
    e.preventDefault();

    let dept_id = this.state.dept_id;

    reportsApi.generateDeptReport(dept_id, (err, result) => {
      if(err) {
        console.error("error");
      }
      console.log(result);
      this.setState({
          data: {
            employee: result.data
          }
      });
    });
  }

handleChange(e) {
  const target = e.target;
  const name = target.name;

  this.setState({dept_id: target.value});
}

  render() {
    return (
      <div>
        <Header />
          <DepartmentPanel handleChange={this.handleChange} onSearchSubmit={this.onSearchSubmit} deptid={this.state.dept_id}/>
          <ReportResultsPanel results={this.state.data.employee}/>
        <Footer />
      </div>
    );
  }
}

export default Report;
