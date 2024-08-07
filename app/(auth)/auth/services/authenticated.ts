import { cookies } from "next/headers";
import { AUTHENTICATION_COOKIE } from "../../../common/constants/auth-cookie.constant";

export default function authenticated() {
  return !!cookies().get(AUTHENTICATION_COOKIE)?.value;
}
