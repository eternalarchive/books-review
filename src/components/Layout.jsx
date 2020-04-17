import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 20px 80px 0 80px;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default Layout;
