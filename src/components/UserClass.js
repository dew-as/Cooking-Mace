import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { name, location, contact } = this.props;
    return (
      <div className="user-class">
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>{contact}</h3>
      </div>
    );
  }
}

export default UserClass;
