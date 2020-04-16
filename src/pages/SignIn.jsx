import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SigininInput from '../components/SigninInput';
import Button from '../components/Button';

const StyledHeader = styled.header`
  background-color: #fff;
  position: relative;
`;

const StyledTitle = styled.h1`
  font-size: 2.8rem;
`;

const StyledSubText = styled.p`
  color: #555;
  font-weight: 400;
  font-size: 1.4rem;
`;

const StyledSignIn = styled.div`
  background-color: pink;
  display: flex;
`;

const StyledImg = styled.img`
  width: 24rem;
  position: absolute;
  right: 0;
  top: 0;
`;


const StyledNotiText = styled.h2`
  background-color: skyblue;
  flex-basis: 50%;
  font-size: 1.8rem;
`;

const StyledSiginInForm = styled.section`
  background-color: gray;
  flex-basis: 50%;
`;

const SignIn = () => {

  return (
    <Layout>
      <StyledHeader>
        <StyledTitle>Review Service<br />For Books</StyledTitle>
        <StyledSubText>Please Share Your Opinion On Web Development Books.</StyledSubText>
        <StyledImg src="/images/readingpeople.png" alt="홈페이지 로고"/>
      </StyledHeader>
      <StyledSignIn>
        <StyledNotiText>LOG IN.<br />START SEARCHING</StyledNotiText>
        <StyledSiginInForm>
          <SigininInput info="email">안녕</SigininInput>
          <SigininInput info="password">안녕</SigininInput>
          <Button colorType="white">SIGN UP</Button>
          <Button colorType="white">SIGN IN</Button>
        </StyledSiginInForm>
      </StyledSignIn>
    </Layout>
  );
};

export default SignIn;
