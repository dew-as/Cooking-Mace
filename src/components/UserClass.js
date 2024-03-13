import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child constructor");
  }

  componentDidMount() {
    console.log("Child componentDidMount");
  }

  render() {
    console.log("Child render");
    const { name, location, contact } = this.props;
    const { count } = this.state;
    return (
      <div className="user-class">
        <span>Count : {count}</span>
        <hr />
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Decrement
        </button>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>{contact}</h3>
      </div>
    );
  }
}

export default UserClass;