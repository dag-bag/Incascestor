/** @format */

import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="">
      <footer className="footer p-10 bg-[#e8e8e8]/80 text-black">
        <div>
          <span className="footer-title text-primary-1 opacity-100">
            Services
          </span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title text-primary-1 opacity-100">
            Company
          </span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>

        <div>
          <span className="footer-title text-primary-1 opacity-100">
            Newsletter
          </span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16 bg-white"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none bg-primary-1 border-none hover:bg-white hover:text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a>
              <AiFillFacebook className="text-3xl text-blue-500" />
            </a>
            <a>
              <AiFillTwitterCircle className="text-3xl text-blue-400" />
            </a>
            <a>
              <AiFillYoutube className="text-3xl text-red-500" />
            </a>
          </div>
        </div>
      </footer>{" "}
      {/* <div className="  w-full flex justify-evenly items-center flex-wrap ">
        <div className="w-[45%] md:w-auto h-44 my-10">
          <h1 className="text-sm font-medium text-left text-[#bd9575] py-3">
            Sobre nosotros
          </h1>
          <div className="list-none space-y-2">
            <li className="text-xs font-light text-left text-[#333]">
              ¿Qué es Incancestry?
            </li>
            <li className="text-xs font-light text-left text-[#333]">Ropa</li>
            <li className="text-xs font-light text-left text-[#333]">
              Home deco
            </li>
            <li className="text-xs font-light text-left text-[#333]">
              Nosotros
            </li>
            <li className="text-xs font-light text-left text-[#333]">Blog</li>

            <li className="text-xs font-light text-left text-[#333]">
              Contacto
            </li>
          </div>
        </div>{" "}
        <div className="w-[45%] md:w-auto h-44 mt-10">
          <h1 className="text-sm font-medium text-left text-[#bd9575] py-2">
            Categorías
          </h1>
          <div className="list-none space-y-2">
            <li className="text-xs font-light text-left text-[#333]">
              Peluches
            </li>
            <li className="text-xs font-light text-left text-[#333]">Blog</li>
            <li className="text-xs font-light text-left text-[#333]">
              Aviso legal
            </li>
            <li className="text-xs font-light text-left text-[#333]">
              Política de cookies
            </li>
            <li className="text-xs font-light text-left text-[#333]">
              Condiciones legales
            </li>
          </div>
        </div>
        <div className="w-[45%] md:w-auto mt-10 h-44 ">
          {" "}
          <h1 className="text-sm font-medium text-left text-[#bd9575] py-3">
            Atención al cliente
          </h1>
          <div className="list-none space-y-2">
            <li className="text-xs font-medium text-left text-[#333]">
              +51 974 208 234{" "}
            </li>
            <li className="text-xs font-light text-left text-[#333]">
              incancestry1@gmail.com
            </li>
          </div>
        </div>
        <div className="w-[45%]  md:w-auto mt-10 h-44">
          <h1 className="text-sm font-medium text-left text-[#bd9575]">
            Síguenos
          </h1>
          <div
            className="flex space-x-3 mt-4  
        "
          >
            <div>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M15 12L10.5 9V15L15 12Z"
                  stroke="#BD9575"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.25 12C2.25 14.7895 2.5382 16.4263 2.75729 17.2675C2.81585 17.4972 2.92832 17.7097 3.08537 17.8873C3.24241 18.0649 3.43952 18.2026 3.66037 18.2888C6.79883 19.4949 12 19.4618 12 19.4618C12 19.4618 17.2011 19.4949 20.3396 18.2888C20.5604 18.2026 20.7576 18.0649 20.9146 17.8873C21.0717 17.7097 21.1841 17.4972 21.2427 17.2675C21.4618 16.4263 21.75 14.7896 21.75 12C21.75 9.21039 21.4618 7.57368 21.2427 6.73248C21.1841 6.50273 21.0717 6.29025 20.9146 6.11264C20.7576 5.93502 20.5605 5.79738 20.3396 5.71113C17.2012 4.50506 12 4.53818 12 4.53818C12 4.53818 6.79888 4.50506 3.66039 5.71112C3.43955 5.79737 3.24244 5.93501 3.08539 6.11262C2.92834 6.29024 2.81588 6.50272 2.75731 6.73246C2.53821 7.57366 2.25 9.21039 2.25 12Z"
                  stroke="#BD9575"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  stroke="#BD9575"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.75 8.25012H14.25C13.6533 8.25012 13.081 8.48718 12.659 8.90913C12.2371 9.33109 12 9.90339 12 10.5001V21.0001"
                  stroke="#BD9575"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 13.5001H15"
                  stroke="#BD9575"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
                  stroke="#BD9575"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.125 3.375H7.875C5.38972 3.375 3.375 5.38972 3.375 7.875V16.125C3.375 18.6103 5.38972 20.625 7.875 20.625H16.125C18.6103 20.625 20.625 18.6103 20.625 16.125V7.875C20.625 5.38972 18.6103 3.375 16.125 3.375Z"
                  stroke="#BD9575"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.875 8.0625C17.3928 8.0625 17.8125 7.64277 17.8125 7.125C17.8125 6.60723 17.3928 6.1875 16.875 6.1875C16.3572 6.1875 15.9375 6.60723 15.9375 7.125C15.9375 7.64277 16.3572 8.0625 16.875 8.0625Z"
                  fill="#BD9575"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#bd9575] py-5 max-w-6xl m-auto">
        <p className="text-[11px] text-center text-[#bd9575]">
          © 2022 Incancestry todos los derechos reservados - Designer
          @SusanFiorella & Developer @Vicky
        </p>
      </div> */}
    </div>
  );
}

export default Footer;
