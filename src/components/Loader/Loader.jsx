import { RotatingLines } from 'react-loader-spinner';
import { Wrap } from './Loader.styled';

const Loader = () => {
  return (
    <Wrap>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.80"
        width="80"
        visible={true}
      />
    </Wrap>
  );
};

export default Loader;
