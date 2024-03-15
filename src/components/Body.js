import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [listOffRestaurants, setListOffRestaurants] = useState([]);

  const [inputData, setInputData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.490872999999999&lng=76.9527483&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOffRestaurants(restaurants);
    setFilterRestaurant(restaurants);
  };
  console.log(listOffRestaurants);

  return listOffRestaurants.length === 0 && !inputData ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="cover-pic">
        <img src="" alt="" />
      </div>
      <div className="filter">
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
        <button
          className="filter-btn"
          onClick={() => {
            setListOffRestaurants(filterRestaurant);
          }}
        >
          All Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filterRestaurant.filter(
              (restaurant) => restaurant.info.avgRating >= 4.5
            );
            setListOffRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filterRestaurant.filter(
              (restaurant) => restaurant.info.sla.deliveryTime < 25
            );
            setListOffRestaurants(filteredList);
          }}
        >
          Fast Delivery
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filterRestaurant.filter(
              (restaurant) => restaurant.info.sla.lastMileTravel < 3
            );
            setListOffRestaurants(filteredList);
          }}
        >
          Restaurants Nearby
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filterRestaurant.filter(
              (restaurant) => restaurant.info.sla.lastMileTravel < 2
            );
            setListOffRestaurants(filteredList);
          }}
        >
          Free Delivery
        </button>
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
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
