import {
  CreateBoardWrap,
  HelpBox,
  HelpButton,
  HelpText,
  Image,
  Subtitle,
  TitleCreate,
} from './SidebarContent-styled';

import styles from './SidebarCustomScroll.module.css';

import AloeVera from '../../assets/images/aloe-vera.png';
import sprite from '../../assets/images/sprite.svg';

import { useState } from 'react';
import { SidebarLogo } from 'components/Logo/Logo';
import LogoutBtn from 'components/logoutBtn/logoutBtn';
import { ButtonSidebar } from 'components/Buttons/Button';
import ModalBoard from 'components/ModalBoard/ModalBoard';
import { SidebarBoardList } from './SidebarBoardList';
import { Box } from '@mui/material';

export const SidebarContent = ({ isSidebarShown }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalStateChange = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Box className={styles.container} sx={{ overflowX: 'hidden' }}>
        <Box sx={{ pl: { 0: 1.75, 768: 3 }, pr: { 0: 1.75, 768: 3 } }}>
          <SidebarLogo
            style={{ marginBottom: '60px' }}
            isSidebarShown={isSidebarShown}
          />

          <Subtitle sx={{ mb: 1 }} isSidebarShown={isSidebarShown}>
            My boards
          </Subtitle>

          <CreateBoardWrap sx={{ mb: 5 }}>
            <TitleCreate isSidebarShown={isSidebarShown}>
              Create a <br /> new board
            </TitleCreate>
            <ButtonSidebar onClick={modalStateChange} />
          </CreateBoardWrap>
        </Box>

        <SidebarBoardList />

        <Box
          sx={{ mt: 'auto', pl: { 0: 1.75, 768: 3 }, pr: { 0: 1.75, 768: 3 } }}
        >
          <HelpBox sx={{ p: { 0: 1.75, 768: 2.5 }, mb: 3 }}>
            <Image
              src={AloeVera}
              alt={'aloe vera'}
              isSidebarShown={isSidebarShown}
            />
            <HelpText
              isSidebarShown={isSidebarShown}
              sx={{
                mb: 2.25,
                fontSize: { 0: '12px', 768: '14px' },
                lineHeight: { 0: '16px', 768: '20px' },
              }}
            >
              If you need help with <span>TaskPro</span>, check out our support
              resources or reach out to our customer support team.
            </HelpText>
            <HelpButton type="button" isSidebarShown={isSidebarShown}>
              <svg width="20" height="20" stroke="#ffffff">
                <use href={sprite + '#icon-help'}></use>
              </svg>
              Need help?
            </HelpButton>
          </HelpBox>

          <LogoutBtn />
        </Box>
      </Box>

      <ModalBoard open={isModalOpen} handleClose={modalStateChange} />
    </>
  );
};
