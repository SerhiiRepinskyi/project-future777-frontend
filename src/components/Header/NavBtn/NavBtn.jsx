import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const NavBtn = ({ handleSidebarToggle }) => {
  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open sidebar options"
        edge="start"
        onClick={handleSidebarToggle}
        sx={{ width: 32, height: 32, display: { 1440: 'none' } ,
        transition: "color 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        '&:hover': {
          color: 'var(--header-theme-color)',
          background: "inherit",
        },}}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};
