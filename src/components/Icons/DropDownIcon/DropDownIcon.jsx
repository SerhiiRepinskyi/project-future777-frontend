import React from 'react'
import sprite from '../../../assets/images/sprite.svg';
import { DropDawnBtn, DropDownSVG } from './DropDownIcon.styled';

const DropDownIcon = ({onClick}) => {
  return (
    <div>
      <DropDawnBtn id={'date-picker'} onClick={onClick}>
        <DropDownSVG width="18" height="18">
          <use href={sprite + '#icon-drop-down'} />
        </DropDownSVG>
      </DropDawnBtn>
    </div>
  );
}

export default DropDownIcon
