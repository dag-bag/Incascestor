/** @format */

import React, { useEffect, useState } from "react";
import CheckOutBtn from "../../components/buttons/CheckOutBtn";
import CheckOutHeader from "../../components/checkout/CheckOutHeader";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { CheckOutState } from "../../atoms/CheckOutState";
import { useRecoilState } from "recoil";
import { isValidEmail } from "../../lib/Ese";

function Index({ Cart }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkOut, setCheckOut] = useRecoilState(CheckOutState);
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    router.push("/checkout/yourdata");
  }
  const LoginUser = async (e) => {
    e.preventDefault();
    let isValid = isValidEmail(email);

    if (!isValid) {
      setError("Please enter a valid email");
    }
    if (isValid) {
      const res = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
        callbackUrl: "/",
      });

      if (res?.error) {
        setError(res.error);
      }
      if (res?.status === 200) {
        router.push("/checkout/yourdata");
      }
    }
  };

  // useEffect(() => {
  //   let cart = JSON.parse(localStorage.getItem("cart"));

  //   let a = Object.keys(cart);

  //   const getCart = async () => {
  //     const response = await fetch(`http://localhost:3000/api/cart?cart=${a}`);
  //     const data = await response.json();
  //     console.log(data);
  //   };
  //   getCart();
  // }, []);

  return (
    <>
      <CheckOutHeader level={1} />
      <div className="flex  justify-center md:p-10 flex-wrap px-2">
        <div className=" md:w-[45rem] h-[60vh]">
          <form
            onSubmit={(e) => {
              LoginUser(e);
            }}
            className="p-5 flex justify-center items-center flex-col border-2 border-black md:w-[70%] py-10 m-auto space-y-6"
          >
            <h2 className="text-xl capitalize font-medium text-left text-[#333]">
              Ya soy cliente
            </h2>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required=""
                placeholder="E-mail"
                className="block w-full px-5 py-3 text-base  transition duration-500 ease-in-out transform  text-[#333]  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#333] border-2 border-[#333] placeholder:text-[#333]"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <p className="text-red-500">{error}</p>
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required=""
                placeholder="password"
                className="block w-full px-5 py-3 text-base  transition duration-500 ease-in-out transform  text-[#333]  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#333] border-2 border-[#333] placeholder:text-[#333]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-red-500"></p>
            </div>
            <div className="mt-1 flex justify-center items-center space-x-3">
              <input
                id="password"
                name="email"
                type="radio"
                autoComplete="email"
                required=""
              />
              <p className="text-base font-light text-left text-[#333]">
                Recu??rdame + Info
              </p>
            </div>
            <CheckOutBtn>Iniciar Sesi??n</CheckOutBtn>
          </form>
        </div>
        <div className="md:w-[45rem] ">
          <div className="p-5 flex justify-center items-center flex-col border-2 border-black  md:w-[70%] py-10 m-auto space-y-6">
            <h2 className="text-xl capitalize font-medium text-left text-[#333]">
              Continuar como invitado/a
            </h2>
            <p className=" text-base font-light text-center text-[#333]">
              Completa tu pedido sin crear una cuenta. Podr??s guardar tus datos
              en el siguiente paso y ahorrar tiempo en pr??ximas compras.{" "}
            </p>

            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required=""
                placeholder="E-mail"
                className="block w-full px-5 py-3 text-base  transition duration-500 ease-in-out transform  text-[#333]  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#333] border-2 border-[#333] placeholder:text-[#333]"
              />
              <p className="text-red-500"></p>
            </div>
            <h2>PROMOCIONES Y NOVEDADES</h2>
            <div className="mt-1 flex justify-center items-center space-x-3 px-12">
              <input
                id="password"
                name="email"
                type="radio"
                autoComplete="email"
                required=""
              />
              <p className="text-xs font-light text-left text-[#333]">
                Quiero recibir promociones exclusivas, las ??ltimas novedades e
                informaci??n personalizada adaptada a mi perfil como cliente.
              </p>
            </div>
            <CheckOutBtn>Iniciar Sesi??n</CheckOutBtn>
            <p className=" text-xs font-light text-justify text-[#333] px-12">
              <span className=" h-[282px] text-xs font-light text-justify text-[#333]">
                Al hacer clic en la casilla anterior trataremos tus datos,
                obtenidos a trav??s de tu navegaci??n en la web, para ofrecerte un
                contenido af??n a tus gustos, bas??ndonos en tus interacciones con
                la marca. Ten en cuenta que podr??s oponerte a este tratamiento.
              </span>
              <br />
              <br />
              <span className=" h-[282px] text-xs font-light text-justify text-[#333]">
                INFORMACI??N B??SICA SOBRE PROTECCI??N DE DATOS. RESPONSABLE: Punto
                Fa, SL. FINALIDAD: Gesti??n del servicio de env??o de
                comunicaciones personalizadas adaptadas al perfil del
                interesado. LEGITIMACI??N: Consentimiento del interesado.
                DESTINATARIOS: Empresas del Grupo MANGO y empresas encargadas
                del tratamiento de datos. Se pueden producir transferencias
                internacionales. DERECHOS: Puedes ejercitar en cualquier momento
                tus derechos de acceso, rectificaci??n, supresi??n, oposici??n y
                dem??s derechos legalmente establecidos a trav??s del siguiente
                e-mail: personaldata@mango.com. INFORMACI??N ADICIONAL: Puedes
                consultar la informaci??n adicional y detallada sobre protecci??n
                de datos aqu??.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
