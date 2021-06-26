import React, { Component } from "react";

class ProfilePageClass extends Component {
  showMessage = () => {
    alert("Followed " + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 1000);
  };

  render() {
    return <button onClick={this.handleClick}>Push the Class button</button>;
  }
}

export default ProfilePageClass;
