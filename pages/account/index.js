/** @format */

import { signOut, useSession } from "next-auth/react";
import React from "react";
import { accountAtom } from "../../atoms/accountAtom";
import Sidebar from "../../components/account/Sidebar";
import SideBox from "../../components/account/SideBox";
import { useRecoilValue } from "recoil";
import Link from "next/link";
import Detail from "../../components/account/Detail";
function Account() {
  const accountData = useRecoilValue(accountAtom);
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="h-[60vh] flex justify-center items-center flex-col">
        <h1 className="mt-6 text-4xl font-bold text-center text-[#333] uppercase">
          Please Login into your account
        </h1>
        <Link href={"/login"}>
          <button className="bg-[#333] text-white rounded-sm py-2 px-3 mt-4">
            Login Now
          </button>
        </Link>
      </div>
    );
  }
  return (
    <>
      <Detail />
      <div className="flex flex-wrap-reverse">
        <Sidebar />
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl md:ml-5 gap-5 mt-8 px-4 md:px-0 md:mb-4">
          {accountData.map((i, index) => {
            return (
              <SideBox
                key={index}
                label={i.label}
                Icon={i.icon}
                link={i.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Account;
