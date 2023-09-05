import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { format, parseISO } from 'date-fns';
import * as Yup from 'yup';
import { API } from 'Services/API';
import formatISO from 'date-fns/formatISO';
import Notiflix from 'notiflix';

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
import { UTCDateMini, UTCDate } from '@date-fns/utc';

Notiflix.Notify.init({
  success: {
    background: 'var(--button-bg-color)',
  },
});

const AddCard = ({
  modalType,
  close,
  open,
  handleClose,
  columnId,
  cardId = '',
  titleValue = '',
  descrValue = '',
  priorityValue = '0',
  deadlineValue,
  onCardUpdate,
}) => {
  const [date, setDate] = useState(new UTCDate(new Date()));
  const [dateValue, setDateValue] = useState('');
  const [color, setColor] = useState(priorityValue.toString());
  const [anchorEl, setAnchorEl] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [addCards] = API.useAddCardMutation();
  const [updateCard] = API.useUpdateCardByIdMutation();

  const handleDateClick = e => {
    setAnchorEl(e.currentTarget);
    setIsPopupOpen(true);
  };

  const onDateChange = e => {
    const dateFns = format(e, 'LLLL d');
    setDateValue(dateFns);
    const utcDate = new UTCDate(e);
    setDate(utcDate);
    setIsPopupOpen(false);
    setAnchorEl(null);
  };

  const onColorChange = value => {
    setColor(value);
  };

  const handleSubmitForm = async (title, description) => {
    if (modalType === 'Add card') {
      if (!date) {
        Notiflix.Notify.failure('Please select the date');
      }
      const ISODate = formatISO(date, { representation: 'date' });

      const cardData = {
        title,
        description,
        priority: color,
        deadline: ISODate,
      };

      try {
        await addCards({ columnId, cardData });
      } catch (error) {
        console.log('error :>> ', error);
        if (error.status === 400) {
          return Notiflix.Notify.failure('All field must be filled in');
        } else {
          console.log('An error occurred:', error.data.message);
        }
      }
      Notiflix.Notify.success('Your card successfully added');
    } else {
      const ISODate = formatISO(date, { representation: 'date' });

      const cardData = {
        title,
        description,
        priority: color,
        deadline: ISODate,
      };

      try {
        await onCardUpdate({ cardId, cardData });
      } catch (error) {
        if (error.status === 400) {
          return Notiflix.Notify.failure('All field must be filled in');
        } else {
          console.log('An error occurred:', error.data.message);
        }
      }
      Notiflix.Notify.success('Your card successfully updated');
    }

    setDateValue('');
    setDate('');
    handleReset();
    close();
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .trim('The title cannot include leading and trailing spaces')
      .strict(true)
      .min(2, 'Must be more then 2 symbols')
      .required('Title is required'),
    description: Yup.string().min(5, 'Must be more then 2 symbols'),
    color: Yup.string(),
  });

  const cardInitialValues =
    modalType === 'Add card'
      ? { title: '', description: '' }
      : { title: titleValue, description: descrValue };

  const { values, handleBlur, handleChange, handleReset, handleSubmit } =
    useFormik({
      initialValues: cardInitialValues,
      onSubmit: ({ title, description }) =>
        handleSubmitForm(title, description),
      validationSchema,
    });

  useEffect(() => {
    if (modalType === 'Add card') {
      const currentDate = format(new Date(), "'Today,' LLLL d");
      setDateValue(currentDate);
    }
    if (modalType === 'Edit card') {
      const dateISO = parseISO(deadlineValue);
      setDate(dateISO);
      const localDate = new UTCDateMini(dateISO);
      const currentDate = format(localDate, 'LLLL d');
      setDateValue(currentDate);
    }
  }, [modalType, deadlineValue]);

  return (
    <ModalLayout title={modalType} open={open} handleClose={handleClose}>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          id="title"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.title}
        />

        <TextareaStyled
          id="description"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.description}
        />

        <SubWrapper>
          <SubTitle>Label color</SubTitle>
          <ColorRadioButtons value={color} onColorChange={onColorChange} />
        </SubWrapper>

        <SubWrapper>
          <SubTitle>Deadline</SubTitle>
          <DateWrapper>
            <DateText>{dateValue}</DateText>
            <DropDownIcon onClick={handleDateClick} />
          </DateWrapper>
        </SubWrapper>

        <ButtonWithIcon
          title={modalType === 'Add card' ? 'Add' : 'Edit'}
          type={'submit'}
          disabled={!values.title ? true : false}
        />
      </FormStyled>

      <Popup
        anchorEl={anchorEl}
        open={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      >
        <DatePickerCmponent onChange={onDateChange} />
      </Popup>
    </ModalLayout>
  );
};

export default AddCard;
