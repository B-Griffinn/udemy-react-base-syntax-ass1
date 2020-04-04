import React, { Component } from "react";

import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

/**
 * mutliple UserOutput components need to be rendered here
 */

class App extends Component {
  // state
  state = {
    username: "State",
  };

  // event handlers
  userNameChangehandler = (event) => {
    this.setState({ username: event.target.value });
  }; // END userNameChangehandler

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.userNameChangehandler}
          username={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
      </div>
    );
  }
}

export default App;
