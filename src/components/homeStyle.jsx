import styled from 'styled-components';

export const PopupLayout = styled.div`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Header = styled.header`
  padding: 20px 0;
  position: relative;
  border-bottom: 4px solid #eee;
`;

export const Title = styled.h1`
  font-size: 4.0rem;
  line-height: 1.5;
`;

export const Overlay = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  background-color: #000;
  opacity: 0.6;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

export const SiginInfo = styled.span`

`;

export const SignoutButton = styled.button`
  border: 0;
  margin-left: 10px;
  :hover {
    text-decoration: underline;
  }
`;

export const HomeNav = styled.nav`
  position: absolute;
  right: 0;
  top: 20px;
  color: #313131;
  font-weight: 400;
  text-align: right;
`;

export const SigninInfoBox = styled.div`

`;

export const AddButton = styled.button`
  border: 0;
  width: 8rem;
  height: 8rem;
  background-color: #EAEAEA;
  margin-top: 20px;
`;

export const PlusIcon = styled.img`
  width: 4rem;

`;

export const BookListMain = styled.main`
  padding: 50px 0;
  position: relative;
`;

export const A11yMainTItle = styled.h2`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  background-color: transparent;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
`;

export const BookListUl = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const BookInfo = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #002D93;
  width: 25rem;
  height: 19rem;
  color: #fff;
  position: relative;
  :hover {
    background-color: #60B198;
  }
  :nth-child(n+4) {
    margin-top: 40px;
  }
`;

export const BookNumber = styled.p`
  font-weight: 400;
`;

export const BookTitle = styled.p`
  font-size: 2.0rem;
`;

export const BookAuthor = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
`;

export const BookDeleteButton = styled.button`
  border: 0;
  background: transparent;
`;

export const DeleteImg = styled.img`
  width: 20px;
  transform: rotate(45deg);
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const TopButton = styled.button`
  width: 8rem;
  height: 8rem;
  background-color: #EAEAEA;
  border-radius: 40px;
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

export const GoUpImg = styled.img`
  width: 20px;
`;