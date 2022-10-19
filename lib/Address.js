/** @format */

import React from "react";
import { useSession } from "next-auth/react";
import useSWR from "swr";

function AddressInfo() {
  const fetchAddress = async () => {
    const res = await fetch("/api/address?email=" + session?.user?.email);
    const data = await res.json();
    return data;
  };
  const { data: session } = useSession();
  const { data, error, mutate } = useSWR(
    "/api/address?email=" + session?.user?.email,
    fetchAddress
  );
  return { data, error, mutate };
}

export default AddressInfo;
