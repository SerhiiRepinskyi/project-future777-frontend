import { useFormik } from 'formik';
import { Typography } from '@mui/material';
import {
  FormStyled,
  InputStyled,
  TransparentSVG,
  UlStyled,
  LiStyled,
  UlBgStyled,
  ImgStyled,
  LiIconsStyled,
} from './ModalBoard.styled';

import sprite from '../../assets/images/sprite.svg';
import * as Yup from 'yup';
import { ButtonWithIcon } from 'components/Buttons/Button';
import ModalLayout from 'components/ModalLayout/ModalLayout';
import { useState } from 'react';
import { arrIcons } from './data';
import { arrBG } from './data';
import { useDispatch } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { API } from 'Services/API';
import { setBoardResponse } from 'redux/boards/boardsAPISlice';
import { useNavigate } from 'react-router-dom';

const titleStyle = {
  color: '#FFF',
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: -0.36,
};

const ModalBoard = ({ board = {}, boardTitle, open, handleClose }) => {
  const dispatch = useDispatch();
  const [iconId, setIconId] = useState(arrIcons[0]);
  const [iconIndex, setIconIndex] = useState(board.icon);
  const [selectedBG, setSelectedBG] = useState(board.background);
  const [selectedIconIndex, setSelectedIconIndex] = useState(board.icon);
  const [inputValue, setInputValue] = useState(board?.title || '');

  const [backgroundURL, setBackgroundURL] = useState(arrBG[0]);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const [addBoard] = API.useAddBoardsMutation();
  const [editBoard] = API.useUpdateBoardByIdMutation();

  const navigate = useNavigate();

  const handleSubmit = async title => {
    try {
      const FormData = {
        title,
        icon: iconIndex,
        iconId,
        background: backgroundIndex,
        backgroundURL,
      };

      if (boardTitle === 'New board') {
        const response = await addBoard(FormData);
        dispatch(setBoardResponse(response));
        const newBoardId = response.data._id;
        navigate(`/home/${newBoardId}`);
      }
      if (boardTitle === 'Edit board') {
        const response = await editBoard({ boardId: board._id, FormData });
        dispatch(setBoardResponse(response));
      }
      handleClose();
    } catch (error) {
      console.log(error);
    }
    formik.handleReset();
  };

  const handleChange = e => {
    setInputValue(e.currentTarget.value);
    formik.setFieldValue('title', e.currentTarget.value);
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(2, 'Must be more then 2 symbols')
      .required('Title is required')
      .matches(
        /^(\w*)$/,
        'Title may contain only letters, apostrophe, dash and spaces.'
      ),
    description: Yup.string(),
  });

  const formik = useFormik({
    initialValues: { title: '' },
    onSubmit: ({ title }) => handleSubmit(title),
    validationSchema,
  });

  const handleIconCurrent = (icon, index) => {
    setIconId(icon);
    setIconIndex(index);
    setSelectedIconIndex(index);
  };

  return (
    <>
      <ModalLayout title={boardTitle} open={open} handleClose={handleClose}>
        <FormStyled onSubmit={formik.handleSubmit}>
          <InputStyled
            id="title"
            name="title"
            placeholder={'Title'}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={inputValue}
          />
          <Typography variant="h2" sx={titleStyle}>
            Icons
          </Typography>
          <UlStyled>
            {arrIcons.map((icon, index) => {
              return (
                <LiIconsStyled
                  key={icon}
                  onClick={() => handleIconCurrent(icon, index)}
                  isSelected={selectedIconIndex === index}
                >
                  <TransparentSVG>
                    <use
                      href={sprite + icon}
                      style={{
                        stroke:
                          selectedIconIndex === index
                            ? '#FFFFFF'
                            : 'rgba(255, 255, 255, 0.5)',
                        transition: 'stroke 0.2s ease',
                      }}
                    />
                  </TransparentSVG>
                </LiIconsStyled>
              );
            })}
          </UlStyled>

          <Typography variant="h2" sx={titleStyle}>
            Background
          </Typography>
          <UlBgStyled>
            <LiStyled></LiStyled>
            {arrBG.map((bg, index) => {
              return (
                <LiStyled
                  key={bg}
                  onClick={() => {
                    setBackgroundURL(bg);
                    setBackgroundIndex(index);
                    setSelectedBG(index);
                  }}
                >
                  <ImgStyled
                    src={bg}
                    alt="background picture"
                    style={{
                      border: `2px solid ${
                        selectedBG === index ? 'white' : 'transparent'
                      }`,
                    }}
                  />
                </LiStyled>
              );
            })}
          </UlBgStyled>

          <ButtonWithIcon
            title={boardTitle === 'New board' ? 'Create' : 'Edit'}
            type={'submit'}
            // onClick={handleClose}
          />
        </FormStyled>
      </ModalLayout>
    </>
  );
};

export default ModalBoard;
