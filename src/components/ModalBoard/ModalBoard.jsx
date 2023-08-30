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
import { arrBackgrounds } from './data';

import { useSelector } from 'react-redux';
import { useAddBoardsMutation } from 'redux/boards/boardSlice';

const titleStyle = {
  color: '#FFF',
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: -0.36,
};

const ModalBoard = ({ open, handleClose }) => {
  const [iconId, setIconId] = useState(arrIcons[0]);
  const [iconIndex, setIconIndex] = useState(0);

  const [backgroundURL, setBackgroundURl] = useState(arrBackgrounds[0]);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const [addBoards] = useAddBoardsMutation();

  const token = useSelector(state => state.auth.token);

  const data = {
    iconId,
    backgroundURL,
    icon: iconIndex,
    background: backgroundIndex,
  };



  const handleSubmit = async title => {
    try {
      console.log(data);
      await addBoards({
        boardsData: {
          title,
          iconId,
          backgroundURL,
          icon: iconIndex,
          background: backgroundIndex,
        },
        token,
      });
    } catch (error) {
      console.log(error);
    }

    formik.handleReset();
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

  return (
    <>
      <ModalLayout title={'New board'} open={open} handleClose={handleClose}>
        <FormStyled onSubmit={formik.handleSubmit}>
          <InputStyled
            id="title"
            name="title"
            placeholder="Title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          <Typography variant="h2" sx={titleStyle}>
            Icons
          </Typography>
          <UlStyled>
            {arrIcons.map((icon, index) => {
              return (
                <LiIconsStyled
                  key={icon}
                  onClick={() => {
                    setIconId(icon);
                    setIconIndex(index);
                  }}
                >
                  <TransparentSVG>
                    <use href={sprite + icon} />
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
            {arrBackgrounds.map((bgURL, index) => {
              return (
                <LiStyled
                  key={bgURL}
                  onClick={() => {
                    setBackgroundURl(bgURL);
                    setBackgroundIndex(index);
                  }}
                >
                  <ImgStyled src={bgURL} alt="background picture" />
                </LiStyled>
              );
            })}
          </UlBgStyled>

          <ButtonWithIcon
            title={'Create'}
            type={'submit'}
            // onClick={handleClose}
          />
        </FormStyled>
      </ModalLayout>
    </>
  );
};

export default ModalBoard;
