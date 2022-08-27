/** @format */

import { useSession } from "next-auth/react";
import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { BiLock } from "react-icons/bi";
import Sideboxes from "./Sideboxes";
const dataForSideBoxes = [
  {
    label: "Account Overview",
    icon: BsEmojiSmile,
  },
  {
    label: "Order History",
    icon: GrNotes,
  },
  {
    label: "Personal Details",
    icon: BsEmojiSmile,
  },
  {
    label: "Change Password",
    icon: BiLock,
  },
  {
    label: "Address Book",
    icon: BsEmojiSmile,
  },
];
function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="p-10 max-w-sm">
      <div className="space-y-4">
        <h1 className="mt-6 text-xl font-bold  text-[#333] uppercase flex justify-center items-center">
          Hello {session.user.email}!
        </h1>
        <button className="underline font-medium">Sign out</button>
      </div>
      {/* Side boxes */}
      <div>
        {dataForSideBoxes.map((i, index) => {
          return <Sideboxes key={index} label={i.label} Icon={i.icon} />;
        })}
      </div>
    </div>
  );
}

export default Sidebar;
