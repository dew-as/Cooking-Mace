import { Component } from "react";
import UserClass from "./UserClass";
import { UserContext } from "../utils/globalContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="about">
        <h1>User Details</h1>
        <UserContext.Consumer>
          {({ loggedUser }) => {
            return <h1 className="p-1 text-xs">{loggedUser}</h1>;
          }}
        </UserContext.Consumer>
        <UserClass />
      </div>
    );
  }
}

export default About;
