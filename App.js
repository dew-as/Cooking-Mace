import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Header
 * -Logo
 * -NavItems
 * Body
 * -SearchBar
 * -RestaurantContainer
 *   -RestaurantCard
 *      - img
 *      - res name
 *      - type
 *      - rating
 *      - delivery time
 * Footer
 * -Copyright
 * -Links
 * -Contact
 * -Address
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://gumlet-images.assettype.com/afaqs%2F2020-12%2F71dc202e-f873-4598-baa8-b9236beacfd2%2FSwiggy_PNG_Logo.png?rect=0%2C242%2C2048%2C1152&format=webp&w=480&dpr=2.6"
          alt="logo"
        />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="card-container">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/542e37cb1343ea18ba8f0a2a43074e0f"
        alt="res-logo"
      />
      <div className="card-details">
        <p className="res-name">Palaaram</p>
        <p className="res-type">South Indian,Arabian</p>
        <div className="rate-time">
          <p className="res-rate">
            <i className="star bx bxs-star bx-tada bx-rotate-180"></i>4.5
          </p>
          <p className="del-time">
            <i class="making bx bxs-bowl-hot bx-tada bx-rotate-180"></i>40-45
            mins
          </p>
        </div>
        <div className="distance">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu"
            alt=""
          />
          <p>Far (9.1 kms) | Additional delivery fee will apply</p>
        </div>
        <p className="location">Kadavanthara</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
