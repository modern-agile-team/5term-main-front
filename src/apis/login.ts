import axios from "axios";
import { ILoginForm, LoginResponse } from "interfaces/login";

export const requestLogin = async (data: ILoginForm) => {
  try {
    const response = await axios.post<LoginResponse>(`/api/auth/login`, data);
    const refreshToken = "test refreshToken"; //response.data.refreshToken;

    const expires = new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000,
    ).toUTCString(); //7일

    document.cookie = `refreshToken=${refreshToken}; expires=${expires}; path=/; HttpOnly`;

    return true;
  } catch (error: unknown) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 400
    ) {
      return false;
    }
    throw error;
  }
};
