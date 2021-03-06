import React, { useState, useEffect } from 'react';
import SigininInput from './SigninInput';
import Button from './Button';
import * as S from './signinStyle';

const SigninForm = ({ loading, login, error }) => {
  const [errorNoti, setErrorNoti] = useState('');
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  useEffect(() => {
    if (error === null) return;
    if (error.response.data.error === 'USER_NOT_EXIST') {
      setErrorNoti('아이디가 존재하지 않습니다.');
    } else if (error.response.data.error === 'PASSWORD_NOT_MATCH') {
      setErrorNoti('비밀번호가 틀렸습니다.');
    } else {
      setErrorNoti('로그인에 문제가 있습니다.');
    }
  }, [error]);

  async function signinClick() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log('email:', email, 'password:', password);
    login(email, password);
  }

  const siginupClick = () => {
    alert('준비중입니다.');
  };

  return (
    <S.SiginInForm>
      <S.InputBox>
        <SigininInput info="email" refName={emailRef}/>
        <SigininInput info="password" refName={passwordRef}/>
        <S.ErrorMessage>{errorNoti}</S.ErrorMessage>
      </S.InputBox>
      <S.ButtonBox>
        <Button colorType="white" onClick={signinClick}>SIGN IN</Button>
        <Button colorType="white" onClick={siginupClick}>SIGN UP</Button>
      </S.ButtonBox>
  </S.SiginInForm>
  );
};

export default SigninForm;
