import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import { clearCart } from "../utils/cartSlice";
import cartimg from "../../public/emptyCart.gif";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const sum = cartItems
    .map((item) =>
      Math.floor(
        item?.item?.card?.info?.price / 100 ||
          item.item.card.info.defaultPrice / 100
      )
    )
    .reduce((total, itemPrice) => total + itemPrice, 0);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0)
    return (
      <div className="flex items-center justify-center">
        <div>
          <p className="xl:text-5xl md:text-3xl sm:text-xl font-mono text-center font-bold p-10 m-0 text-gray-800">
            Cart is empty !
          </p>
        </div>
        <img className="w-6/12 h-80%" src={cartimg} />
      </div>
    );

  return (
    <>
      <div className="w-6/12 m-auto p-3">
        <h1 className="p-2 m-2 text-2xl font-bold">Cart</h1>
        <button
          onClick={handleClearCart}
          className="text-sm bg-black text-white p-2 m-1 rounded-md"
        >
          Clear Cart
        </button>
        {cartItems.map((item) => (
          <MenuCard key={item.item.card.info.id} item={item.item} />
        ))}
        <div className="flex justify-between bg-gray-200 w-full mt-3">
          <span className="mx-4 p-2 font-semibold">Total Price </span>
          <span className="mx-4 p-2 font-semibold"> ₹{sum}</span>
        </div>
      </div>
    </>
  );
};

export default Cart;
