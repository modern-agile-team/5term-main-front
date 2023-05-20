import {
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";

export interface InputProps {
  inputBlockObj: {
    id: string;
    title: string;
    type: string;
  };
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
}

export interface ILoginForm {
  id?: string;
  password?: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  status: number;
}
