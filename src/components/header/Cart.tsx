"use client";

import { BsCart4 } from "react-icons/bs";

const Cart = () => {
  return (
    <div className="cursor-pointer relative">
      <BsCart4 className="icon" />
      <span className="text-sm absolute -top-3 right-0">20</span>
    </div>
  );
};

export default Cart;
