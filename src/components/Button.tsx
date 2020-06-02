import React from 'react';
import styled from 'styled-components';

type StyledButtonProps = {
  colorType: string;
}

type ButtonProps = {
  colorType: string;
  children?: React.ReactNode;
  onClick: () => void;
};

const StyledButton = styled.button<StyledButtonProps>`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  border: 2px solid #002D93;
  color: ${props => (props.colorType === 'white' ? '#002D93' : '#fff')};
  background-color: ${props => (props.colorType === 'white' ? '#fff' : '#002D93')};
  font-size: 1.8rem;
  line-height: 1.5;
  :hover {
    border: 2px solid #60B198;
    background-color: #60B198;
    color: #fff;
    span {
      background-position-x: 0%;
    }
  }
`;

const StyledArrow = styled.span<StyledButtonProps>`
  display: inline-block;
  width: 20px;
  height: 10px;
  background-image: url('/images/arrow.png');
  background-size: 40px;
  background-repeat: no-repeat;
  background-position-x: ${props => (props.colorType === 'white' ? '100%' : '0%')};
`;

const Button = ({ colorType, children, onClick }: ButtonProps) => {
  return (
    <StyledButton colorType={colorType} onClick={onClick}>
      <span>{children}</span>
      <StyledArrow colorType={colorType}></StyledArrow>
    </StyledButton>
  );
};

Button.defaultProps = {
  colorType: 'white',
}

export default Button;
