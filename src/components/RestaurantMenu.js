import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [isVeg, setIsVeg] = useState(false);
  const [resData, setResData] = useState([]);
  const [resMenu, setResMenu] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (isVeg === true) {
      const vegOnly = resMenu.filter(
        (item) => item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
      );
      setFiltered(vegOnly);
    } else {
      setFiltered(resMenu);
    }
  }, [isVeg]);

  const params = useParams();

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.490872999999999&lng=76.9527483&restaurantId=" +
        params.id
    );
    const json = await data.json();
    setResData(json);
    const menuData =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    setFiltered(menuData);
    setResMenu(menuData);
  };

  if (resData.length === 0) {
    return <Shimmer />;
  }

  const {
    areaName,
    avgRating,
    city,
    costForTwoMessage,
    cuisines,
    name,
    totalRatingsString,
  } = resData?.data?.cards[0]?.card?.card?.info;

  const { slaString, lastMileTravelString, lastMileTravel } =
    resData?.data?.cards[0]?.card?.card?.info?.sla;

  return (
    <div className="menu-container">
      <div className="res-details">
        <div className="res-head">
          <p>
            Home/{city}/{name}
          </p>
        </div>
        <div className="res-info">
          <div>
            <h1 className="res-name">{name}</h1>
            <p className="common-gray">{cuisines.join(",")}</p>
            <p className="common-gray">
              {areaName}, {lastMileTravelString}
            </p>
            <br />
            <p className="common-gray">
              <i className="bx bx-trip"></i> <span>{lastMileTravelString}</span>{" "}
              | <span>🏍️</span>{" "}
              {lastMileTravel >= 3
                ? "Far " + lastMileTravel + " kms | Delivery Charge will apply"
                : lastMileTravel + " kms only | Free Delivery Available"}
            </p>
            <p className="common-bold">
              <span>
                <i className="bx bxs-timer"></i> {slaString}
              </span>
              <span>
                <i className="bx bx-rupee"></i>
                {costForTwoMessage}
              </span>
            </p>
          </div>
          <div className="rating">
            <div className="star">
              <i className="bx bxs-star"></i>
              {avgRating}
            </div>
            <div className="count">{totalRatingsString}</div>
          </div>
        </div>
      </div>
      <div className="menu-list">
        <div className="veg-filter">
          <span>Veg Only </span>
          <i
            onClick={() => {
              setIsVeg((prev) => !prev);
            }}
            className={`bx bx-food-tag ${isVeg ? "active" : ""}`}
          ></i>
        </div>
        {filtered.map((item) => (
          <div className="menu-item">
            <div className="item-details">
              <i
                style={
                  item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                    ? { color: "green" }
                    : { color: "red" }
                }
                className="bx bx-food-tag"
              ></i>
              <h6>{item?.card?.info?.name}</h6>
              <span>₹ {item?.card?.info?.price / 100}</span>
              <p>{item?.card?.info?.description}</p>
            </div>
            <div className="item-img">
              <img src={CDN_URL + item?.card?.info?.imageId} alt="" />
              <button>ADD</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
