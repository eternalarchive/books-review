import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 80px;
  background-color: red;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default Layout;
