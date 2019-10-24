import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Posts extends React.Component {
  render() {
    return (
      <div style={{ color: "black" }} className="container-fluid">
        <span>
          <div className="row">
            <div className="col-sm-4">
              <img
                src="https://www.hellomagazine.com/imagenes/celebrities/2019081276407/hugh-jackman-kind-gesture-revealed-praised-by-fans/0-370-479/hugh-jackman-kind-gesture-revealed-t.jpg"
                alt="..."
                className="rounded float-left"
                height="293px"
                width="293px"
              ></img></div>
              <div className="col-sm-4">
              <img
                style={{ textAlign: "center" }}
                src="https://fsmedia.imgix.net/53/0a/60/f2/4d01/4f32/b953/c9f3684c25a7/x-men-movies.jpeg?rect=0%2C294%2C1000%2C751&auto=format%2Ccompress&dpr=2&w=1000"
                alt="..."
                className="rounded float-left"
                height="293px"
                width="293px"
              ></img></div>
              <div className="col-sm-4">
              <img
                style={{ textAlign: "right" }}
                src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/21/1464175888-hugh-jackman-muscles-claws-in-the-wolverine.jpg?crop=0.628xw:1.00xh;0.194xw,0&resize=480:*"
                alt="..."
                className="rounded float-left"
                height="293px"
                width="293px"
              ></img>
            </div>
            <div className="col-sm-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkkVfkP800Hu6IYmDKC9qYAOPcBUtO3hqAWTvUAvYgZAxaTb7Q"
                  alt="..."
                  className="rounded float-left"
                  height="293px"
                  width="293px"
                ></img></div>
                <div className="col-sm-4">
                <img
                  src="https://i0.wp.com/emirateswoman.com/wp-content/uploads/2019/03/hugh.jpg?fit=800%2C400&ssl=1"
                  alt="..."
                  className="rounded float-left"
                  height="293px"
                  width="293px"
                ></img></div>
                <div className="col-sm-4">
                <img
                  src="https://www.hellomagazine.com/imagenes/celebrities/2019081176363/hugh-jackman-shocks-fans-new-photo/0-370-305/hugh-jackman-close-up-t.jpg"
                  alt="..."
                  className="rounded float-left"
                  height="293px"
                  width="293px"
                ></img>
              </div>
              <div className="col-sm-4">
                
              </div>
            </div>
        </span>
      </div>
    );
  }
}

export default Posts;
