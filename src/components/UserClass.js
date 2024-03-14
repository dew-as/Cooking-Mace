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

    //this will do log every 1 sec
    this.timer = setInterval(() => {
      console.log("Rendered setInterval");
    }, 1000);
  }

  // if we want to do anything on specific state changes how will be modify our componentDidUpdate ?

  // we need to check that whether the previous state and current state changed or not in componentDidUpdate.

  // if we want to do something when multiple state changes that means same thing to do then we have to put || in the condition like

  // if(prevState !== this.state.userInfo || this.state.userData ) // Do something

  // if we want to do something when multiple state changes that means differents thing to do then we have to put more conditions like

  // if(prevState !== this.state.userInfo) // Do something

  // if(prevState !== this.state.userData) // Do something

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("This will log when the component will unmount");
    //if we change the component and the setInterval won't stop that will render again so overcome this...
    // use of componentWillUnmount is to clear things when component changes,
    // React s a SPA so it doest do cleanup by self,so we want to do that after unmount the component

    clearInterval(this.timer);

    // this is why componentWillUnmount works,and we can do same thig on useEffect by adding a return function inside useEffect ,
    //  that will act like componentWillUnmount,when ever the component changes that will be called and will clear unwanted
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
