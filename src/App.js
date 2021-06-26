import React, { Component } from "react";
import ProfilePageClass from "./classComponent/ClassComponent";
import ProfilePageFunction from "./functionComponent/FunctionComponent";

class App extends Component {
  state = {
    user: "Dan",
  };

  render() {
    return (
      <div>
        <h2>Hello world!</h2>
        <div>
          <label>
            <b>Choose profile to view: </b>
            <select
              value={this.state.user}
              onChange={(e) => this.setState({ user: e.target.value })}
            >
              <option value="Dan">Dan</option>
              <option value="Sophie">Sophie</option>
              <option value="Jonson">Jonson</option>
            </select>
          </label>
        </div>
        <h2>Welcome to {this.state.user}'s profile!</h2>
        <div>
          <ProfilePageFunction user={this.state.user} />
          <b> (function)</b>
        </div>
        <div>
          <ProfilePageClass user={this.state.user} />
          <b> (class)</b>
        </div>
      </div>
    );
  }
}

export default App;
