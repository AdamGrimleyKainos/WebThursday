/* global __API_DOMAIN__ */
import axios from 'axios';

let ApiUrl = 'http://192.168.1.111:8001/';

class employeeApi {
  constructor() {
  }

  static generateDeptReport(dept_id, cb) {
    let restfulEndpoint = ApiUrl + "departments/" + dept_id;
    console.log(restfulEndpoint);

    axios.get(restfulEndpoint)
      .then(function (response) {
        cb(false, response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default employeeApi;
