import { Container, Image, Title } from './NotFound.styled';
import img from '../../assets/images/404.jpg';

export const NotFound = () => {

  return (
    <Container>
      <Image src={img} alt="404 page" />
      <Title>Page is not found</Title>
    </Container>
  );
};

export default NotFound;
