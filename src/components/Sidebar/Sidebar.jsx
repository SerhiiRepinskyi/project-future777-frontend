import { Box, Drawer } from '@mui/material';

import { SidebarContent } from './SidebarContent';
import { SIDEBARMOBILEWIDTH, SIDEBARWIDTH } from './SidebarCONSTANTS';

export const Sidebar = ({ ...props }) => {
  const { window, isMobileSidebar, handleSidebarToggle } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { 1440: SIDEBARWIDTH }, flexShrink: { 1440: 0 } }}
      aria-label="sidebar options"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={isMobileSidebar}
        onClose={handleSidebarToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { 0: 'block', 1440: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            boxShadow: 'none',
            overflowX: 'hidden',
            width: {
              0: 192,
              320: '60vw',
              375: SIDEBARMOBILEWIDTH,
              768: SIDEBARWIDTH,
            },
            backgroundColor: '#121212',
          },
        }}
      >
        <SidebarContent isSidebarShown={isMobileSidebar} />
      </Drawer>

      <Drawer
        variant="permanent"
        open
        sx={{
          display: { 0: 'none', 1440: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            boxShadow: 'none',
            overflowX: 'hidden',
            width: SIDEBARWIDTH,
            backgroundColor: '#121212',
          },
        }}
      >
        <SidebarContent isSidebarShown={true} />
      </Drawer>
    </Box>
  );
};
