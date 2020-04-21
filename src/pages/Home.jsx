import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';
import AddBookPopup from '../components/AddBookPopup';
import * as S from '../components/homeStyle';
// import { Redirect } from 'react-router-dom';
// import useToken from '../hooks/useToken';

const optionModalRoot = document.getElementById('addbook-modal');

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const token = useToken();
  // if (token === null) {
  //   return <Redirect to="/signin" />;
  // }

  // useEffect(() => {
  //   const $root = document.querySelector('#root');
  //   if (isOpen) {
  //     $root.style.position = 'fixed';
  //   } else {
  //     $root.style.position = 'relative';
  //   }
  // }, [isOpen]);

  const renderPopup = () => {
    const closePopup = () => {
      setIsOpen(false);
    };

    return (
      <>
        <AddBookPopup isOpen={isOpen} setIsOpen={setIsOpen}/>
        <S.Overlay isOpen={isOpen} setIsOpen={setIsOpen} onClick={closePopup}/>
      </>
    )
  };

  const openPopup = () => {
    setIsOpen(true);
  };

  const goScrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {ReactDOM.createPortal(renderPopup(), optionModalRoot)}
      <Layout>
        <S.Header>
          <S.Title>Review Service <br />For Books</S.Title>
          <S.HomeNav>
            <S.SigninInfoBox>
              <S.SiginInfo>unchd26@gmail.com</S.SiginInfo>
              <S.SignoutButton>로그아웃</S.SignoutButton>
            </S.SigninInfoBox>
            <S.AddButton onClick={openPopup}><S.PlusIcon src="/images/plus.png" alt="책 추가하기"/></S.AddButton>
          </S.HomeNav>
        </S.Header>
        <S.BookListMain>
          <S.A11yMainTItle>책 목록</S.A11yMainTItle>
          <S.BookListUl>
            <S.BookInfo>
              <S.BookNumber>123</S.BookNumber>
              <S.BookTitle>백의 그림자</S.BookTitle>
              <S.BookAuthor>황정은</S.BookAuthor>
              <S.BookDeleteButton><S.DeleteImg src="/images/plus-white.png" alt="책 지우기" /></S.BookDeleteButton>
            </S.BookInfo>
            <S.BookInfo>
              <S.BookNumber>124</S.BookNumber>
              <S.BookTitle>우리가 빛의 속도로 갈 수 없다면</S.BookTitle>
              <S.BookAuthor>김초엽</S.BookAuthor>
              <S.BookDeleteButton><S.DeleteImg src="/images/plus-white.png" alt="책 지우기" /></S.BookDeleteButton>
            </S.BookInfo>
            <S.BookInfo>
              <S.BookNumber>124</S.BookNumber>
              <S.BookTitle>우리가 빛의 속도로 갈 수 없다면</S.BookTitle>
              <S.BookAuthor>김초엽</S.BookAuthor>
              <S.BookDeleteButton><S.DeleteImg src="/images/plus-white.png" alt="책 지우기" /></S.BookDeleteButton>
            </S.BookInfo>
            <S.BookInfo>
              <S.BookNumber>124</S.BookNumber>
              <S.BookTitle>우리가 빛의 속도로 갈 수 없다면</S.BookTitle>
              <S.BookAuthor>김초엽</S.BookAuthor>
              <S.BookDeleteButton><S.DeleteImg src="/images/plus-white.png" alt="책 지우기" /></S.BookDeleteButton>
            </S.BookInfo>
            {/* <S.BookInfo>
              <S.BookNumber>124</S.BookNumber>
              <S.BookTitle>우리가 빛의 속도로 갈 수 없다면</S.BookTitle>
              <S.BookAuthor>김초엽</S.BookAuthor>
              <S.BookDeleteButton><S.DeleteImg src="/images/plus-white.png" alt="책 지우기" /></S.BookDeleteButton>
            </S.BookInfo>
            <S.BookInfo>
              <S.BookNumber>124</S.BookNumber>
              <S.BookTitle>우리가 빛의 속도로 갈 수 없다면</S.BookTitle>
              <S.BookAuthor>김초엽</S.BookAuthor>
              <S.BookDeleteButton><S.DeleteImg src="/images/plus-white.png" alt="책 지우기" /></S.BookDeleteButton>
            </S.BookInfo>
            <S.BookInfo>
              <S.BookNumber>124</S.BookNumber>
              <S.BookTitle>우리가 빛의 속도로 갈 수 없다면</S.BookTitle>
              <S.BookAuthor>김초엽</S.BookAuthor>
              <S.BookDeleteButton><S.DeleteImg src="/images/plus-white.png" alt="책 지우기" /></S.BookDeleteButton>
            </S.BookInfo> */}
          </S.BookListUl>
          <S.TopButton onClick={goScrollTop}><S.GoUpImg src="/images/uparrow.png" alt="최상단으로 스크롤"/></S.TopButton>
        </S.BookListMain>
      </Layout>
    </>
  );
};

export default Home;
