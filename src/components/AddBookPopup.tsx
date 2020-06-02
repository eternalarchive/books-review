import React, { createRef } from 'react';
import Button from './Button';
import * as S from './AddBookPopupStyle';

type AddBookPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loading: Boolean;
  error: {};
  addBook: (author: string, title: string) => void;
}

const AddBookPopup = ({ isOpen, setIsOpen, loading, error, addBook }: AddBookPopupProps) => {
  const authorRef: React.RefObject<HTMLInputElement> = createRef();
  const titleRef: React.RefObject<HTMLInputElement> = createRef();

  const plusBook = () => {
    if(!authorRef.current || !titleRef.current) return;
    const author = authorRef.current.value.trim();
    const title = titleRef.current.value.trim();
    if (author !== '' && title !== '') {
      console.log(author, title);
      addBook(author, title);
      authorRef.current.value = '';
      titleRef.current.value = '';
    }
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <S.PopupLayout isOpen={isOpen}>
      <S.PopupBox>
        <S.PopupTitle>Review <br />Registration</S.PopupTitle>
        <S.PopupNotice>입력하신 값이 없을 경우 등록되지 않습니다.</S.PopupNotice>
        <S.GrayLine />
        <S.AddBookPopupLabel htmlFor="author">
          <S.AddBookInputTitle>저자</S.AddBookInputTitle>
          <S.AddBookPopupInput id="author" ref={authorRef} placeholder="입력해주세요." required/>
        </S.AddBookPopupLabel>
        <S.AddBookPopupLabel htmlFor="book-title">
          <S.AddBookInputTitle>제목</S.AddBookInputTitle>
          <S.AddBookPopupInput id="book-title" ref={titleRef} placeholder="입력해주세요." required/>
        </S.AddBookPopupLabel>
        <Button colorType="blue" onClick={plusBook}>등록하기</Button>
        <S.CloseButton><S.CloseIcon src="/images/plus.png" alt="책 등록팝업 닫기" onClick={closePopup}/></S.CloseButton>
      </S.PopupBox>
    </S.PopupLayout>
  );
};

export default AddBookPopup;
