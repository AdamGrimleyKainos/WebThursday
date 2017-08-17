import React from 'react';
import employeeApi from '../../api/employeeApi';
import Jumbotron from './jumbotron';
import Header from '../common/header';
import Footer from '../common/footer';
import EditEmployeesPanel from './homePagePanels/editEmployees';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        employees: []
    };

    employeeApi.getAllEmployees((employees) => {
      //this.setState(employees: employees);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <EditEmployeesPanel />
        <Footer />
      </div>
    );
  }
}

export default Home;
