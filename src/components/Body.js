import RestaurantCard, { withPromoted } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";

const Body = () => {
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [listOffRestaurants, setListOffRestaurants] = useState([]);

  const [inputData, setInputData] = useState("");

  const RestaurantCardPromoted = withPromoted(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.490872999999999&lng=76.9527483&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOffRestaurants(restaurants);
    setFilterRestaurant(restaurants);
  };

  const handleSelectChange = (event) => {
    const selectedFilter = event.target.value;
    let filteredList;

    switch (selectedFilter) {
      case "topRated":
        filteredList = filterRestaurant.filter(
          (restaurant) => restaurant.info.avgRating >= 4.5
        );
        break;
      case "fastDelivery":
        filteredList = filterRestaurant.filter(
          (restaurant) => restaurant.info.sla.deliveryTime < 25
        );
        break;
      case "nearby":
        filteredList = filterRestaurant.filter(
          (restaurant) => restaurant.info.sla.lastMileTravel < 3
        );
        break;
      case "freeDelivery":
        filteredList = filterRestaurant.filter(
          (restaurant) => restaurant.info.sla.lastMileTravel < 2
        );
        break;
      default:
        filteredList = filterRestaurant;
    }

    setListOffRestaurants(filteredList);
  };

  const networkStatus = useNetworkStatus();

  if (networkStatus === false)
    return <h1>You'r Offline Now Please Check The Internet Connection ! 👀</h1>;

  return listOffRestaurants === 0 && !inputData ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* <span style={{ color: networkStatus ? "green" : "red" }}>
          {networkStatus ? "🍏- Online" : "🍎- Offline"}
        </span> */}
        <div className="search-res">
          <input
            type="text"
            value={inputData}
            onChange={(e) => {
              setInputData(e.target.value);
              const filteredList = filterRestaurant.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              );
              setListOffRestaurants(filteredList);
            }}
          />
          <button
            onClick={() => {
              const filteredList = filterRestaurant.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(inputData.toLowerCase())
              );
              setListOffRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <select className="select-filter" onChange={handleSelectChange}>
          <option value="">All Restaurants</option>
          <option value="topRated">Top Rated Restaurants</option>
          <option value="fastDelivery">Fast Delivery</option>
          <option value="nearby">Restaurants Nearby</option>
          <option value="freeDelivery">Free Delivery</option>
        </select>
      </div>
      {}
      <div className="res-container">
        {listOffRestaurants.length === 0 ? (
          <h1>Can't find Data ! 🧐</h1>
        ) : (
          listOffRestaurants?.map((restaurant) => (
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {" "}
              {restaurant?.info?.veg ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
