import React from 'react';
import styled from 'styled-components';

type SigninInputProps = {
  info: string;
  refName: any;
};

const StyledInput = styled.input`
  width: 100%;
  height: 7rem;
  padding: 20px;
  border: 0;
  border-top: 6px solid #002D93;
  box-shadow: 0px 3px 6px #C4C4C4;
  color: #000;
  font-size: 1.6rem;
  font-weight: 400;
  ::placeholder {
    color: #C4C4C4;
  }
`;

const SytledLabelText = styled.p`
  font-size: 1.6rem;
  line-height: 2.0;
`;

function SigninInput ({ info, refName }: SigninInputProps) {
  return (
    <label htmlFor={info}>
      <SytledLabelText>
        {info.toUpperCase()}
      </SytledLabelText>
      <StyledInput
        id={info}
        type={info}
        ref={refName}
        placeholder={`${info.toUpperCase()}를 입력해주세요`}
        autoFocus={info === 'email' ? true : false}
        required/>
    </label>
  );
};

SigninInput.defaultProps = {
  info: 'email',
}

export default SigninInput;
