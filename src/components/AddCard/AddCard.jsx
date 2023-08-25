import React, { useEffect, useState } from 'react';
import {
  ComponentWrapper,
  FormikStyled,
  TextareaStyled,
  SubWrapper,
  DateText,
  DateWrapper,
  SubTitle,
  InputStyled,
} from './AddCard.styled';
import { Formik, Field, Form } from 'formik';
import ColorRadioButtons from 'components/ColorRadioButtons/ColorRadioButtons';
import { format } from 'date-fns';
import sprite from '../../assets/images/sprite.svg';
import { ButtonWithIcon } from 'components/Buttons/Button';

const AddCard = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [date, setDate] = useState('');
  const handleChange = event => {
    console.log('Chanching... ');
  };
  const handleSubmit = event => {
    console.log('Submitting... ');
  };

  useEffect(() => {
    const dateFns = format(new Date(), "'Today,' LLLL d");
    setDate(dateFns);
  }, []);

  console.log(date);

  return (
    <ComponentWrapper>
      <Formik
        initialValues={{
          title: '',
          description: '',
        }}
        onSubmit={() => console.log('Submitting AddCard')}
      >
        <FormikStyled>
          <InputStyled id="title" name="title" placeholder="Title" />

          <TextareaStyled
            id="description"
            name="description"
            component="textarea"
            placeholder="Description"
          />
        </FormikStyled>
      </Formik>
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
      <ButtonWithIcon
        sx={{ width: '300px' }}
        title={'Add'}
        onClick={handleSubmit}
      />
    </ComponentWrapper>
  );
};

export default AddCard;
