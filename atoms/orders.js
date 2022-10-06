/** @format */

import { selectorFamily } from "recoil";

export const orderSelectorAtom = selectorFamily({
  key: "orderSelectorAtom",
  get: (id) => async () => {
    console.log(id);
    return id;
  },
});
