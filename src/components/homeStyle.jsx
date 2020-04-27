import styled from 'styled-components';

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
  margin-left: -30px;
  overflow: hidden;
`;

export const BookInfo = styled.li`
  float: left;
  padding: 20px;
  margin-left: 42px;
  margin-bottom: 30px;
  background-color: #002D93;
  width: 25rem;
  height: 19rem;
  color: #fff;
  position: relative;
  word-break: keep-all;
  :hover {
    background-color: #60B198;
  }
  ::after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const BookNumber = styled.p`
  font-weight: 400;
  `;

export const BookTitle = styled.h3`
  font-size: 2.0rem;
  margin-top: 15px;
`;

export const BookAuthor = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  position: absolute;
  bottom: 20px;
`;

export const BookDeleteButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: 0;
  background: transparent;
`;

export const DeleteImg = styled.img`
  width: 20px;
  transform: rotate(45deg);
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