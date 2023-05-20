import axios from "axios";
import { ILoginForm, LoginResponse } from "interfaces/login";

export const requestLogin = async (data: ILoginForm) => {
  try {
    const response = await axios.post<LoginResponse>(`/api/auth/login`, data);
    const accessToken = response.data.accessToken;

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
