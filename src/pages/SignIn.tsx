import React from 'react';
import Layout from '../components/Layout';
import SigninFormContainer from '../containers/SigninFormContainer';
import * as S from '../components/signinStyle';
import withAuth from '../hocs/withAuth';

function SignIn() {
  return (
    <Layout>
      <S.Header>
        <S.Title>Review Service <br />For Books</S.Title>
        <S.SubText>Please Share Your Opinion On Web Development Books.</S.SubText>
        <S.MainImg src="/images/readingpeople.png" alt="홈페이지 로고"/>
      </S.Header>
      <S.SignInArea>
        <S.NotiText>LOG IN.<br />START SEARCHING</S.NotiText>
        <SigninFormContainer />
      </S.SignInArea>
    </Layout>
  );
};

export default withAuth(SignIn, false);
