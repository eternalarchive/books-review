import React from 'react';
import styled from 'styled-components';

type LayoutProps = {
  children?: React.ReactNode;
};

const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 20px 80px 0 80px;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default Layout;
