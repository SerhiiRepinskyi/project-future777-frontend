import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { format, parseISO } from 'date-fns';
import formatISO from 'date-fns/formatISO';
import * as Yup from 'yup';
import { API } from 'Services/API';

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

// function getEndOfToday() {
//   const ddline = new Date();
//   ddline.setHours(23, 59, 59);
//   ddline.toISOString();
//   return ddline;
// }

function getEndOfDate(date) {
  const val = date ?? new Date();
  val.setHours(23, 59, 59);
  val.toISOString();
  console.log('val :>> ', val);
  return val;
}

function getDeadline(isostr) {
  const d = !!isostr ? parseISO(isostr) : Date.now();
  console.log('getDeadline>>>', !!isostr, isostr, d);
  return d;
}

async function postCard({ func, data }) {
  try {
    await func(data);
    console.info('postCard>>>SUCCESS:', data); //TODO:
    Notiflix.Notify.success('Your card has been successfully posted');
    return true;
  } catch (error) {
    console.error('postCard>>>ERROR:', error.data.message, error); //TODO:
    if (error.status === 400) {
      Notiflix.Notify.failure('All field must be filled in');
    }
    return false;
  }
}

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
  const [date, setDate] = useState(''); //FIXME:  getDeadline(deadlineValue)
  const [dateValue, setDateValue] = useState('');
  const [color, setColor] = useState(priorityValue.toString());
  const [anchorEl, setAnchorEl] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [addCards, { error: addCardError }] = API.useAddCardMutation(); // FIXME: error object needed
  const [updateCard, { error: updateCardError }] =
    API.useUpdateCardByIdMutation(); //FIXME: error object needed

  const cardInitialValues =
    modalType === 'Add card'
      ? { title: '', description: '' }
      : { title: titleValue, description: descrValue };

  const {
    values,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    isValid,
  } = useFormik({
    initialValues: cardInitialValues,
    onSubmit: ({ title, description }) => handleSubmitForm(title, description),
    validationSchema,
    enableReinitialize: true,
  });

  useEffect(() => {
    const deadlineDate =
      modalType === 'Add card' ? new Date() : getDeadline(deadlineValue);
    const deadlineStr =
      modalType === 'Add card'
        ? format(new Date(), "'Today,' LLLL d")
        : format(Date.parse(deadlineValue), 'LLLL d');
    setDateValue(deadlineStr);
    setDate(deadlineDate);
    console.log(
      'deadlineStr deadlineDate  :>> ',
      deadlineStr.length,
      deadlineDate
    ); //FIXME: ???
  }, [modalType, deadlineValue]);

  if (true) {
    console.log('RENDER :>> date', date); //FIXME: ???
  }
  /*  if (deadlineValue === undefined && modalType !== 'Add card') {
   console.log('ERROR :>> пропс deadline Value не прокинувся'); //FIXME: ???
   return <></>;
 } */
  if (!isValid) {
    console.log('useFormik :>> isValid', isValid);
  } //TODO:
  if (!!addCardError || !!updateCardError) {
    console.log(
      'baseQuery :>> ERROR',
      addCardError ?? '',
      updateCardError ?? ''
    );
  } //TODO:
  console.log('deadlineValue>>>>', deadlineValue); //FIXME:  якась вакханалія...

  const handleDateClick = e => {
    setAnchorEl(e.currentTarget);
    setIsPopupOpen(true);
  };

  const onDateChange = e => {
    const dateFns = format(e, 'LLLL d');
    setDateValue(dateFns);
    setDate(getEndOfDate(e));
    setAnchorEl(null);
    setIsPopupOpen(false);
  };

  const onColorChange = value => {
    setColor(value);
  };

  const handleSubmitForm = async (title, description) => {
    console.log('DATE FOR formatISO>>>>', !!date, date ?? 'no date'); //

    const ISODate = formatISO(
      !!date ? getEndOfDate(date) : getEndOfDate(), //(modalType === 'Add card') ? getEndOfDate(deadlineValue...),
      {
        representation: 'complete',
      }
    );

    console.log('submit>>>>ISODate', ISODate); //TODO:

    const cardData = {
      title,
      description,
      priority: color,
      deadline: ISODate,
    };

    await postCard(
      modalType === 'Add card'
        ? { func: addCards, data: { columnId, cardData } }
        : { func: updateCard, data: { cardId, cardData } }
    );

    setDateValue('');
    setDate('');
    handleReset();
    close();
  };

  /*  FIXME: конпка: disabled={!isValid}  воно не працює нормально картка дуже часто блокується намертво */

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
