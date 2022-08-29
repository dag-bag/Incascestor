/** @format */

import { signOut, useSession } from "next-auth/react";
import React from "react";

function Detail() {
  const { data: session } = useSession();
  return (
    <div className="space-y-4 md:ml-20 px-5">
      <h1 className="mt-6 text-2xl font-bold  text-[#333] uppercase ">
        Hello {session?.user?.email}!
      </h1>
      <button
        className="underline font-medium"
        onClick={() => {
          signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
}

export default Detail;
