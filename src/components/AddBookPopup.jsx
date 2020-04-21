import React from 'react';
import styled from 'styled-components';
import Button from './Button';

export const PopupLayout = styled.div`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const PopupBox = styled.section`
  width: 55rem;
  padding: 40px;
  background-color: #fff;
  position: relative;
  z-index: 20;
  button {
    margin: 40px 0 20px;
  }
`;

const PopupTitle = styled.h1`
  font-size: 3.2rem;
  line-height: 1.5;
`;

const PopupNotice = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  color: #555;
  line-height: 1.5;
`;

const GrayLine = styled.span`
  display: block;
  width: 100%;
  height: 4px;
  background-color: #eee;
  margin: 10px 0;
`;

const AddBookPopupLabel = styled.label`
  display: block;
  margin: 20px 0;
`;

const AddBookInputTitle = styled.span`
  display: block;
  font-size: 1.8rem;
  margin-bottom: 5px;
`;

const AddBookPopupInput = styled.input`
  width: 100%;
  border: 2px solid #002D93;
  padding: 20px;
  font-weight: 400;
  font-size: 1.6rem;
  color: #000;
  ::placeholder {
    font-weight: 400;
  }
`;

const CloseButton = styled.button`
  border: 0;
  width: 3rem;
  position: absolute;
  top: 0px;
  right: 40px;
`;

const CloseIcon = styled.img`
  transform: rotate(45deg);
  width: 3rem;
`;

const AddBookPopup = ({ isOpen, setIsOpen }) => {
  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <PopupLayout isOpen={isOpen}>
      <PopupBox>
        <PopupTitle>Review <br />Registration</PopupTitle>
        <PopupNotice>입력하신 값이 없을 경우 등록되지 않습니다.</PopupNotice>
        <GrayLine />
        <AddBookPopupLabel id="author">
          <AddBookInputTitle>저자</AddBookInputTitle>
          <AddBookPopupInput htmlFor="author" placeholder="입력해주세요."/>
        </AddBookPopupLabel>
        <AddBookPopupLabel id="book-title">
          <AddBookInputTitle>제목</AddBookInputTitle>
          <AddBookPopupInput htmlFor="book-title" placeholder="입력해주세요."/>
        </AddBookPopupLabel>
        <Button colorType="blue">등록하기</Button>
        <CloseButton><CloseIcon src="/images/plus.png" alt="책 등록팝업 닫기" onClick={closePopup}/></CloseButton>
      </PopupBox>
    </PopupLayout>
  );
};

export default AddBookPopup;
