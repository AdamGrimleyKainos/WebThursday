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
}

export default employeeApi;
