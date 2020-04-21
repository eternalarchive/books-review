import styled from 'styled-components';

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

export const PopupBox = styled.section`
  width: 55rem;
  padding: 40px;
  background-color: #fff;
  position: relative;
  z-index: 20;
  button {
    margin: 40px 0 20px;
  }
`;

export const PopupTitle = styled.h1`
  font-size: 3.2rem;
  line-height: 1.5;
`;

export const PopupNotice = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  color: #555;
  line-height: 1.5;
`;

export const GrayLine = styled.span`
  display: block;
  width: 100%;
  height: 4px;
  background-color: #eee;
  margin: 10px 0;
`;

export const AddBookPopupLabel = styled.label`
  display: block;
  margin: 20px 0;
`;

export const AddBookInputTitle = styled.span`
  display: block;
  font-size: 1.8rem;
  margin-bottom: 5px;
`;

export const AddBookPopupInput = styled.input`
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

export const CloseButton = styled.button`
  border: 0;
  width: 3rem;
  position: absolute;
  top: 0px;
  right: 40px;
`;

export const CloseIcon = styled.img`
  transform: rotate(45deg);
  width: 3rem;
`;