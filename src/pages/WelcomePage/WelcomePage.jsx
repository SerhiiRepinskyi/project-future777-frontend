import { StartPageLogo } from 'components/Logo/Logo';
import {
  Container,
  Loginlink,
  RegistrationLink,
  WelcomeImage,
  WelcomeTitle,
} from './WelcomePage.styled';
import GoogleAuth from 'components/GoogleAuth/GoogleAuth';

const WelcomePage = () => {
  return (
    <Container>
      <WelcomeImage />
      <StartPageLogo style={{ margin: '24px 0 0 0' }} />
      <WelcomeTitle>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </WelcomeTitle>
      <RegistrationLink to="/auth/register">Registration</RegistrationLink>
      <Loginlink to="/auth/login">Log In</Loginlink>
      <GoogleAuth/>
    </Container>
  );
};

export default WelcomePage;
