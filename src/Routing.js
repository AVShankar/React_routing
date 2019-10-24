import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Posts from "./Posts";
import IGTV from "./IGTV";
import Tagged from "./Tagged";

class Routing extends React.Component {
  render() {
    const tagStyle = {
      color: "black"
    };
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <Link exact to="/" class="nav-item nav-link active">
                Posts <span class="sr-only">(current)</span>
              </Link>
            </div>
            <div className="col-sm-4">
              <Link to="/igtv" class="nav-item nav-link">
                IGTV
              </Link>
            </div>
            <div className="col-sm-4">
              <Link to="/tagged" class="nav-item nav-link">
                Tagged
              </Link>
            </div>
            <Route exact path="/" component={Posts} />
            <Route path="/igtv" component={IGTV} />
            <Route path="/tagged" component={Tagged} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Routing;
