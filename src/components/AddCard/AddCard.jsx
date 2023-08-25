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
import sprite from '../../assets/images/sprite.svg';
import { ButtonWithIcon } from 'components/Buttons/Button';
import * as Yup from 'yup';

const AddCard = () => {
  const [date, setDate] = useState('');

  const handleSubmit = (title, description) => {
    console.log('Title => ', title);
    console.log('Description => ', description);
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
    initialValues: { title: '', description: '' },
    onSubmit: ({ title, description }) => handleSubmit(title, description),
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
          <ColorRadioButtons />
        </SubWrapper>

        <SubWrapper>
          <SubTitle>Deadline</SubTitle>
          <DateWrapper>
            <DateText>{date}</DateText>
            <svg stroke="#BEDBB0" width="18" height="18">
              <use href={sprite + '#icon-drop-down'} />
            </svg>
          </DateWrapper>
        </SubWrapper>

        <ButtonWithIcon title={'Add'} />
      </FormStyled>
    </ComponentWrapper>
  );
};

export default AddCard;
