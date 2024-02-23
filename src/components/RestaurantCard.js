import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    name,
    isOpen,
    cuisines,
    avgRating,
    sla,
    areaName,
  } = resData.info;
  const { deliveryTime, lastMileTravel } = sla;
  const { header, subHeader } = aggregatedDiscountInfoV3;
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={CDN_URL + cloudinaryImageId} alt="res-logo" />
        <span className="offer">
          {header} {subHeader}
        </span>
      </div>
      <div className="card-details">
        <div className="res-head">
          <p className="res-name">{name}</p>
          <i style={isOpen === true ? { color: "green" } : { color: "red" }}>
            {isOpen === true ? "Open" : "Closed"}
          </i>
        </div>
        <p className="res-type">{cuisines.join(", ")}</p>
        <div className="rate-time">
          <p className="res-rate">
            <i className="bx bxs-star bx-tada bx-rotate-180"></i>
            {avgRating}
          </p>
          <p className="del-time">
            <i className="bx bxs-bowl-hot bx-tada bx-rotate-180"></i>
            {deliveryTime} mins
          </p>
        </div>
        <div className="distance">
          <p>
            <span>🏍️</span>{" "}
            {lastMileTravel >= 3
              ? "Far " + lastMileTravel + " kms | Delivery Charge will apply"
              : lastMileTravel + " kms only | Free Delivery Available"}
          </p>
        </div>
        <p className="location">
          <i className="bx bx-map bx-flashing bx-flip-horizontal"></i>
          {areaName}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;