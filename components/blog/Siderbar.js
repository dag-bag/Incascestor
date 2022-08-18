/** @format */

import React from "react";
import Image from "next/image";
const instagramData = [
  {
    sig: 1,
  },
  {
    sig: 2,
  },
  {
    sig: 3,
  },
  {
    sig: 4,
  },
  {
    sig: 5,
  },
  {
    sig: 6,
  },
  {
    sig: 7,
  },
  {
    sig: 8,
  },
  {
    sig: 9,
  },
];
function Siderbar() {
  return (
    <aside className="w-full md:w-1/3 flex flex-col items-center px-3 max-w-sm">
      <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <p className="text-xl font-semibold pb-5">About Us</p>
        <p className="pb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In
          hac habitasse platea dictumst.
        </p>
        <a
          href="#"
          className="w-full bg-primary-1 text-white font-bold text-sm uppercase rounded hover:bg-primarytext-primary-1 flex items-center justify-center px-2 py-3 mt-4"
        >
          Get to know us
        </a>
      </div>
      <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <p className="text-xl font-semibold pb-5">Instagram</p>
        <div className="grid grid-cols-3 gap-3">
          {instagramData.map((i, index) => {
            return (
              <Image
                key={index}
                className="hover:opacity-75"
                src={`https://source.unsplash.com/collection/1346951/150x150?sig=${index}`}
                height={100}
                width={100}
                layout="responsive"
                alt="Instagram Image"
              />
            );
          })}
        </div>
        <a
          href="#"
          className="w-full bg-primary-1 text-white font-bold text-sm uppercase rounded hover:bg-primarytext-primary-1 flex items-center justify-center px-2 py-3 mt-6"
        >
          <i className="fab fa-instagram mr-2" /> Follow @Insane
        </a>
      </div>
    </aside>
  );
}

export default Siderbar;
