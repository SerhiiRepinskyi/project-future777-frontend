import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { format } from 'date-fns';
import * as Yup from 'yup';

import {
  FormStyled,
  TextareaStyled,
  SubWrapper,
  DateText,
  DateWrapper,
  SubTitle,
  InputStyled,
} from './AddCard.styled';
import ColorRadioButtons from 'components/ColorRadioButtons/ColorRadioButtons';
import { ButtonWithIcon } from 'components/Buttons/Button';
import DropDownIcon from 'components/Icons/DropDownIcon/DropDownIcon';
import Popup from 'components/Popup/Popup';
import DatePickerCmponent from 'components/DatePicker/DatePicker';
import ModalLayout from '../ModalLayout/ModalLayout';

// import { useAddCardToColumnMutation } from 'redux/tasks/cardSlice';
// import { useSelector } from 'react-redux';

const AddCard = ({ modalType, close, open, handleClose, cardId = '' }) => {
  // const token = useSelector(state => state.auth.token);
  const [date, setDate] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [color, setColor] = useState('0');
  const [anchorEl, setAnchorEl] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [addCards] = useAddCardToColumnMutation();

  const handleDateClick = e => {
    setAnchorEl(e.currentTarget);
    setIsPopupOpen(!isPopupOpen);
  };

  const onDateChange = e => {
    const dateFns = format(e, 'LLLL d');
    console.log('dateFns :>> ', date);
    setDateValue(dateFns);
    setDate(e);
    setIsPopupOpen(false);
  };

  const onColorChange = value => {
    console.log('value :>> ', value);
    setColor(value);
  };

  const handleSubmit = async (title, description, color) => {
    // const dateFns = format(date, 'yyyy-MM-dd');
    // try {
    //   await addCards({
    //     cardsData: {
    //       title,
    //       description,
    //       priority: color,
    //       deadline: dateFns,
    //     },
    //     token,
    //     columnId: '64eacc9f4040dd4d17e3e96f',
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
    formik.handleReset();
    close();
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
    const currentDate = format(new Date(), "'Today,' LLLL d");
    setDateValue(currentDate);

    console.log('dateFns :>> ', currentDate);
  }, []);

  return (
    <ModalLayout title={modalType} open={open} handleClose={handleClose}>
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
            <DateText>{dateValue}</DateText>
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

        <ButtonWithIcon
          title={modalType === 'Add card' ? 'Add' : 'Edit'}
          type={'submit'}
        />
      </FormStyled>
    </ModalLayout>
  );
};

export default AddCard;
