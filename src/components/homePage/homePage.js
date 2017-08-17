import React from 'react';
import employeeApi from '../../api/employeeApi';
import Jumbotron from './jumbotron';
import Header from '../common/header';
import Footer from '../common/footer';
import SearchEmployeesPanel from './homePagePanels/searchEmployees';
import AddEmployeePanel from './homePagePanels/addEmployee';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <AddEmployeePanel />
        <Footer />
      </div>
    );
  }
}

export default Home;
