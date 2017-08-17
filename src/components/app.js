/*eslint-disable strict */ // Disabling strict on eslint. Cant run strict mode becuase we require global variables, jquery

import React, {PropTypes} from 'react';
//import Header from './common/header';
//import Footer from './common/footer';

class App extends React.Component {
  render() {
    return (
    <div>
      {this.props.children}
    </div>
  );
  }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
