import { useEffect, useState } from 'react';
import sprite from '../../assets/images/sprite.svg';
import { HelpIcon } from './SidebarContent-styled';



export const SidebarHelpIcon = () => {
  const [startAnimation, setStartAnimation] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartAnimation(true);
      setTimeout(() => {
        setStartAnimation(false);
      }, 1000);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HelpIcon startAnimation={startAnimation}>
      <use href={sprite + '#icon-help'}></use>
    </HelpIcon>
  );
};
