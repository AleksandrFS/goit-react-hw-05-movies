import { BallTriangle } from 'react-loader-spinner';
import { Loader } from './loader.styled';

export const Spinner = () => {
  return (
    <Loader>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#ec0867"
        ariaLabel="ball-triangle-loading"
        wrapperStyle=""
        visible={true}
      />
    </Loader>
  );
};
