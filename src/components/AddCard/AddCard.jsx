import React, { useEffect, useState } from 'react';
import { ErrorMessage, useFormik } from 'formik';
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
}) => {
  const [date, setDate] = useState('');
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
    console.log('Data :>> ', e);
    const dateFns = format(e, 'LLLL d');
    setDateValue(dateFns);
    setDate(e);
    setAnchorEl(null);
    setIsPopupOpen(false);
  };

  const onColorChange = value => {
    console.log('value :>> ', value);
    setColor(value);
  };

  const handleSubmitForm = async (title, description) => {
    if (modalType === 'Add card') {
      if (!date) {
        Notiflix.Notify.failure('Please select the date');
      }

      const ISODate = formatISO(date, { representation: 'date' });
      console.log('ISODate :>> ', ISODate);

      const cardData = {
        title,
        description,
        priority: color,
        deadline: ISODate,
      };

      try {
        await addCards({ columnId, cardData });
        Notiflix.Notify.success('Your card successfully added');
      } catch (error) {
        if (error.status === 400) {
          return Notiflix.Notify.failure('All field must be filled in');
        } else {
          console.log('An error occurred:', error.data.message);
        }
      }
    } else {
      const ISODate = formatISO(date, { representation: 'date' });
      const cardData = {
        title,
        description,
        priority: color,
        deadline: ISODate,
      };

      try {
        await updateCard({ cardId, cardData });
        Notiflix.Notify.success('Your card successfully updated');
      } catch (error) {
        if (error.status === 400) {
          return Notiflix.Notify.failure('All field must be filled in');
        } else {
          console.log('An error occurred:', error.message);
        }
      }
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
    description: Yup.string()
      .min(5, 'Must be more then 5 symbols')
      .required('Description is required'),
  });

  const cardInitialValues =
    modalType === 'Add card'
      ? { title: '', description: '' }
      : { title: titleValue, description: descrValue };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    isValid,
    dirty,
  } = useFormik({
    initialValues: cardInitialValues,
    onSubmit: ({ title, description }) => handleSubmitForm(title, description),
    validationSchema,
  });

  useEffect(() => {
    if (modalType === 'Add card') {
      const currentDate = format(new Date(), "'Today,' LLLL d");
      setDateValue(currentDate);
    }
    if (modalType === 'Edit card') {
      console.log('deadlineValue :>> ', deadlineValue);
      const dateISO = parseISO(deadlineValue, "'Today,' LLLL d");
      setDate(dateISO);
      const currentDate = format(dateISO, "'Today,' LLLL d");
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
        {touched.title && errors.title && dirty && (
          <ErrorMessage
            name="title"
            render={msg => {
              Notiflix.Notify.warning(` ${msg}`);
            }}
          />
        )}
        <TextareaStyled
          id="description"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.description}
        />
        {touched.description && errors.description && dirty && (
          <ErrorMessage
            name="description"
            render={msg => {
              Notiflix.Notify.warning(`${msg}`);
            }}
          />
        )}
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
          disabled={!dirty || !isValid}
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
