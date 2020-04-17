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

export const SubText = styled.p`
  color: #555;
  font-weight: 400;
  font-size: 2.0rem;
  line-height: 1.5;
`;

export const SignInArea = styled.div`
  display: flex;
  padding: 80px 0;
`;

export const MainImg = styled.img`
  width: 24rem;
  position: absolute;
  right: 0;
  top: 32px;
`;

export const NotiText = styled.h2`
  flex-basis: 50%;
  font-size: 2.4rem;
  line-height: 1.5;
`;

export const SiginInForm = styled.section`
  flex-basis: 50%;
  padding: 0 10px;
`;

export const InputBox = styled.div`
  height: 24rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonBox = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
`;