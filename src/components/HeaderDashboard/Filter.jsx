import { Radio, Typography } from '@mui/material';
// import { LiStyled, UlBgStyled } from 'components/ModalLayout/Modal.styled';
import ModalLayout from 'components/ModalLayout/ModalLayout';
import { Form, Formik } from 'formik';
import { useState } from 'react';

import { arrBG } from '../ModalBoard/data';
import { Button, Div, Label, LabelGroup, RadioWrap } from './Filter.styled';
import {
  ImgStyled,
  LiStyled,
  UlBgStyled,
} from 'components/ModalBoard/ModalBoard.styled';

const titleStyle = {
  color: '#FFF',
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: -0.36,
  // marginBottom: 24 / 8,
};


export const Filter = ({ open, onClose }) => {
  // const [bgImgIndex, setBgImgIndex] = useState(null);
  const [backgroundURL, setBackgroundURL] = useState(arrBG[0]);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const [currentPrority, setCurrentPrority] = useState('');
  const [isShowAllActive, setIsShowAllActive] = useState(false);
  const initialValues = {
    currentBg: 0,
    currentPrority: '',
  };

  const controlProps = item => ({
    checked: currentPrority === item,
    onChange: handleChange,
    value: item,
  });
  const handleChange = event => {
    const filter = event.target.value;
    setCurrentPrority(filter);
    // dispatch(setFilterCards(filter));
    setIsShowAllActive(false);
  };

  const handleShowAll = () => {
    setCurrentPrority('');
    // dispatch(setFilterCards(''));
    setIsShowAllActive(true);
  };

  const handleRadioClick = () => {
    if (isShowAllActive) {
      setIsShowAllActive(false);
    }
  };
  console.log(currentPrority);
  console.log(backgroundIndex);
  console.log(backgroundURL);

  return (
    <ModalLayout title={'Filters'} open={open} handleClose={onClose}>
      <Formik initialValues={initialValues}>
        <Form onChange={handleChange}>
          <UlBgStyled>
            <LiStyled></LiStyled>
            {arrBG.map((bg, index) => {
              return (
                <LiStyled
                  key={bg}
                  onClick={() => {
                    setBackgroundURL(bg);
                    setBackgroundIndex(index);
                  }}
                >
                  <ImgStyled src={bg} alt="background picture" />
                </LiStyled>
              );
            })}
          </UlBgStyled>
          <LabelGroup role="group" aria-labelledby="my-radio-group">
            <Div>
              <Typography variant="h2" sx={titleStyle}>
                Label Color
              </Typography>
              <Button
                type="button"
                onClick={handleShowAll}
                disabled={isShowAllActive}
              >
                Show all
              </Button>
            </Div>
            <RadioWrap>
              <Label>
                <Radio
                  onClick={handleRadioClick}
                  checked={currentPrority === 'without'}
                  name="currentPrority"
                  {...controlProps('without')}
                  size="small"
                  sx={{ color: 'grey', '&.Mui-checked': { color: 'grey' } }}
                />
                Without priority
              </Label>
              <Label>
                <Radio
                  onClick={handleRadioClick}
                  checked={currentPrority === 'low'}
                  name="currentPrority"
                  {...controlProps('low')}
                  size="small"
                  sx={{
                    color: '#8FA1D0',
                    '&.Mui-checked': { color: '#8FA1D0' },
                  }}
                />
                Low
              </Label>
              <Label>
                <Radio
                  onClick={handleRadioClick}
                  checked={currentPrority === 'medium'}
                  name="currentPrority"
                  {...controlProps('medium')}
                  size="small"
                  sx={{
                    color: '#E09CB5',
                    '&.Mui-checked': { color: '#E09CB5' },
                  }}
                />
                Medium
              </Label>

              <Label>
                <Radio
                  onClick={handleRadioClick}
                  checked={currentPrority === 'high'}
                  name="currentPrority"
                  {...controlProps('high')}
                  size="small"
                  sx={{
                    color: '#BEDBB0',
                    '&.Mui-checked': { color: '#BEDBB0' },
                  }}
                />
                High
              </Label>
            </RadioWrap>
          </LabelGroup>
        </Form>
      </Formik>
    </ModalLayout>
  );
};
