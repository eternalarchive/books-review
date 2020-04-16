import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  padding: 10px;
  border: 2px solid #002D93;
  background-color: ${props => (props.colorType === 'white' ? '#fff' : '#002D93')};
  :hover {
    border: 2px solid #60B198;
    background-color: #60B198;
    color: #fff;
  }
`;

const StyledArrow = styled.span`
  display: inline-block;
  width: 50px;
  height: 20px;
  background-image: url('/images/arrow.png');
  background-position-x: 100%;
`;

const Button = ({ colorType, children }) => {
  return (
    <StyledButton colorType={colorType}>
      <span>{children}</span>
      <StyledArrow></StyledArrow>
    </StyledButton>
  );
};

export default Button;
