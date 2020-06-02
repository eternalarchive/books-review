import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import Layout from '../components/Layout';
import AddBookPopupContainer from '../containers/AddBookPopupContainer';
import BooksContainer from '../containers/BooksContainer';
import useToken from '../hooks/useToken';
import * as S from '../components/homeStyle';
import { startLogoutSaga } from '../redux/modules/auth';
import { RootState } from '../redux/modules/reducer';

const optionModalRoot = document.getElementById('addbook-modal');

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const token = useToken();
  const userID: number = useSelector((state: RootState) => state.auth.userId);

  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isOpen]);

  if (token === null) {
    return <Redirect to="/signin" />;
  }

  const renderPopup = () => {
    const closePopup = () => {
      setIsOpen(false);
    };

    return (
      <>
        <AddBookPopupContainer isOpen={isOpen} setIsOpen={setIsOpen}/>
        <S.Overlay isOpen={isOpen} setIsOpen={setIsOpen} onClick={closePopup}/>
      </>
    )
  };

  const openPopup = () => {
    setIsOpen(true);
  };

  const signoutClick = () => {
    dispatch(startLogoutSaga());
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
              <S.SiginInfo>{userID}</S.SiginInfo>
              <S.SignoutButton onClick={signoutClick}>로그아웃</S.SignoutButton>
            </S.SigninInfoBox>
            <S.AddButton onClick={openPopup}><S.PlusIcon src="/images/plus.png" alt="책 추가하기"/></S.AddButton>
          </S.HomeNav>
        </S.Header>
        <S.BookListMain>
          <S.A11yMainTItle>책 목록</S.A11yMainTItle>
          <BooksContainer />
          <S.TopButton onClick={goScrollTop}><S.GoUpImg src="/images/uparrow.png" alt="최상단으로 스크롤"/></S.TopButton>
        </S.BookListMain>
      </Layout>
    </>
  );
};

export default Home;
