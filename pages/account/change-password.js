/** @format */

import Input from "../../components/account/Input";
import React from "react";
import Btn from "../../components/account/Btn";
import Detail from "../../components/account/Detail";
import Sidebar from "../../components/account/Sidebar";

function ChangePassword() {
  const [password, setPassword] = React.useState({
    oldPassword: "",
    newPassword: "",
  });
  const handleChange = (e) => {
    setPassword((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <Detail />
      <form
        className="flex flex-wrap-reverse px-4"
        onSubmit={(e) => {
          // handleFormChange(e);
        }}
      >
        <Sidebar />
        <div className=" mt-8 space-y-5">
          <h1 className="font-bold text-[#333] text-3xl">Change Password</h1>
          <div className="space-y-6">
            <Input
              label={"Old Password"}
              value={password.oldPassword}
              onChange={handleChange}
              name={"oldPassword"}
              placeholder="Enter your old pass"
            />
            <Input
              label={"New Password"}
              value={password.newPassword}
              onChange={handleChange}
              name={"newPassword"}
              placeholder="Enter your old pass"
            />
          </div>
          <Btn text={"Save Now"} />
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
