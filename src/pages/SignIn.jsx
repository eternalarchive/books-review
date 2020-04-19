import React from 'react';
import Layout from '../components/Layout';
import SigininInput from '../components/SigninInput';
import Button from '../components/Button';
import * as S from '../components/signinStyle';

const SignIn = () => {

  return (
    <Layout>
      <S.Header>
        <S.Title>Review Service <br />For Books</S.Title>
        <S.SubText>Please Share Your Opinion On Web Development Books.</S.SubText>
        <S.MainImg src="/images/readingpeople.png" alt="홈페이지 로고"/>
      </S.Header>
      <S.SignInArea>
        <S.NotiText>LOG IN.<br />START SEARCHING</S.NotiText>
        <S.SiginInForm>
          <S.InputBox>
            <SigininInput info="email" />
            <SigininInput info="password" />
          </S.InputBox>
          <S.ButtonBox>
            <Button colorType="white">SIGN UP</Button>
            <Button colorType="white">SIGN IN</Button>
          </S.ButtonBox>
        </S.SiginInForm>
      </S.SignInArea>
    </Layout>
  );
};

export default SignIn;
