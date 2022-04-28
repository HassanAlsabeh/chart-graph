import React, { Component } from "react";
import { Link } from "react-router";

import "./App.css";

import esnetLogo from "./img/logo.png";
import githubLogo from "./img/github.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-3 col-md-2 sidebar">
            <p />

            <ul className="nav nav-sidebar">
              <li>
                <Link to="/example/baselines">Baselines demo</Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
