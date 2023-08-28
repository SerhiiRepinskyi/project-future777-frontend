import { Link } from 'react-router-dom';
import { Container, Image, Text, Title } from './NotFound.styled';
import img from '../../assets/images/404.jpg';

export const NotFound = () => {
  return (
    <Container>
      <Image src={img} alt="404 page" />
      <Title>Page is not found</Title>
      <Text>
        go to{' '}
        <Link to="/welcome" style={{ marginLeft: '4px' }}>
        Exit
        </Link>
      </Text>
    </Container>
  );
};

export default NotFound;
