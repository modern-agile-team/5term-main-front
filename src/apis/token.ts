import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUserState } from "store/slice/userSlice";

// export const checkRefreshToken = async () => {
//   try {
//     const response = await axios.get(`/api/auth/get-access-token`);

//     return response;
//   } catch (error: unknown) {
//     if (
//       axios.isAxiosError(error) &&
//       error.response &&
//       error.response.status === 400
//     ) {
//       return false;
//     }
//     throw error;
//   }
// };

export const checkAccessToken = async () => {
  const response = await axios.get(`/api/auth/get-access-token`);

  return response;
};

// refresh api
