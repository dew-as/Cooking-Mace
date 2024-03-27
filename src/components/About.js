import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="about">
        <h1>User Details</h1>
        <UserClass />
      </div>
    );
  }
}

export default About;
