import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import * as S from '../components/homeStyle';
// import { Redirect } from 'react-router-dom';
// import useToken from '../hooks/useToken';

const SiginInfo = styled.span`

`;

const SignoutButton = styled.button`
  border: 0;
  margin-left: 10px;
  :hover {
    text-decoration: underline;
  }
`;

const HomeNav = styled.nav`
  position: absolute;
  right: 0;
  top: 20px;
  color: #313131;
  font-weight: 400;
  text-align: right;
`;

const SigninInfoBox = styled.div`

`;

const AddButton = styled.button`
  border: 0;
  width: 8rem;
  height: 8rem;
  background-color: #EAEAEA;
  margin-top: 20px;
`;

const PlusIcon = styled.img`
  width: 4rem;

`;

const BookListMain = styled.main`
  padding: 50px 0;
`;

const BookListUl = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BookInfo = styled.li`
  padding: 10px;
  background-color: #002D93;
  width: 25rem;
  height: 19rem;
  color: #fff;
  :hover {
    background-color: #60B198;
  }
  :nth-child(n+4) {
    margin-top: 40px;
  }
`;

const TopButton = styled.button`
  width: 8rem;
  height: 8rem;
  background-color: #EAEAEA;
  border-radius: 40px;
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const GoUpImg = styled.img`
  width: 20px;
`;

const Home = () => {

  // const token = useToken();
  // if (token === null) {
  //   return <Redirect to="/signin" />;
  // }

  return (
    <Layout>
      <S.Header>
        <S.Title>Review Service<br />For Books</S.Title>
        <HomeNav>
          <SigninInfoBox>
            <SiginInfo>unchd26@gmail.com</SiginInfo>
            <SignoutButton>로그아웃</SignoutButton>
          </SigninInfoBox>
          <AddButton><PlusIcon src="/images/plus.png" alt="책 추가하기"/></AddButton>
        </HomeNav>
      </S.Header>
      <BookListMain>
        <BookListUl>
          <BookInfo> 안녕하세요. </BookInfo>
          <BookInfo> 안녕하세요. </BookInfo>
          <BookInfo> 안녕하세요. </BookInfo>
          <BookInfo> 안녕하세요. </BookInfo>
          <BookInfo> 안녕하세요. </BookInfo>
          <BookInfo> 안녕하세요. </BookInfo>
          <BookInfo> 안녕하세요. </BookInfo>
        </BookListUl>
        <TopButton><GoUpImg src="/images/uparrow.png" alt="최상단으로 스크롤"/></TopButton>
      </BookListMain>
    </Layout>
  );
};

export default Home;
