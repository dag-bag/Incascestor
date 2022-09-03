/** @format */

// /** @format */
// import { useRecoilState } from "recoil";
// import { cartItemsAtom } from "../atoms/CartAtom";

// export const useAddProduct = () => {
//   const [cart, setCart] = useRecoilState(cartItemsAtom);

//   return (product) => {
//     const index = cart.findIndex((item) => item._id === product._id);

//     if (index === -1) {
//       return setCart([...cart, { ...product, qty: 1 }]);
//     }

//     const newCart = cart.map((item, i) => {
//       if (i === index) {
//         return {
//           ...item,
//           qty: item.qty + 1,
//         };
//       }

//       return item;
//     });

//     setCart(newCart);
//     console.log(cart);
//   };
// };

// export const useRemoveProduct = () => {
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
