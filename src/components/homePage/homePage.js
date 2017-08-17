import React from 'react';

class Home extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          employeeName: ""
      }
  }

  render() {
    return (
      <div>
         <h1>Hello!</h1>
      </div>
    );
  }
}

export default Home;
