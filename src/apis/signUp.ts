import axios from "axios";

export const idDuplicationsCheck = async (data: String) => {
  const response = await axios.get(`/api/auth/id-duplication-ckecking/${data}`);
  return response.status;
};

export const nickNameDuplicationsCheck = async (data: String) => {
  const response = await axios.get(
    `/api/auth/nickname-duplication-ckecking/${data}`,
  );
  return response.status;
};
