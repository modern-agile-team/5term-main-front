import axios from "axios";
import { IDuplications } from "interfaces/signUp";

export const duplicationsCheck = async ({ data }: IDuplications) => {
  console.log(data);
  await axios
    .get(`/api/auth/id-duplication-ckecking/${data}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
