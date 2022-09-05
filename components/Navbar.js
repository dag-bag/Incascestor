/** @format */

import Image from "next/image";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { menuState } from "./SmallMenu";
import { MyDropdown } from "./utils/DropDown";

const svgClass = "md:w-8 md:h-8 h-6 w-6 cursor-pointer";

const centerDivData = [
  { title: "Alpaca Toys", href: "/alpaca-toys" },
  { title: "Wear", href: "/wear" },
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "blog", href: "/blog" },
];
function Navbar() {
  const [hide, setHide] = useRecoilState(menuState);
  const { data: session } = useSession();
  const rightDivData = [
    {
      hide: true,
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={svgClass}
          preserveAspectRatio="none"
        >
          <path
            d="M14.4998 25C20.2987 25 24.9998 20.299 24.9998 14.5C24.9998 8.70101 20.2987 4 14.4998 4C8.70077 4 3.99976 8.70101 3.99976 14.5C3.99976 20.299 8.70077 25 14.4998 25Z"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M21.9241 21.9248L27.9991 27.9999"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={svgClass}
          preserveAspectRatio="none"
        >
          <path
            d="M16.0015 27C16.0015 27 3.50146 20 3.50146 11.5C3.50172 9.99768 4.02228 8.5418 4.97465 7.3799C5.92701 6.21801 7.25239 5.42181 8.72545 5.12669C10.1985 4.83156 11.7283 5.05572 13.0548 5.76105C14.3812 6.46638 15.4225 7.60935 16.0015 8.99563L16.0015 8.99565C16.5804 7.60936 17.6217 6.46639 18.9481 5.76106C20.2746 5.05572 21.8044 4.83156 23.2775 5.12669C24.7505 5.42181 26.0759 6.21801 27.0283 7.3799C27.9806 8.5418 28.5012 9.99768 28.5015 11.5C28.5015 20 16.0015 27 16.0015 27Z"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),

      link: "/favoritos",
    },

    {
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={svgClass}
          preserveAspectRatio="none"
        >
          <path
            d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M3.87354 26.9988C5.10299 24.8708 6.8708 23.1037 8.99939 21.8752C11.128 20.6467 13.5424 20 16.0001 20C18.4577 20 20.8721 20.6468 23.0007 21.8754C25.1292 23.1039 26.897 24.871 28.1264 26.9991"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),

      link: `/${session ? "account" : "login"} `,
    },
    {
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={svgClass}
          preserveAspectRatio="none"
        >
          <path
            d="M27 9H5C4.44772 9 4 9.44772 4 10V26C4 26.5523 4.44772 27 5 27H27C27.5523 27 28 26.5523 28 26V10C28 9.44772 27.5523 9 27 9Z"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M11 13V9C11 7.67392 11.5268 6.40215 12.4645 5.46447C13.4021 4.52678 14.6739 4 16 4C17.3261 4 18.5979 4.52678 19.5355 5.46447C20.4732 6.40215 21 7.67392 21 9V13"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),

      link: "/bolso",
    },
  ];

  return (
    <div className="flex justify-between md:justify-evenly items-center shadow-sm px-5 md:px-0 md:py-4 max-w-8xl m-auto py-1">
      {/* Left */}
      <div className="flex items-center justify-center space-x-2">
        <div className="relative w-7 sm:w-10 md:w-16 cursor-pointer">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="logo"
              width={97}
              height={139}
              layout="responsive"
            />
          </Link>
        </div>
      </div>
      {/* Center */}
      <div className="hidden justify-center items-end space-x-8   md:flex">
        {centerDivData.map((i) => {
          return (
            <Link key={i.title} href={i.href}>
              <li className=" text-base text-left text-[#333] cursor-pointer list-none pt-9 ">
                {i.title}
              </li>
            </Link>
          );
        })}
        <MyDropdown />
      </div>
      {/* Right */}
      <div className="flex justify-center items-center md:space-x-10 space-x-6 md:mt-6">
        {rightDivData.map((i, index) => {
          return i.link ? (
            <Link key={i.link} href={i.link}>
              <div className="flex flex-col items-center justify-center cursor-pointer">
                {i.svg}
                <p
                  className={
                    "text-sm font-light leading-6 md:inline  tracking-[-0.17600000381469727px] text-[rgba(51,51,51,1)] hidden"
                  }
                ></p>
              </div>
            </Link>
          ) : (
            <div
              key={index}
              className={`flex flex-col items-center justify-center cursor-pointer ${
                i.hide && "hidden md:block"
              }`}
            >
              {i.svg}
              <p
                className={
                  "text-sm font-light leading-6 md:inline  tracking-[-0.17600000381469727px] text-[rgba(51,51,51,1)] hidden"
                }
              >
                {i.text}
              </p>
            </div>
          );
        })}
        <svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 relative inline md:hidden cursor-pointer"
          preserveAspectRatio="none"
          onClick={() => {
            setHide(!hide);
          }}
        >
          <path
            d="M5 16H27"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 8H27"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 24H27"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
