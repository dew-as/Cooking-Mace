import RestaurantCard from "./RestaurantCard";
import { data } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // const [listOffRestaurants, setListOffRestaurants] = useState(data);

  const arr = useState(data);
  // const [listOffRestaurants, setListOffRestaurants] = arr

  const listOffRestaurants = arr[0];
  const setListOffRestaurants = arr[1];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOffRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setListOffRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOffRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
