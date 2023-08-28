import React, { useEffect, useState } from 'react';
import {
  ComponentWrapper,
  FormStyled,
  TextareaStyled,
  SubWrapper,
  DateText,
  DateWrapper,
  SubTitle,
  InputStyled,
} from './AddCard.styled';
import { useFormik } from 'formik';
import ColorRadioButtons from 'components/ColorRadioButtons/ColorRadioButtons';
import { format } from 'date-fns';

import { ButtonWithIcon } from 'components/Buttons/Button';
import * as Yup from 'yup';
import DropDownIcon from 'components/Icons/DropDownIcon/DropDownIcon';
import Popup from 'components/Popup/Popup';
import DatePickerCmponent from 'components/DatePicker/DatePicker';

const AddCard = () => {
  const [date, setDate] = useState('');
  const [color, setColor] = useState('grey');
  const [anchorEl, setAnchorEl] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleDateClick = e => {
    const DatePicked = e.currentTarget;
    setAnchorEl(e.currentTarget);
    setIsPopupOpen(true);
  };
  const onDateChange = e => {
    console.log('e :>> ', e);
    const dateFns = format(e, 'LLLL d');
    setDate(dateFns);
    setIsPopupOpen(false);
  };

  const onColorChange = value => {
    console.log('value :>> ', value);
    setColor(value);
  };

  const handleSubmit = (title, description, color) => {
    console.log('Title => ', title);
    console.log('Description => ', description);
    console.log('Color :>> ', color);
    console.log('Date :>> ', date);
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
    color: Yup.string(),
  });

  const formik = useFormik({
    initialValues: { title: '', description: '' },
    onSubmit: ({ title, description }) =>
      handleSubmit(title, description, color, date),
    validationSchema,
  });

  useEffect(() => {
    const dateFns = format(new Date(), "'Today,' LLLL d");
    setDate(dateFns);
  }, []);

  return (
    <ComponentWrapper>
      <FormStyled onSubmit={formik.handleSubmit}>
        <InputStyled
          id="title"
          name="title"
          placeholder="Title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />

        <TextareaStyled
          id="description"
          name="description"
          placeholder="Description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />

        <SubWrapper>
          <SubTitle>Label color</SubTitle>
          <ColorRadioButtons onColorChange={onColorChange} />
        </SubWrapper>

        <SubWrapper>
          <SubTitle>Deadline</SubTitle>
          <DateWrapper>
            <DateText>{date}</DateText>
            <DropDownIcon onClick={handleDateClick} />
            <Popup
              anchorEl={anchorEl}
              open={isPopupOpen}
              onClose={handleDateClick}
            >
              <DatePickerCmponent onChange={onDateChange} />
            </Popup>
          </DateWrapper>
        </SubWrapper>

        <ButtonWithIcon title={'Add'} type={'submit'} />
      </FormStyled>
    </ComponentWrapper>
  );
};

export default AddCard;
