import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;
    return (
      <div className="user-class">
        <span>Count : {this.state.count}</span>
        <hr/>
        <span>Count : {count}</span>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>{contact}</h3>
      </div>
    );
  }
}

export default UserClass;
