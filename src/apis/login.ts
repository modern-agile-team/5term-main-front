import axios from "axios";
import { ILoginForm } from "interfaces/login";

export const requestLogin = async (data: ILoginForm) => {
  try {
    const response = await axios.post(`/api/auth/login`, data);
    // return response.status;
    console.log(response);
  } catch (error: unknown) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 400
    ) {
      return 400;
    }
    throw error;
  }
};
