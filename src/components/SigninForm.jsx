import React from 'react';
import SigininInput from './SigninInput';
import Button from './Button';
import * as S from './signinStyle';

const SigninForm = ({ loading, login, error }) => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  async function signinClick() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log('email:', email, 'password:', password);
    login(email, password);
  }

  return (
    <S.SiginInForm>
      <S.InputBox>
        <SigininInput info="email" refName={emailRef}/>
        <SigininInput info="password" refName={passwordRef}/>
      </S.InputBox>
      <S.ButtonBox>
        <Button colorType="white" onClick={signinClick}>SIGN IN</Button>
        <Button colorType="white">SIGN UP</Button>
      </S.ButtonBox>
  </S.SiginInForm>
  );
};

export default SigninForm;
