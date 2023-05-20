import {
  FocusServeTitle,
  InfoInput,
  InputContainer,
  RelativeContainer,
  ServeTitle,
  ValidText,
} from "components/signup/atom";
import { InputProps } from "interfaces/login";
import { useState } from "react";

export function InputBlock({
  inputBlockObj,
  register,
  errors,
  getValues,
}: InputProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <InputContainer>
        {isVisible && (
          <FocusServeTitle layoutId="login">
            {inputBlockObj.title}
          </FocusServeTitle>
        )}
        <ValidText>{errors?.[inputBlockObj.id]?.message as string}</ValidText>
      </InputContainer>
      <RelativeContainer>
        {!isVisible && (
          <ServeTitle layoutId="login">{inputBlockObj.title}</ServeTitle>
        )}
        <InfoInput
          id={inputBlockObj.id}
          {...register(`${inputBlockObj.id}`, {
            required: {
              value: true,
              message: "필수 입력 사항 입니다.",
            },
            onBlur: () => {
              if (!getValues(`${inputBlockObj.id}`)) setIsVisible(false);
            },
          })}
          onFocus={() => setIsVisible(true)}
          type={`${inputBlockObj.type}`}
        />
      </RelativeContainer>
    </>
  );
}
