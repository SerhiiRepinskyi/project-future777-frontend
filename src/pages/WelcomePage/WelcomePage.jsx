import Logo from './Logo';
import {
  Container,
  Loginlink,
  RegistrationLink,
  WelcomeImage,
  WelcomeLogo,
  WelcomeTitle,
} from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <Container>
      <WelcomeImage />
      <WelcomeLogo>
        <Logo />
        Task Pro
      </WelcomeLogo>
      <WelcomeTitle>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </WelcomeTitle>
      <RegistrationLink to="/auth/register">Registration</RegistrationLink>
      <Loginlink to="/auth/login">Log In</Loginlink>
    </Container>
  );
};

export default WelcomePage;
