import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import WelcomePageImage from 'components/WelcomePageImage/WelcomePageImage';

export const Container = styled.div`
  background: linear-gradient(
    rgba(196, 196, 196, 0) 25%,
    rgba(190, 219, 176, 1) 100%
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;

  @media screen and (min-width: 768px) {
    padding: 0px 148px;
  }
`;

export const WelcomeImage = styled(WelcomePageImage)`
  width: 124px;
  height: 124px;
  background-color: black;

  @media screen and (min-width: 768px) {
    width: 162px;
    height: 162px;
  }
`;

export const WelcomeTitle = styled.p`
  color: #161616;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 48px;
  max-width: 335px;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    max-width: 473px;
  }
`;

const Link = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: center;
  border-radius: 8px;

  padding: 14px 0;
  text-decoration: none;
  max-width: 335px;
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 344px;
  }
`;

export const RegistrationLink = styled(Link)`
  color: #ffffff;
  background: #161616;
`;

export const Loginlink = styled(Link)`
  color: #161616;
`;
