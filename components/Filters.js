/** @format */
import React from "react";
import { filterAtom } from "../atoms/filterAtom";
import { useRecoilState } from "recoil";
import react from "react";
const opeRarData = [
  {
    filterName: "Recomendados",
  },
  {
    filterName: "Precio ascendete",
  },
  {
    filterName: "Precio descendente",
  },
];
const color = [
  { color: "Negros" },
  { color: "Negros" },
  { color: "Negros" },
  { color: "Negros" },
  { color: "Negros" },
  { color: "Negros" },
  { color: "Negros" },
];
const sizeData = [{ size: 15 }, { size: 25 }, { size: 35 }, { size: 45 }];
function Filters() {
  const [price, setPrice] = React.useState(30);
  const [isSelected, setSelect] = useRecoilState(filterAtom);
  return (
    <div className="relative w-full h-full grid grid-col-1 md:flex justify-evenly flex-wrap p-2 space-y-5 py-10">
      {/* All the data and filter here */}
      <div className=" text-right ">
        <p className="text-sm font-light text-center text-[#333]">
          ORDENAR POR
        </p>
        {/* For the checkbox */}
        {opeRarData.map((item, index) => {
          return (
            <div className="space-x-4 mt-4" key={index}>
              <label
                htmlFor={item.filterName}
                className="flex-grow-0 flex-shrink-0 w-36 h-8 text-sm font-light text-right text-[#333]"
              >
                {item.filterName}
              </label>
              <input
                type="checkbox"
                name={item.filterName}
                id={item.filterName}
              />
            </div>
          );
        })}
      </div>
      <div>
        <p className="text-sm font-light text-center text-[#333]">PRISO</p>
        <input
          type="range"
          name=""
          id=""
          className="slider mt-4"
          min={30}
          max={50}
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <div>
        <p className="text-sm font-light text-center text-[#a36565]">
          ORDENAR POR
        </p>
        {sizeData.map((item, index) => {
          return (
            <div className="space-x-4 mt-4" key={index}>
              <label
                htmlFor={item.size}
                className="flex-grow-0 flex-shrink-0 w-36 h-8 text-sm font-light text-right text-[#564b4b]"
              >
                {item.size}
              </label>
              <input type="checkbox" name={item.size} id={item.size} />
            </div>
          );
        })}
      </div>
      <div>
        <p className="text-sm font-light text-center text-[#5b5858]">
          ORDENAR POR
        </p>
        {color.map((item, index) => {
          return (
            <div className="space-x-4 mt-4" key={index}>
              <label
                htmlFor={item.color}
                className="flex-grow-0 flex-shrink-0 w-36 h-8 text-sm font-light text-center text-[#333]"
              >
                {item.color}
              </label>
              <input type="checkbox" name={item.color} id={item.color} />
            </div>
          );
        })}
      </div>
      {/* For the Deactive filter and close filter section */}
      <span
        className="absolute right-5 top-5 cursor-pointer"
        onClick={() => {
          setSelect(false);
        }}
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="none"
        >
          <path
            d="M18.75 5.25L5.25 18.75"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.75 18.75L5.25 5.25"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}

export default Filters;
