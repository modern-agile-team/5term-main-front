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
  } = useForm();

  const onValid = (data: IForm) => {
    console.log(Object.values(VALIDATION_LIST));
    console.log("성공");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
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
              ></InputBlock>
            </LayoutGroup>
          );
        })}
        <SignUpBtn>회원가입</SignUpBtn>
      </Container>
    </form>
  );
}
