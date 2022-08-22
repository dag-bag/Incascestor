/** @format */

import { set } from "mongoose";
import { atom, selector } from "recoil";

export const cartAtom = atom({
  key: "cart",
  default: true,
});

export const cartItemsAtom = atom({
  key: "cartItems",
  default: {},
});

export const addToCart = (cart, product) => {
  const newCart = cart;
  console.log("newCart:", newCart);

  const foundIndex = cart.findIndex((x) => x._id === product._id);
  console.log(foundIndex);
  // Increase quantity if existing
  if (foundIndex >= 0) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity + 1,
    };
    return newCart;
  }

  // Add new item
  newCart.push({
    product,
    id: product._id,
    quantity: 1,
  });
  return newCart;
};

export const testSelector = selector({
  key: "testSelector",
  get: ({ get }) => {},
  set: ({ set, get }, newValue) => {
    const Cart = get(cartItemsAtom);
    Cart = newValue;

    set(cartItemsAtom, newValue);
  },
});
// const useRemoveProduct = () => {
//   const [cart, setCart] = useRecoilState(cartState);

//   return (product) => {
//     const index = cart.findIndex((item) => item.id === product.id);

//     if (index === -1) {
//       alert("Product not found in cart!");
//       return;
//     }

//     const newCart = cart.filter((item) => item.Id !== product.Id);

//     setCart(newCart);
//   };
// };

// export { useRemoveProduct };
