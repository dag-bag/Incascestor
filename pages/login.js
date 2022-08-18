/** @format */

import React, { useState } from "react";
import Link from "next/link";
import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router";

function Login({ provider }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const LoginUser = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
      callbackUrl: "/",
    });
    console.log(res);
    if (res?.error) {
      console.log(res);
    }
    if (res?.status === 200) {
      router.push("/");
    }
  };

  const [passShow, setPassShow] = useState(false);
  return (
    <section>
      <div className="flex min- overflow-hidden">
        <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="w-full max-w-xl mx-auto lg:w-96">
            <div>
              <h1 className="mt-6 text-2xl font-semibold text-center text-[#333] uppercase">
                Identifícate
              </h1>
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-600"
                    ></label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required=""
                        placeholder="Your Email"
                        className="block w-full px-5 py-3 text-base  transition duration-500 ease-in-out transform  text-[#333]  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#333] border-b-2 border-[#333] placeholder:text-[#333]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-neutral-600"
                    ></label>
                    <div className="mt-1 relative">
                      <input
                        id="password"
                        name="password"
                        type={`${passShow ? "text" : "password"}`}
                        autoComplete="password"
                        required=""
                        placeholder="Your Password"
                        className="block w-full px-5 py-3 text-base  transition duration-500 ease-in-out transform  text-[#333]  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#333] border-b-2 border-[#333] placeholder:text-[#333]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span
                        className="absolute top-3 right-0 cursor-pointer"
                        onClick={() => {
                          setPassShow(!passShow);
                        }}
                      >
                        <svg
                          width={25}
                          height={25}
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[25px] h-[25px] relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M7 12L5.5 14M20.5 9C19.8612 10.0647 19.041 11.1294 18.0008 12.001M18.0008 12.001C16.5985 13.176 14.7965 14 12.5 14M18.0008 12.001L18 12M18.0008 12.001L19.5 14M12.5 14C8.5 14 6 11.5 4.5 9M12.5 14V16.5M15.5 13.5L16.5 16M9.5 13.5L8.5 16"
                            stroke="#333333"
                            strokeWidth="1.2"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-[#333] hover:text-gray-600 underline"
                      >
                        {" "}
                        ¿Has olvidado tu contraseña?
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-black  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      onClick={(e) => {
                        LoginUser(e);
                      }}
                    >
                      Indentifícate
                    </button>
                  </div>
                </form>
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-neutral-600">
                      {" "}
                      Or continue with{" "}
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-[#333] transition duration-500 ease-in-out transform border-2 border-white shadow-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={() => signIn("google", { callbackUrl: "/" })}
                  >
                    <div className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="w-6 h-6"
                        viewBox="0 0 48 48"
                      >
                        <defs>
                          <path
                            id="a"
                            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                          />
                        </defs>
                        <clipPath id="b">
                          <use xlinkHref="#a" overflow="visible" />
                        </clipPath>
                        <path
                          clipPath="url(#b)"
                          fill="#FBBC05"
                          d="M0 37V11l17 13z"
                        />
                        <path
                          clipPath="url(#b)"
                          fill="#EA4335"
                          d="M0 11l17 13 7-6.1L48 14V0H0z"
                        />
                        <path
                          clipPath="url(#b)"
                          fill="#34A853"
                          d="M0 37l30-23 7.9 1L48 0v48H0z"
                        />
                        <path
                          clipPath="url(#b)"
                          fill="#4285F4"
                          d="M48 48L17 24l-4-3 35-10z"
                        />
                      </svg>
                      <span className="ml-4"> Regístrate con Google</span>
                    </div>
                  </button>
                  <div className="pt-12 pb-12 text-center">
                    <Link href="/signup">
                      <p>
                        Don&#x27;t have an account?
                        <a href="#" className="font-semibold underline">
                          Register here.
                        </a>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 hidden w-0 overflow-hidden lg:block">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src="/assets/product/login.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Login;

export async function getServerSideProps(context) {
  const provider = await getProviders();
  return {
    props: {
      provider,
    },
  };
}
