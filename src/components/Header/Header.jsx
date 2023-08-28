import { useEffect, useState } from 'react';
import { HeaderContainer, ThemeButton, ThemeContainer, ThemeUL, ThemeWrap } from './Header.styled';
import sprite from '../../assets/images/sprite.svg';
import { NavBtn } from './NavBtn/NavBtn';
import { UserInfo } from './UserInfo/UserInfo';

export const Header = ({handleSidebarToggle}) => {
  const user = {
    theme: 'dark',
    name: 'Ivetta',
    avatarURL: '',
  };
  
  const [themeListVisible, setThemeListVisible] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(user.theme);

  const themeList = [ 'light', 'dark', 'violet' ];
 
  useEffect(() => {
    document.body.classList.add(selectedTheme);
    return () => {
      document.body.classList.remove(selectedTheme);
    };
  }, [selectedTheme]);

  const handleThemeList = () => {
    setThemeListVisible(!themeListVisible);
  };

  const handleThemeChange = e => {
    setSelectedTheme(e.target.value);
    setThemeListVisible(!themeListVisible);
  };

  return (
    <HeaderContainer>
      <NavBtn handleSidebarToggle={handleSidebarToggle} />
      <ThemeContainer>
        <ThemeWrap onClick={handleThemeList}>
          <p>Theme</p>
          <svg width="16px" height="16px">
            <use href={sprite + '#icon-drop-down'}></use>
          </svg>
        </ThemeWrap>
        <ThemeUL className={themeListVisible ? 'visible' : ''}>
          {themeList.map(theme => (
            <li key={theme}>
              <ThemeButton
                selected={selectedTheme === theme}
                disabled={selectedTheme === theme}
                value={theme}
                onClick={handleThemeChange}
              >
                {theme}
              </ThemeButton>
            </li>
          ))}
        </ThemeUL>
      </ThemeContainer>
      <UserInfo name={user.name} avatarURL={user.avatarURL}/>
    </HeaderContainer>
  );
};
