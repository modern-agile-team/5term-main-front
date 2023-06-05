import axios from "axios";
import { ILoginForm, LoginResponse } from "interfaces/login";

export const requestLogin = async (data: ILoginForm) => {
  const rsponse = await axios.post<LoginResponse>(`/api/auth/login`, data);

  window.localStorage.setItem("Authorization", rsponse.data.accessToken);
  return rsponse;
};
