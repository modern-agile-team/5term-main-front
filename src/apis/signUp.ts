import axios from "axios";

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
