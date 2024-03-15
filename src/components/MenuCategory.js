import { useState } from "react";
import MenuCard from "./MenuCard";

const MenuCategory = (props) => {
  const [show, setShow] = useState([]);
  const { category } = props;
  return (
    <div>
      <div
        onClick={() => {
          setShow((prev) => ({
            ...prev,
            [category?.card?.card?.title]: !prev[category?.card?.card?.title],
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
            <MenuCard item={item} />
          ))
        : null}
    </div>
  );
};

export default MenuCategory;
