import { Radio, Typography } from '@mui/material';
// import { LiStyled, UlBgStyled } from 'components/ModalLayout/Modal.styled';
import ModalLayout from 'components/ModalLayout/ModalLayout';
import { Form, Formik } from 'formik';
import { useState } from 'react';

// import { arrBG } from '../ModalBoard/data';
import { Button, Div, Label, LabelGroup, RadioWrap } from './Filter.styled';
// import {
//   ImgStyled,
//   LiStyled,
//   UlBgStyled,
// } from 'components/ModalBoard/ModalBoard.styled';

const labelStyle = {
  color: 'var(--primary-text-color)',
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: -0.36,
  // marginBottom: 24 / 8,
};

const titleStyle = {
  color: 'var(--primary-text-color)',
  fontSize: 18,
  fontFamily: 'Poppins',
  fontWeight: '500',
  wordWrap: 'break-word',
  marginBottom: '14px',
  paddingBottom: '14px',
  borderBottom: '0.50px rgba(255, 255, 255, 0.10) solid',
};

export const Filter = ({ open, onClose }) => {
  // const [bgImgIndex, setBgImgIndex] = useState(null);
  // const [backgroundURL, setBackgroundURL] = useState(arrBG[0]);
  // const [backgroundIndex, setBackgroundIndex] = useState(0);

  const [currentPrority, setCurrentPrority] = useState('');
  const [isShowAllActive, setIsShowAllActive] = useState(false);
  const initialValues = {
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

  return (
    <ModalLayout open={open} handleClose={onClose}>
      <Typography variant="h2" sx={titleStyle}>
        Filters
      </Typography>
      <Formik initialValues={initialValues}>
        <Form onChange={handleChange}>
          <LabelGroup role="group" aria-labelledby="my-radio-group">
            <Div>
              <Typography variant="h2" sx={labelStyle}>
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
                  checked={currentPrority === '0'}
                  name="currentPrority"
                  {...controlProps('0')}
                  size="small"
                  sx={{ color: 'grey', '&.Mui-checked': { color: 'grey' } }}
                />
                Without priority
              </Label>
              <Label>
                <Radio
                  onClick={handleRadioClick}
                  checked={currentPrority === '1'}
                  name="currentPrority"
                  {...controlProps('1')}
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
                  checked={currentPrority === '2'}
                  name="currentPrority"
                  {...controlProps('2')}
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
                  checked={currentPrority === '3'}
                  name="currentPrority"
                  {...controlProps('3')}
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
