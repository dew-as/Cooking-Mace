import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import SearchShimmer from "./SearchShimmer";

const Search = () => {
  const [cuisines, setCuisines] = useState([]);

  const [inputData, setInputData] = useState();

  const [filteredCuisines, setFilteredCuisines] = useState([]);

  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [listOffRestaurants, setListOffRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.490872999999999&lng=76.9527483&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
  
    const resData = json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    setCuisines(resData);
    setFilteredCuisines(resData);
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOffRestaurants(restaurants);
    setFilterRestaurant(restaurants);
  };

  if (listOffRestaurants.length === 0 && cuisines.length === 0) {
    return <SearchShimmer />;
  }

  return (
    <div className="search-container">
      <div className="input-container">
        <input
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const filteredList = cuisines.filter((cuisine) =>
                cuisine?.action?.text
                  .toLowerCase()
                  .includes(inputData.toLowerCase())
              );
              setFilteredCuisines(filteredList);
              const filteredRes = listOffRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(inputData.toLowerCase())
              );
              setFilterRestaurant(filteredRes);
            }
          }}
          placeholder="Search for restaurants and foods"
        ></input>
        <i
          onClick={() => {
            const filteredList = cuisines.filter((cuisine) =>
              cuisine?.action?.text
                .toLowerCase()
                .includes(inputData.toLowerCase())
            );
            setFilteredCuisines(filteredList);
            const filteredRes = listOffRestaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(inputData.toLowerCase())
            );
            setFilterRestaurant(filteredRes);
          }}
          className="bx bx-search"
        ></i>
      </div>
      <div className="search-cards">
        {filteredCuisines?.map((cuisine) => (
          <div key={cuisine?.id} className="search-card">
            <div className="img-container">
              <img src={CDN_URL + cuisine?.imageId} alt="res-logo" />
            </div>
            <div className="text-container">
              <h5>{cuisine?.action?.text}</h5>
              <h6>Dish</h6>
            </div>
          </div>
        ))}
        {filterRestaurant?.map((restaurant) => (
          <div key={restaurant?.info?.id} className="search-card">
            <div className="img-container">
              <img
                src={CDN_URL + restaurant?.info?.cloudinaryImageId}
                alt="res-logo"
              />
            </div>
            <div className="text-container">
              <h5>{restaurant?.info?.name}</h5>
              <h6>restaurant</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
