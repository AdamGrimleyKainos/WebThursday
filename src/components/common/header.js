import React from 'react';
import {Link} from 'react-router';

var navbarBrandStyle = {
  paddingTop: "3px"
};

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
          <div className="container">
            <nav className="navbar navbar-default navbar-fixed-top">

              <div className="navbar-header">
                <Link to="/" className="navbar-brand" style={navbarBrandStyle}>
                </Link>
              </div>

                <ul className="nav navbar-nav navbar-left col-md-8">
                  <li className="nav">
                    <Link to="/">Home</Link>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="nav">
                    <Link to="signin">Sign In</Link>
                  </li>
                </ul>
            </nav>
          </div>
        );
    }
}

export default Header;
