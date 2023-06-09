import {
  FieldErrors,
  FieldValues,
  UseFormClearErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetError,
  UseFormTrigger,
} from "react-hook-form";

export interface InputProps {
  inputBlockObj: {
    id: string;
    type?: string;
    title: string;
    validText?: string;
    placeholder?: string;
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  setError: UseFormSetError<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
}

export interface IForm {
  id?: string;
  nickName?: string;
  password?: string;
  checkPassword?: string;
  phone?: string;
  certificationNumber?: string;
  email?: string;
  extraError?: string;
}

export interface IValidationList {
  [key: string]: { value: boolean; message: string };
}

export interface Icerification {
  number: number | null;
}
