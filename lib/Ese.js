/** @format */

import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const truncate = (string, n) =>
  string?.length > n ? string.substr(0, n - 1) + "....." : string;
export default truncate;
export function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
