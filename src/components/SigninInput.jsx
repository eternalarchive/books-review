import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  border: 0;
  border-top: 4px solid #002D93;
  box-shadow: 0px 3px 6px #C4C4C4;
  ::placeholder {
    color: #C4C4C4;
  }
`;

const SytledLabelText = styled.p`
`;

const SigninInput = ({ info }) => {
  return (
    <label htmlFor={info}>
      <SytledLabelText>
        {info.toUpperCase()}
      </SytledLabelText>
      <StyledInput id={info} placeholder={`${info.toUpperCase()}를 입력해주세요`} />
    </label>
  );
};

export default SigninInput;
