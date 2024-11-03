import { axiosPublic } from "../axios";

export const fetchUser = async (userId: string) => {
  return axiosPublic.get(`/user/${userId}`);
};
export const fetchSalesforceData = async () => {
  return axiosPublic.get("/user/salesforce");
};
