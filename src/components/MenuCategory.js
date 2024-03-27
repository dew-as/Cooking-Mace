import { useState } from "react";
import MenuCard from "./MenuCard";

const MenuCategory = (props) => {
  const { category } = props;
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
    console.log(show);
  };
  return (
    <div>
      <div onClick={handleClick} className="categoryMenu">
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
      {show &&
        category?.card?.card?.itemCards.map((item) => (
          <MenuCard key={item.card.info.id} item={item} />
        ))}
    </div>
  );
};

export default MenuCategory;
