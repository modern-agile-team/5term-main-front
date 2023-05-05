import {
  idDuplicationsCheck,
  nicknameDuplicationsCheck,
  sendCertification,
} from "apis/signUp";
import {
  InputContainer,
  InfoInput,
  ServeTitle,
  ValidText,
  SendCertificationBtn,
  CertificationBtn,
  RelativeContainer,
  FocusServeTitle,
  AnnotationText,
} from "./atom";
import { InputProps } from "interfaces/signUp";
import { useState } from "react";
import { debounce } from "utils/debounce";
import { VALIDATION_LIST } from "constants/signUp";

export const InputBlock = ({
  inputBlockObj,
  register,
  errors,
  trigger,
  getValues,
  setError,
}: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const onBlurEvent = (event: React.FocusEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setIsVisible(Boolean(value));
  };

  const onChangeEvent = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    // nothing in input
    if (value === "") {
      return;
    }

    await trigger(inputBlockObj.id);
    if (event.target.name === "password") {
      await trigger("checkPassword");
    }

    if (event.target.name === "password" || "checkPassword") {
      if (getValues("password") !== getValues("checkPassword")) {
        setError("checkPassword", { message: "비밀번호가 일치하지 않습니다." });
      }
    } else if (event.target.name === "id") {
      if ((await idDuplicationsCheck(event.target.value)) === 400) {
        setError("id", { message: "이미 사용중인 아이디 입니다." });
      }
    } else if (event.target.name === "nickname") {
      if ((await nicknameDuplicationsCheck(event.target.value)) === 400) {
        setError("nickname", { message: "이미 사용중인 닉네임 입니다." });
      }
    }
  };

  const requestCertificationNum = async (
    event: React.MouseEvent<HTMLButtonElement>,
    errors: { [key: string]: any },
  ) => {
    event.preventDefault();
    VALIDATION_LIST.phone = false;
    if (!errors.phone) {
      const response = await sendCertification(Number(getValues("phone")));
      if (response === 400) {
        setError("phone", { message: "이미 가입된 번호 입니다." });
        VALIDATION_LIST.phone = false;
      } else {
        VALIDATION_LIST.certificationNumber = response.certificationNumber;
        VALIDATION_LIST.phone = true;
      }
    }
  };

  const ValidationCertification = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    const certificationNum = getValues("certificationNumber");
    if (certificationNum !== null) {
      if (!VALIDATION_LIST.phone) {
        setError("certificationNumber", {
          message: "인증번호가 전송되지 않았습니다.",
        });
        VALIDATION_LIST.certification = false;
      } else if (VALIDATION_LIST.certificationNumber !== certificationNum) {
        setError("certificationNumber", {
          message: "인증번호가 일치하지 않습니다.",
        });
        VALIDATION_LIST.certification = false;
      } else {
        VALIDATION_LIST.certification = true;
      }
    }
  };

  return (
    <>
      <InputContainer>
        {isVisible && (
          <FocusServeTitle layoutId="underline">
            {inputBlockObj.title}
          </FocusServeTitle>
        )}
        <ValidText>{errors?.[inputBlockObj.id]?.message as string}</ValidText>
      </InputContainer>
      <RelativeContainer>
        {!isVisible && (
          <ServeTitle layoutId="underline">{inputBlockObj.title}</ServeTitle>
        )}
        <AnnotationText>{inputBlockObj.placeholder}</AnnotationText>
        {inputBlockObj.id === "phone" && (
          <SendCertificationBtn
            onClick={(e) => requestCertificationNum(e, errors)}
          >
            인증번호 전송
          </SendCertificationBtn>
        )}
        {inputBlockObj.id === "certificationNumber" && (
          <CertificationBtn onClick={ValidationCertification}>
            본인인증
          </CertificationBtn>
        )}
        <InfoInput
          id={inputBlockObj.id}
          {...register(`${inputBlockObj.id}`, {
            required: {
              value: inputBlockObj.id !== "email",
              message: "필수 입력 사항 입니다.",
            },
            pattern: inputBlockObj.pattern,
            onChange: debounce(onChangeEvent, 500),
            onBlur: onBlurEvent,
          })}
          onFocus={() => setIsVisible(true)}
          type={`${inputBlockObj.type}`}
        />
      </RelativeContainer>
    </>
  );
};