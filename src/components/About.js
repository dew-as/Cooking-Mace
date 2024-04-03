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
        <UserContext.Consumer>
          {({ loggedUser }) => {
            return <h1 className="p-1 text-xs m-2">About/{loggedUser?.name}</h1>;
          }}
        </UserContext.Consumer>
        <UserClass />
      </div>
    );
  }
}

export default About;
