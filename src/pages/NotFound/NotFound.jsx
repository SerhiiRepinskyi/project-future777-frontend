import { Link } from 'react-router-dom';
import { Title } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Title>
      Page is not found go to 
      <Link to="/home" style={{ marginLeft: '10px' }}>HomePage</Link>
    </Title>
  );
};
