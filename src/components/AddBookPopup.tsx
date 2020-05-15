import React from 'react';
import Button from './Button';
import * as S from './AddBookPopupStyle';

interface AddBookPopupProps {
  isOpen: Boolean;
  setIsOpen: ;
  loading: Boolean;
  error: ;
  addBook: ;
}

const AddBookPopup = ({ isOpen, setIsOpen, loading, error, addBook }: AddBookPopupProps) => {
  const authorRef = React.createRef<HTMLInputElement>();
  const titleRef = React.createRef<HTMLInputElement>();

  const plusBook = () => {
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
        <S.AddBookPopupLabel id="author">
          <S.AddBookInputTitle>저자</S.AddBookInputTitle>
          <S.AddBookPopupInput htmlFor="author" ref={authorRef} placeholder="입력해주세요." required/>
        </S.AddBookPopupLabel>
        <S.AddBookPopupLabel id="book-title">
          <S.AddBookInputTitle>제목</S.AddBookInputTitle>
          <S.AddBookPopupInput htmlFor="book-title" ref={titleRef} placeholder="입력해주세요." required/>
        </S.AddBookPopupLabel>
        <Button colorType="blue" onClick={plusBook}>등록하기</Button>
        <S.CloseButton><S.CloseIcon src="/images/plus.png" alt="책 등록팝업 닫기" onClick={closePopup}/></S.CloseButton>
      </S.PopupBox>
    </S.PopupLayout>
  );
};

export default AddBookPopup;
