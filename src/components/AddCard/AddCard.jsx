import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { format } from 'date-fns';
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
}) => {
  const [date, setDate] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [color, setColor] = useState('0');
  const [anchorEl, setAnchorEl] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [addCards] = API.useAddCardMutation();

  const handleDateClick = e => {
    setAnchorEl(e.currentTarget);
    setIsPopupOpen(true);
  };

  const onDateChange = e => {
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

  const handleSubmit = async (title, description) => {
    const ISODate = formatISO(date, { representation: 'date' });

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
        Notiflix.Notify.failure('All field must be filled in');
      } else {
        console.log('An error occurred:', error.data.message);
      }
    }
    setDateValue('');
    setDate('');
    formik.handleReset();
    close();
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .trim('The title cannot include leading and trailing spaces')
      .strict(true)
      .min(2, 'Must be more then 2 symbols')
      .required('Title is required'),
    description: Yup.string().required,
    color: Yup.string(),
  });

  const formik = useFormik({
    initialValues: { title: '', description: '' },
    onSubmit: ({ title, description }) => handleSubmit(title, description),
    validationSchema,
  });

  useEffect(() => {
    const currentDate = format(new Date(), "'Today,' LLLL d");
    setDateValue(currentDate);
  }, [open]);

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
          </DateWrapper>
        </SubWrapper>

        <ButtonWithIcon
          title={modalType === 'Add card' ? 'Add' : 'Edit'}
          type={'submit'}
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
