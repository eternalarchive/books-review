import React from "react";
import { Link } from 'react-router-dom'
import Layout from "../components/Layout";
import * as S from '../components/signinStyle';

function NotFound() {
  return (
    <Layout>
      <S.Header>
        <S.Title>404<br />Not Found</S.Title>
        <S.SubText>페이지를 찾을 수 없습니다.</S.SubText>
        <S.MainImg src="/images/readingpeople.png" alt="홈페이지 로고"/>
      </S.Header>
      <Link to="/"><S.GoHome>홈으로 이동하기</S.GoHome></Link>
    </Layout>
  );
};

export default NotFound;
