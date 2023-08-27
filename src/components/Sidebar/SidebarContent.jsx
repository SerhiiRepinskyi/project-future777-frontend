import { Box } from '@mui/material';
import {
  CreateBoardWrap,
  HelpBox,
  HelpButton,
  HelpText,
  Image,
  Subtitle,
  TitleCreate,
} from './SidebarContent-styled';

import AloeVera from '../../assets/images/aloe-vera.png';
import sprite from '../../assets/images/sprite.svg';

import { useState } from 'react';
import { SidebarLogo } from 'components/Logo/Logo';
import LogoutBtn from 'components/logoutBtn/logoutBtn';
import { ButtonSidebar } from 'components/Buttons/Button';
import ModalBoard from 'components/ModalBoard/ModalBoard';

export const SidebarContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalStateChange = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <SidebarLogo style={{ marginBottom: '60px' }} />

      <Subtitle sx={{ mb: 1 }}>My boards</Subtitle>

      <CreateBoardWrap sx={{ mb: 5 }}>
        <TitleCreate>
          Create a <br /> new board
        </TitleCreate>
        <ButtonSidebar onClick={modalStateChange} />
      </CreateBoardWrap>

      <Box sx={{ mt: 'auto' }}>
        <HelpBox sx={{ p: { 0: 1.75, 768: 2.5 }, mb: 3 }}>
          <Image src={AloeVera} alt={'aloe vera'} />
          <HelpText
            sx={{
              mb: 2.25,
              fontSize: { 0: '12px', 768: '14px' },
              lineHeight: { 0: '16px', 768: '20px' },
            }}
          >
            If you need help with <span>TaskPro</span>, check out our support
            resources or reach out to our customer support team.
          </HelpText>
          <HelpButton type="button">
            <svg width="20" height="20">
              <use href={sprite + '#icon-help'}></use>
            </svg>
            Need help?
          </HelpButton>
        </HelpBox>

        <LogoutBtn />
      </Box>

      <ModalBoard open={isModalOpen} handleClose={modalStateChange} />
    </>
  );
};
