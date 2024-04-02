import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const MenuCard = (props) => {
  const { item, data } = props;
  const dispatch = useDispatch();
  //console.log(data);
  // now the data is coming from RestaurantMenu and we are passing that from child to child as props this is known as props drilling

  const handleCart = (item) => {
    dispatch(addItem({ item, quantity: 1 }));
  };

  return (
    <div>
      <div className="flex justify-between p-4">
        <div className="w-9/12">
          <i
            style={
              item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                ? { color: "green" }
                : { color: "red" }
            }
            className="bx bx-food-tag"
          ></i>
          <div className="text-xs text-orange-500">
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
          <h6 className="font-semibold text-gray-700">
            {item?.card?.info?.name}
          </h6>
          <span className="font-semibold text-gray-700">
            ₹
            {Math.floor(
              (item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100
            )}
          </span>
          <p className="tex-xs">
            {item?.card?.info?.description?.length > 50
              ? item?.card?.info?.description
                  .split(" ")
                  .slice(0, 10)
                  .join(" ") + " ..."
              : item?.card?.info?.description}
          </p>
        </div>
        <div className="w-3/12 text-center">
          {item?.card?.info?.imageId && (
            <img
              className="rounded-md"
              src={CDN_URL + item?.card?.info?.imageId}
              alt=""
            />
          )}
          <span
            className="cursor-pointer relative xl:bottom-10 md:bottom-9 sm:bottom-8 text-green-500 bg-white p-2 rounded-lg text-xs font-semibold z-50"
            onClick={() => handleCart(item)}
          >
            ADD +
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
