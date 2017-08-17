/* global __API_DOMAIN__ */
import axios from 'axios';

let ApiUrl = 'http://192.168.1.111:8001/';

class employeeApi {
  constructor() {
  }

  static getAllEmployees(cb) {
    let restfulEndpoint = ApiUrl + "employees/";

    axios.get(restfulEndpoint, cb)
      .then(function (response) {
        cb(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  static getEmployeeByName(empName, cb) {
    let restfulEndpoint = ApiUrl + "employees/";

    axios.get(restfulEndpoint)
      .then(function (response) {
        console.log(response);
        cb(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  static postEmployee(employeeData, cb) {
    let restfulEndpoint = ApiUrl + "add-employees/";

    let data = {
      fname: employeeData.fname,
      lname: employeeData.lname,
      house_number: employeeData.houseNumber,
      street: employeeData.streetname,
      town: employeeData.town,
      postcode: employeeData.postcode,
      nin: employeeData.nin,
      bank_acc_info_id: employeeData.bank_acc_info_id,
      start_salary: employeeData.start_salary,
      dept_id: employeeData.dept_id
    }

    axios.post(restfulEndpoint, data)
      .then(function (response) {
        console.log(response);
        cb(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default employeeApi;
