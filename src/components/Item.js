import React, { useState } from "react";

function Item({ name, category }) {
  // State to manage whether the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Toggle item in cart
  const handleClick = () => {
    setInCart(prevInCart => !prevInCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
