import React from 'react';

class Jumbotron extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="container-full">
        <div className="jumbotron text-center" id="homeJumbotron">
           <h1>Doomsday Bunnies System</h1>
           <p>yey.</p>
         </div>
       </div>
    );
  }
}

export default Jumbotron;
