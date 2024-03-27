import { CDN_URL } from "../utils/constants";

const MenuCard = (props) => {
  const { item } = props;
  return (
    <div>
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
          <div className="ribbon ">
            <i
              style={
                item?.card?.info?.ribbon?.text
                  ? { color: "orange" }
                  : { color: "white" }
              }
              className="bx bxs-star"
            ></i>
            {item?.card?.info?.ribbon?.text}
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
          {item?.card?.info?.imageId && (
            <img src={CDN_URL + item?.card?.info?.imageId} alt="" />
          )}
          <button>ADD</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
