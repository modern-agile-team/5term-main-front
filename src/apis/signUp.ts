import axios from "axios";
import { IForm } from "interfaces/signUp";

export const idDuplicationsCheck = async (data: string) => {
  try {
    const response = await axios.get(
      `/api/auth/id-duplication-ckecking/${data}`,
    );
    return response.status;
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

export const nicknameDuplicationsCheck = async (data: String) => {
  try {
    const response = await axios.get(
      `/api/auth/nickname-duplication-ckecking/${data}`,
    );
    return response.status;
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

export const sendCertification = async (data: Number) => {
  try {
    const response = await axios.get(`/api/auth/sms-certification/${data}`);
    console.log(response.data);
    return response.data;
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

export const requestSignUp = async (data: IForm) => {
  try {
    console.log(data);
    const response = await axios.post(`/api/auth/signup`, { data });
    console.log(response);
    // return response.data;
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
