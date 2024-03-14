import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "user",
        location: "user location",
        avatar_url:
          "https://img.freepik.com/premium-photo/futuristic-warrior-avtar_862994-26466.jpg",
      },
    };
    console.log("constructor");
  }

  async componentDidMount() {
    console.log("componentDidMount");
    const data = await fetch("https://api.github.com/users/dew-as");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  render() {
    console.log("render");
    const { name, location, avatar_url, blog, email, url } =
      this.state.userInfo;
    return (
      <div className="user-class">
        <div>
          <img src={avatar_url} alt="" />
          <h1>{name}</h1>
        </div>
        <h2>{location}</h2>
        <a style={{ textDecoration: "none" }} href={blog || url}>
          Site
        </a>
      </div>
    );
  }
}

export default UserClass;

/**
 *  --- Mounting ---
 *
 *  Constructor (dummy data)
 *  Render (Dummy data)
 *       <HTML Dummy >
 *  Component did mount
 *       <Api Call>
 *       this.setState -> State Variable is updated
 *
 *
 *  --- Update ---
 *    render (API DATA)
 *    <HTML Api data.
 *  ComponentDidUpdate
 *
 *
 */
