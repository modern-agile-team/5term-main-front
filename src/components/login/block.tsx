import {
  FocusServeTitle,
  InfoInput,
  InputContainer,
  RelativeContainer,
  ServeTitle,
  ValidText,
} from "components/sign-up/atom";
import { InputProps } from "interfaces/login";
import { useState } from "react";

export function InputBlock({ inputBlockObj, register, errors }: InputProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <InputContainer>
        {isVisible && (
          <FocusServeTitle layoutId="login">
            {inputBlockObj.title}
          </FocusServeTitle>
        )}
        {errors ? (
          <ValidText>{errors?.[inputBlockObj.id]?.message as string}</ValidText>
        ) : (
          <ValidText></ValidText>
        )}
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
            onBlur: () => setIsVisible(false),
          })}
          onFocus={() => setIsVisible(true)}
          type={`${inputBlockObj.type}`}
        />
      </RelativeContainer>
    </>
  );
}
