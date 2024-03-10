import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [isVeg, setIsVeg] = useState(false);
  const [resData, setResData] = useState([]);
  const [resInfo, setResInfo] = useState([]);
  const [show, setShow] = useState([]);
  // const [filterData, setFilterData] = useState([]); veg filter

  useEffect(() => {
    fetchData();
  }, []);

  const params = useParams();

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.490872999999999&lng=76.9527483&restaurantId=" +
        params.id
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data?.cards[0]?.card?.card?.info);
    const dataMenu =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const filteredMenu = dataMenu.filter((item) => item?.card?.card?.itemCards);
    setResData(filteredMenu); //all category
    console.log(filteredMenu);
  };

  if (resData.length === 0) {
    return <Shimmer />;
  }

  {
    const {
      areaName,
      avgRating,
      city,
      costForTwoMessage,
      cuisines,
      name,
      totalRatingsString,
    } = resInfo;

    const { slaString, lastMileTravelString, lastMileTravel } = resInfo?.sla;
  }

  return (
    <div className="menu-container">
      <div className="res-details">
        <div className="res-head">
          <p>
            Home/{resInfo.city}/{resInfo.name}
          </p>
        </div>
        <div className="res-info">
          <div>
            <h1 className="res-name">{resInfo.name}</h1>
            <p className="common-gray">{resInfo.cuisines.join(",")}</p>
            <p className="common-gray">
              {resInfo.areaName}, {resInfo.sla.lastMileTravelString}
            </p>
            <br />
            <p className="common-gray">
              <i className="bx bx-trip"></i>{" "}
              <span>{resInfo.sla.lastMileTravelString}</span> | <span>🏍️</span>{" "}
              {resInfo.sla.lastMileTravel >= 3
                ? "Far " +
                  resInfo?.sla.lastMileTravel +
                  " kms | Delivery Charge will apply"
                : resInfo?.sla.lastMileTravel +
                  " kms only | Free Delivery Available"}
            </p>
            <p className="common-bold">
              <span>
                <i className="bx bxs-timer"></i> {resInfo?.sla?.slaString}
              </span>
              <span>
                <i className="bx bx-rupee"></i>
                {resInfo.costForTwoMessage}
              </span>
            </p>
          </div>
          <div className="rating">
            <div className="star">
              <i className="bx bxs-star"></i>
              {resInfo.avgRating}
            </div>
            <div className="count">{resInfo.totalRatingsString}</div>
          </div>
        </div>
      </div>
      <div className="menu-list">
        <div className="veg-filter">
          <span>Veg Only</span>
          <i
            onClick={() => setIsVeg((prev) => !prev)}
            className={`bx bx-food-tag ${isVeg ? "active" : ""}`}
          ></i>
        </div>
        {resData.map((category) => (
          <div key={category?.card?.card?.title}>
            <div
              onClick={() => {
                setShow((prev) => ({
                  ...prev,
                  [category?.card?.card?.title]:
                    !prev[category?.card?.card?.title],
                }));
              }}
              className="categoryMenu"
            >
              <span>
                {category?.card?.card?.title} (
                {category?.card?.card?.itemCards.length})
              </span>
              <i
                className={` ${
                  show[category?.card?.card?.title]
                    ? "bx bx-chevron-down bx-rotate-180"
                    : "bx bx-chevron-down"
                }`}
              ></i>
            </div>
            {show[category?.card?.card?.title]
              ? category?.card?.card?.itemCards.map((item) => (
                  <div key={item?.card?.info?.id} className="menu-item">
                    <div className="item-details">
                      <i
                        style={
                          item?.card?.info?.itemAttribute?.vegClassifier ===
                          "VEG"
                            ? { color: "green" }
                            : { color: "red" }
                        }
                        className="bx bx-food-tag"
                      ></i>
                      <div className="ribbon ">
                        <i
                          style={
                            item.card.info.ribbon.text
                              ? { color: "orange" }
                              : { color: "white" }
                          }
                          className="bx bxs-star"
                        ></i>
                        {item.card.info.ribbon.text}
                      </div>

                      <h6>{item?.card?.info?.name}</h6>
                      <span>
                        ₹{" "}
                        {item?.card?.info?.price / 100 ||
                          item?.card?.info?.defaultPrice / 100}
                      </span>
                      <p>
                        {item?.card?.info?.description?.length > 50
                          ? item?.card?.info?.description
                              .split(" ")
                              .slice(0, 10)
                              .join(" ") + " ..."
                          : item?.card?.info?.description}
                      </p>
                    </div>
                    <div className="item-img">
                      {item.card.info.imageId && (
                        <img src={CDN_URL + item?.card?.info?.imageId} alt="" />
                      )}
                      <button>ADD</button>
                    </div>
                  </div>
                ))
              : null}
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
