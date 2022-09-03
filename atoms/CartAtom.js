/** @format */

import { selector, atom } from "recoil";
import _ from "lodash";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const favAtom = atom({
  key: "favAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const favSelector = selector({
  key: "favSelector",
  get: ({ get }) => {
    let favItems = get(favAtom);
    if (favItems.length > 0) null;
    // let localFavItems = JSON.parse(localStorage.getItem("favItems"));
    return favItems;
  },
  set: ({ set, get }, newItem) => {
    const favItems = get(favAtom);
    const alreadyExists = _.find(favItems, { id: newItem.id });
    if (alreadyExists) {
      console.log("already exists");
    } else {
      set(favAtom, newItem);
      localStorage.setItem("favItems", JSON.stringify([...favItems, newItem]));
    }

    // let favItem = _.find(favItems, { id: newValue.id });
    // if (favItem) {
    //   console.log("Favorite item already exists");
    // } else {
    //   set(favAtom, [...favItems, newValue]);
    //   console.log(favItems);
    // }
  },
});
