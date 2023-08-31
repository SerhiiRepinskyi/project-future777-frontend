import React from 'react';
import { API } from 'Services/API';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormStyled, InputStyled } from '../AddCard/AddCard.styled';
import { ButtonWithIcon } from 'components/Buttons/Button';
// import { useSelector } from 'react-redux';
import ModalLayout from '../ModalLayout/ModalLayout';

const AddColumn = ({ open, modalType, boardId, close }) => {
  const [addColumn] = API.useAddColumnMutation();

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
    onSubmit: title => handleSubmit(title),
    validationSchema,
  });
  const handleSubmit = async title => {
    console.log('boardId', boardId);
    console.log('title', title);

    try {
      await addColumn({ boardId, title });

      close();
    } catch (error) {
      console.log(error.message);
    }

    formik.handleReset();
  };

  return (
    <ModalLayout title={modalType} open={open} handleClose={close}>
      <FormStyled onSubmit={formik.handleSubmit}>
        <InputStyled
          id="title"
          name="title"
          placeholder="Title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        <ButtonWithIcon
          title={modalType === 'Add column' ? 'Add' : 'Edit'}
          type={'submit'}
        />
      </FormStyled>
    </ModalLayout>
  );
};

export default AddColumn;
