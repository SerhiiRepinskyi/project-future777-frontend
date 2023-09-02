import { useEffect, useState } from 'react';
import {
  HeaderContainer,
  ThemeButton,
  ThemeContainer,
  ThemeUL,
  ThemeWrap,
} from './Header.styled';
import sprite from '../../assets/images/sprite.svg';
import { NavBtn } from './NavBtn/NavBtn';
import { UserInfo } from './UserInfo/UserInfo';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { API } from 'Services/API';

export const Header = ({ handleSidebarToggle }) => {
  const { avatarURL, name, theme } = useSelector(selectUser);
  const [themeListVisible, setThemeListVisible] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [themeUser] = API.useThemeUserMutation();
  const themeList = ['light', 'dark', 'violet'];

  const handleThemeList = () => {
    setThemeListVisible(!themeListVisible);
  };

  const closeThemeList = () => {
    setThemeListVisible(false);
  };

  const handleThemeChange = async (e) => {
    setSelectedTheme(e.target.value);
    try {
      await themeUser({theme: e.target.value});
      closeThemeList();
    } catch (error) {
      console.error('Error updating theme:', error);
    };
  };
  

  useEffect(() => {
    document.body.classList.add(selectedTheme);
    return () => {
      document.body.classList.remove(selectedTheme);
    };
  }, [selectedTheme]);

  useEffect(() => {
    const handleWindowClick = event => {
      if (event.target.nodeName !== 'BUTTON') {
        closeThemeList();
      }
    };

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeThemeList();
      }
    };

    window.addEventListener('mousedown', handleWindowClick);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('mousedown', handleWindowClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [themeListVisible]);

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
      <UserInfo name={name} avatarURL={avatarURL} />
    </HeaderContainer>
  );
};
