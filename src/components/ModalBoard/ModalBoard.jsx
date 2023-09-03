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

import Notiflix from 'notiflix';
import { Report } from 'notiflix';
import sprite from '../../assets/images/sprite.svg';
import * as Yup from 'yup';
import { ButtonWithIcon } from 'components/Buttons/Button';
import ModalLayout from 'components/ModalLayout/ModalLayout';
import { useState } from 'react';
import { arrIcons } from './data';
import { arrBG } from './data';
import { useDispatch } from 'react-redux';
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

  const [inputValue, setInputValue] = useState(board?.title || '');
  const [iconId, setIconId] = useState(board?.iconId || arrIcons[0]);
  const [backgroundURL, setBackgroundURL] = useState(
    board?.backgroundURL || 'default background'
  );

  const [addBoard] = API.useAddBoardsMutation();
  const [editBoard] = API.useUpdateBoardByIdMutation();

  const navigate = useNavigate();

  const handleSubmit = async title => {
    try {
      const FormData = {
        title,
        backgroundURL,
        iconId,
        icon: 0,
        background: 0,
      };

      if (boardTitle === 'New board') {
        const response = await addBoard(FormData);
        dispatch(setBoardResponse(response));
        const newBoardId = response.data._id;
        navigate(`/home/${newBoardId}`);
        setInputValue('');
        setIconId(arrIcons[0]);
        setBackgroundURL('default background');
           Report.success(
             'Board added successfully',
             'You can use your board and add columns to it',
             'Ok'
           );
      }
      if (boardTitle === 'Edit board') {
        const response = await editBoard({ boardId: board._id, FormData });
        dispatch(setBoardResponse(response));
          Report.success(
            'Board edited successfully',
            'All changes have been made',
            'Ok'
          );
      }
      handleClose();
    } catch (error) {
      console.log(error);
    }
    Report.success(
      'Board added successfully',
      'You can use your board and add columns to it',
      'Ok'
    );
    formik.handleReset();
  };

  const handleChange = e => {
    setInputValue(e.currentTarget.value);
    formik.setFieldValue('title', e.currentTarget.value);
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(2, 'Must be more than 2 symbols')
      .max(50, 'Must be less than 50 symbols')
      .required('Title is required')
      .test(
        'is-not-cyrillic',
        'Title must not contain Cyrillic characters',
        function (value) {
          if (/[а-яА-Я]/.test(value)) {
            Notiflix.Notify.warning(
              'Title field must not contain enemy characters!'
            );

            return false;
          }
          return true;
        }
      ),
    description: Yup.string(),
  });

  const formik = useFormik({
    initialValues: { title: '' },
    onSubmit: ({ title }) => handleSubmit(title),
    validationSchema,
  });

  const handleIconCurrent = icon => {
    setIconId(icon);
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
            {arrIcons.map(icon => {
              return (
                <LiIconsStyled
                  key={icon}
                  onClick={() => handleIconCurrent(icon)}
                  isSelected={iconId === icon}
                >
                  <TransparentSVG>
                    <use
                      href={sprite + icon}
                      style={{
                        stroke:
                          iconId === icon
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
            <LiStyled
              key={'default background'}
              onClick={() => {
                setBackgroundURL('default background');
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#1F1F1F',
                  borderRadius: '5px',
                  border: `2px solid ${
                    backgroundURL === 'default background'
                      ? 'white'
                      : 'transparent'
                  }`,
                  cursor: 'pointer',
                }}
              >
                <svg
                  style={{
                    width: '16px',
                    height: '16px',
                    stroke: 'rgba(255, 255, 255, 0.10)',
                  }}
                >
                  <use href={sprite + '#icon-default-background'}></use>
                </svg>
              </div>
            </LiStyled>
            {arrBG.map(bg => {
              return (
                <LiStyled
                  key={bg}
                  onClick={() => {
                    setBackgroundURL(bg);
                  }}
                >
                  <ImgStyled
                    src={bg}
                    alt="background picture"
                    style={{
                      border: `2px solid ${
                        backgroundURL === bg ? 'white' : 'transparent'
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
            onClick={() => {
             if (formik.values.title === '' && !inputValue) {
               Notiflix.Notify.warning('Title field must be filled in');
             }
            }}
          />
        </FormStyled>
      </ModalLayout>
    </>
  );
};

export default ModalBoard;
