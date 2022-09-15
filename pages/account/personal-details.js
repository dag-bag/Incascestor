/** @format */

import { getSession, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { atom, selector } from "recoil";
import Btn from "../../components/account/Btn";
import Detail from "../../components/account/Detail";
import Input from "../../components/account/Input";
import Sidebar from "../../components/account/Sidebar";

function PersonalDetails() {
  var { data: session } = useSession();
  console.log(session);

  let username = session?.user.email.split("@")[0];
  const [change, setChange] = useState(false);

  const UserData = [
    {
      label: "Username",
    },
    {
      label: "Name",
    },
    {
      label: "Email",
    },
  ];

  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetch("/api/user?email=" + session.user.email);
      const userData = await user.json();
      console.log(userData);
      setUser(userData);
    };

    fetchUser();
  }, []);

  const [user, setUser] = useState([]);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFormChange = async (e) => {
    e.preventDefault();
    const update = await fetch("/api/user?id=" + session.user.email, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        username: user.username,
      }),
    });
    const upd = await update.json();
  };
  return (
    <div>
      <Detail />{" "}
      <form
        className="flex px-2 flex-wrap-reverse m-auto justify-center md:justify-start"
        onSubmit={(e) => {
          handleFormChange(e);
        }}
      >
        <Sidebar />
        <div className=" mt-8 space-y-5">
          <h1 className="font-bold text-[#333] text-3xl">Personal Details</h1>
          <div className="space-y-6">
            <Input
              label={UserData[0].label}
              value={user.username}
              onChange={handleChange}
              name={"username"}
              placeholder="Enter your username"
            />
            <Input
              label={UserData[1].label}
              value={user.name}
              onChange={handleChange}
              name={"name"}
              placeholder="Enter your name"
            />
            <Input label={UserData[2].label} value={session?.user.email} />
          </div>
          <Btn text={"Save Now"} />
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log(session);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
