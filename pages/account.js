/** @format */

import { useSession } from "next-auth/react";
import Router, { useRouter } from "next/router";
import React from "react";
import Sidebar from "../components/account/Sidebar";

function Account() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <h1 className="mt-6 text-4xl font-bold text-center text-[#333] uppercase">
          Please Login into your account
        </h1>
      </div>
    );
  }

  return (
    <div>
      <Sidebar />
    </div>
  );
}

export default Account;
