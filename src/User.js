import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class User extends React.Component {
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <img
                src="https://img.etimg.com/thumb/msid-69724545,width-643,imgsize-1032582,resizemode-4/hugh-jackman-holds-a-guinness-world-record-for-longest-career-as-a-live-action-marvel-superhero-for-his-role-as-wolverine-.jpg"
                width="180"
                height="180"
                alt=""
                className="rounded-circle"
                style={{ float: "right" }}
              />
            </div>
            <div className="col-sm-6">
              <div className="container">
                <div className="row">
                  <div className="col-sm-7">
                    <h2>
                      Hugh jackman
                      <span>
                        <img
                          src="https://p7.hiclipart.com/preview/984/269/176/social-media-instagram-verified-badge-symbol-computer-icons-social-media.jpg"
                          width="20"
                          height="20"
                          style={{
                            position: "absolute"
                          }}
                          alt=""
                        />
                      </span>
                    </h2>
                  </div>
                  <div className="col-sm-2">
                    <button className="btn btn-primary">Follow</button>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-sm-3">1,630 posts</div>
                  <div className="col-sm-4">923.3m followers</div>
                  <div className="col-sm-4">1,169 following</div>
                </div>
              <br></br>
              Hugh Jackman Actor. <br></br>
              Experience collector. ⚡️🎶🐺✖<br></br>
              <a href="https://en.wikipedia.org/wiki/Hugh_Jackman">hughjackman.org</a>
              </div>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
