import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-lg">
              <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand" href="http://localhost:3000/">
                  <img
                    src="https://www.brandchannel.com/wp-content/uploads/2016/05/instagram-new-logo-may-2016.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt=""
                  />
                  Instagram
                </span>
                <input
                  type="text"
                  placeholder="Search here" style={{textAlign:"center"}}
                ></input>
                <img
                  src="https://cdn1.iconfinder.com/data/icons/navigation-elements/512/user-login-man-human-body-mobile-person-512.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt=""
                />
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
