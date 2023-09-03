import {
  CreateBoardWrap,
  HelpBox,
  HelpButton,
  HelpText,
  Image,
  Subtitle,
  TitleCreate,
  MembersButton,
} from './SidebarContent-styled';
import { Box } from '@mui/material';
import { useState } from 'react';

import styles from './SidebarCustomScroll.module.css';

import AloeVera from '../../assets/images/aloe-vera.png';

import { SidebarLogo } from 'components/Logo/Logo';
import { ButtonSidebar } from 'components/Buttons/Button';
import { SidebarBoardList } from './SidebarBoardList';

import LogoutBtn from 'components/logoutBtn/logoutBtn';
import ModalBoard from 'components/ModalBoard/ModalBoard';
import ModalHelp from 'components/ModalHelp/ModalHelp';

import ModalMembers from 'components/ModalMembers/ModalMembers';

import { SidebarHelpIcon } from './SidebarHelpIcon';


export const SidebarContent = ({ isSidebarShown }) => {
  const [isModalBoardOpen, setIsModalBoardOpen] = useState(false);
  const [isModalHelpOpen, setIsModalHelpOpen] = useState(false);

  const [startAnimation, setStartAnimation] = useState(true);
  const [isModalMembersOpen, setIsModalMembersOpen] = useState(false);

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



  const modalBoardStateChange = () => setIsModalBoardOpen(!isModalBoardOpen);
  const modalHelpStateChange = () => setIsModalHelpOpen(!isModalHelpOpen);
  const modalMembersStateChange = () => setIsModalMembersOpen(!isModalMembersOpen);

  return (
    <>
      <Box
        className={styles.container}
        sx={{
          pt: 3,
          pb: 3,
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Box sx={{ pl: { 0: 1.75, 768: 3 }, pr: { 0: 1.75, 768: 3 } }}>
          <MembersButton
              type="button"
              isSidebarShown={isSidebarShown}
              onClick={modalMembersStateChange}
            >
            <SidebarLogo sx={{ mb: 7.5 }} isSidebarShown={isSidebarShown} />
            </MembersButton>

            <Subtitle sx={{ mb: 1 }} isSidebarShown={isSidebarShown}>
              My boards
            </Subtitle>

            <CreateBoardWrap sx={{ mb: 5 }}>
              <TitleCreate isSidebarShown={isSidebarShown}>
                Create a <br /> new board
              </TitleCreate>
              <ButtonSidebar onClick={modalBoardStateChange} />
            </CreateBoardWrap>
          </Box>
          <SidebarBoardList />
        </Box>

        <Box sx={{ pl: { 0: 1.75, 768: 3 }, pr: { 0: 1.75, 768: 3 } }}>
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
            <HelpButton
              type="button"
              isSidebarShown={isSidebarShown}
              onClick={modalHelpStateChange}
            >
              <SidebarHelpIcon />
              Need help?
            </HelpButton>
          </HelpBox>
          <LogoutBtn />
        </Box>
      </Box>

      <ModalBoard
        boardTitle={'New board'}
        open={isModalBoardOpen}
        handleClose={modalBoardStateChange}
      />
      <ModalHelp open={isModalHelpOpen} handleClose={modalHelpStateChange} />

      <ModalMembers open={isModalMembersOpen} handleClose={modalMembersStateChange}/>
    </>
  );
};
