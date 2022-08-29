/** @format */

import { useSession } from "next-auth/react";
import React from "react";
import Sideboxes from "./Sideboxes";

import { useRecoilValue } from "recoil";
import { accountAtom } from "../../atoms/accountAtom";

function Sidebar() {
  const { data: session } = useSession();
  const accountData = useRecoilValue(accountAtom);

  return (
    <div className="p-10 max-w-4xl w-[24rem] md:ml-10">
      {/* Side boxes */}
      <div>
        {accountData.map((i, index) => {
          return (
            <Sideboxes
              key={index}
              label={i.label}
              Icon={i.icon}
              link={i.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
