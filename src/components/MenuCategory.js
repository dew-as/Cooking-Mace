import { useState } from "react";
import MenuCard from "./MenuCard";

const MenuCategory = (props) => {
  const { category,showItem } = props;
  return (
    <div>
      <div className="categoryMenu">
        <span>
          {category?.card?.card?.title} (
          {category?.card?.card?.itemCards.length})
        </span>
        <i
          className={` ${
            showItem[category?.card?.card?.title]
              ? "bx bx-chevron-down bx-rotate-180"
              : "bx bx-chevron-down"
          }`}
        ></i>
      </div>
      {showItem &&
        category?.card?.card?.itemCards.map((item) => (
          <MenuCard key={item.card.info.id} item={item} />
        ))}
    </div>
  );
};

export default MenuCategory;
