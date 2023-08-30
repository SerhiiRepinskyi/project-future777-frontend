import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ComponentWrapper,
  FormStyled,
  InputStyled,
} from '../AddCard/AddCard.styled';
import { ButtonWithIcon } from 'components/Buttons/Button';
import { useAddColumnMutation } from 'redux/columns/columnSlice';
// import { useGetCurrentUserQuery } from 'redux/auth/authApi';
import { useSelector } from 'react-redux';

const AddColumn = ({ boardId, close }) => {
  const [addColumn] = useAddColumnMutation();
  const token = useSelector(state => state.auth.token);

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(2, 'Must be more then 2 symbols')
      .required('Title is required')
      .matches(
        /^(\w*)$/,
        'Title may contain only letters, apostrophe, dash and spaces.'
      ),
  });

  const formik = useFormik({
    initialValues: { title: '' },
    onSubmit: ({ title }) => handleSubmit(title),
    validationSchema,
  });
  const handleSubmit = async title => {
    console.log('submitting');
    try {
      await addColumn({
        id: boardId,
        title: {
          title,
        },
        token,
      });

      close();
    } catch (error) {
      console.log(error);
    }

    console.log('Title => ', title);

    formik.handleReset();
  };

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
        <ButtonWithIcon title={'Add'} type={'submit'} />
      </FormStyled>
    </ComponentWrapper>
  );
};

export default AddColumn;
