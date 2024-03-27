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
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/dew-as");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    const { name, location, avatar_url, blog, email, url } =
      this.state.userInfo;
    return (
      <div className="user-class">
        <div>
          <h1>{name}</h1>

          <h2>{location}</h2>
          <a style={{ textDecoration: "none" }} href={blog || url}>
            Site
          </a>
        </div>
        <img src={avatar_url} alt="" />
      </div>
    );
  }
}

export default UserClass;