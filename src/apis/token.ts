import axios from "axios";

export const checkAccessToken = async () => {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("Authorization")}`;
  const response = await axios.get(`/api/auth/access-token-validation`);
  return response;
};

export const checkFreshToken = async () => {
  const response = await axios.get(`/api/auth/get-access-token`);
  return response;
};
