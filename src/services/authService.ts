import { axiosPrivate, axiosPublic } from "../axios";
import { LoginFormInput } from "../pages/login";
import { RegisterFormInput } from "../pages/register";

export const createAccount = async (data: RegisterFormInput) => {
  return axiosPublic.post("/auth/register", data);
};
export const userLogin = async (data: LoginFormInput) => {
  return axiosPublic.post("/auth/login", data);
};
export const getLoggedUser = () => {
  return axiosPrivate.get("/auth/verify-token");
};
