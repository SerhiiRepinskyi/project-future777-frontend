import { useEffect, useState } from "react";
import { BoardItemIcon } from "./SidebarBoardItem-styled"
import sprite from '../../assets/images/sprite.svg';


export const SidebarBoardItemIcon = ({current, iconId}) => {

    const [startAnimation, setStartAnimation] = useState(true);

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * (15000 - 7000 + 1)) + 7000;
        const interval = setInterval(() => {
          setStartAnimation(true);
          setTimeout(() => {
            setStartAnimation(false);
          }, 1000);
        }, randomNumber);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

    return (
        <BoardItemIcon
        startAnimation={startAnimation}
        sx={{ opacity: current ? 1 : 0.5 }}
      >
        <use href={sprite + iconId}></use>
      </BoardItemIcon>
    )
}