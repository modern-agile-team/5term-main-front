import axios from "axios";
import { ILoginForm, LoginResponse } from "interfaces/login";

export const requestLogin = async (data: ILoginForm) => {
  try {
    await axios.post<LoginResponse>(`/api/auth/login`, data);
    return false;
  } catch (error: unknown) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 400
    ) {
      return true;
    }
    throw error;
  }
};
