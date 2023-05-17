import { requestSignUp } from "apis/signUp";
import { Container, Header, SignUpBtn } from "components/signUp/atom";
import { InputBlock } from "components/signUp/block";
import { INPUT_BLOCK, VALIDATION_LIST } from "constants/signUp";
import { LayoutGroup } from "framer-motion";
import { IForm } from "interfaces/signUp";
import { useForm } from "react-hook-form";

export default function SignUpFormView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setError,
    getValues,
    setFocus,
    clearErrors,
  } = useForm();

  const onValid = (event: React.MouseEvent<HTMLButtonElement>) => {
    for (let list of Object.keys(VALIDATION_LIST)) {
      if (!VALIDATION_LIST[list].value) {
        setError(`${list}`, { message: VALIDATION_LIST[list].message });
      }
    }
    const errorsArray = Object.keys(errors);
    if (errorsArray.length > 0) {
      event.preventDefault();
      setFocus(errorsArray[0]);
    }
  };

  const signUp = async (data: IForm) => {
    await requestSignUp(data);
  };

  return (
    <form onSubmit={handleSubmit(signUp)}>
      <Container>
        <Header>회원가입</Header>
        {INPUT_BLOCK.map(({ inputBlockObj }, index) => {
          return (
            <LayoutGroup key={inputBlockObj.id} id={`${index}`}>
              <InputBlock
                register={register}
                inputBlockObj={inputBlockObj}
                errors={errors}
                trigger={trigger}
                getValues={getValues}
                setError={setError}
                clearErrors={clearErrors}
              ></InputBlock>
            </LayoutGroup>
          );
        })}
        <SignUpBtn onClick={onValid}>회원가입</SignUpBtn>
      </Container>
    </form>
  );
}
