import React from 'react';
import sprite from '../../assets/images/sprite.svg';

const Logo = () => {
  return (
    <svg height="100%" viewBox="0 0 10 10">
      <use href={sprite + '#icon-logo'}></use>
    </svg>
  );
};

export default Logo;
