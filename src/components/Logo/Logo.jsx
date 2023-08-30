import {
  SidebarLogoIconWrap,
  SidebarLogoIcon,
  SidebarLogoText,
  StartPageLogoWrap,
  StartPageLogoIconWrap,
  StartPageLogoIcon,
  StartPageLogoText,
  SidebarLogoWrap,
} from './Logo-styled';
import sprite from '../../assets/images/sprite.svg';

export const SidebarLogo = ({ sx, isSidebarShown }) => {
  return (
    <>
      <SidebarLogoWrap sx={sx} isSidebarShown={isSidebarShown}>
        <SidebarLogoIconWrap>
          <SidebarLogoIcon>
            <use href={sprite + '#icon-logo-lightning'}></use>
          </SidebarLogoIcon>
        </SidebarLogoIconWrap>

        <SidebarLogoText>Task Pro</SidebarLogoText>
      </SidebarLogoWrap>
    </>
  );
};

export const StartPageLogo = ({ style }) => {
  return (
    <>
      <StartPageLogoWrap style={style} sx={{ width: { 0: 166, 768: 222 } }}>
        <StartPageLogoIconWrap
          sx={{ width: { 0: 40, 768: 48 }, height: { 0: 40, 768: 48 } }}
        >
          <StartPageLogoIcon
            sx={{ width: { 0: 15, 768: 18 }, height: { 0: 20, 768: 24 } }}
          >
            <use href={sprite + '#icon-logo-lightning'}></use>
          </StartPageLogoIcon>
        </StartPageLogoIconWrap>

        <StartPageLogoText
          sx={{
            fontSize: { 0: 28, 768: 40 },
            letterSpacing: { 0: -1.12, 768: -1.6 },
          }}
        >
          Task Pro
        </StartPageLogoText>
      </StartPageLogoWrap>
    </>
  );
};
