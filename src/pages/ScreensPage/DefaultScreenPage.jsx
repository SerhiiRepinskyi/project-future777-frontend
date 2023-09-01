import { Box, Button, Typography } from '@mui/material';
import ModalBoard from 'components/ModalBoard/ModalBoard';
import { SIDEBARWIDTH } from 'components/Sidebar/SidebarCONSTANTS';
import { useState } from 'react';

export const DefaultScreenPage = () => {
  const [isModalBoardOpen, setIsModalBoardOpen] = useState(false);
  const modalBoardStateChange = () => setIsModalBoardOpen(!isModalBoardOpen);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pt: { 0: 9.25, 768: 11, 1440: 9.75 },
          pb: { 0: 3, 768: 4, 1440: 1 },
          pl: { 0: 2.5, 768: 4, 1440: 3 },
          pr: { 0: 2.5, 768: 4, 1440: 3 },
          height: '100vh',
          width: { 0: '100vw', 1440: `calc(100vw - ${SIDEBARWIDTH}px)` },
          flexGrow: 1,
          backgroundColor: 'var(--primary-bg-color)',
        }}
      >
        <Box sx={{ width: '486px' }}>
          <Typography
            sx={{
              padding: 0,
              margin: 0,
              color: 'var(--secondary-text-color)',
              textAlign: 'center',
              fontFamily: 'Poppins',
              fontSize: { 0: '12px', 768: '14px' },
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: { 0: '16px', 768: '18px' },
              letterSpacing: { 0: '-0.24px', 768: '-0.28px' },
            }}
          >
            Before starting your project, it is essential{' '}
            <Button
              onClick={modalBoardStateChange}
              type="button"
              sx={{
                verticalAlign: 'baseline',
                padding: 0,
                margin: 0,
                color: 'var(--default-screen-page-link-color)',
                backgroundColor: 'transparent',
                fontFamily: 'Poppins',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'none',
                outline: 'none',
                textTransform: 'lowercase',
                fontSize: { 0: '12px', 768: '14px' },

                '&:hover, &:focus': {
                  textDecoration: 'underline',
                  backgroundColor: 'transparent',
                },
              }}
            >
              to create a board
            </Button>{' '}
            to visualize and track all the necessary tasks and milestones. This
            board serves as a powerful tool to organize the workflow and ensure
            effective collaboration among team members.
          </Typography>
        </Box>
      </Box>

      <ModalBoard
        boardTitle={'New board'}
        open={isModalBoardOpen}
        handleClose={modalBoardStateChange}
      />
    </>
  );
};
