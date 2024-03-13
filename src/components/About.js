import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render");
    return (
      <div className="about">
        <h1>User Details</h1>
        <UserClass
          name={"First Child"}
          location={"Kerala"}
          contact={"dewasdevelops@gmail.com"}
        />
        <UserClass
          name={"Second Child"}
          location={"Kerala"}
          contact={"dewasdevelops@gmail.com"}
        />
        <UserClass
          name={"Third Child"}
          location={"Kerala"}
          contact={"dewasdevelops@gmail.com"}
        />
      </div>
    );
  }
}

export default About;
