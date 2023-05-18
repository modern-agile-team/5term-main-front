import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface InputProps {
  inputBlockObj: {
    id: string;
    title: string;
    type: string;
  };
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}
