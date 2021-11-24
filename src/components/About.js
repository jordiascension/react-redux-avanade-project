import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class About extends Component {

  render() {

    return (
      <div className="app">
        <div className="app-header">
            <div className="lapp-header-title">
              <h1>About React Redux CRUD</h1>
            </div>
            <div>
                &copy; Pello Altadill - http://pello.io
                <Link to="/">Back</Link>
            </div>
        </div>
      </div>
    );
  }
}
export default About;