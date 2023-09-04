import React, { useState } from 'react';
import { API } from 'Services/API';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormStyled, InputStyled } from '../AddCard/AddCard.styled';
import { ButtonWithIcon } from 'components/Buttons/Button';
import ModalLayout from '../ModalLayout/ModalLayout';
import Notiflix from 'notiflix';

const AddColumn = ({
  open,
  modalType,
  boardId,
  close,
  columnId,
  titleValue,
}) => {
  const [columnTitle, setColumnTitle] = useState(titleValue);
  const [addColumn] = API.useAddColumnMutation();
  const [updateColumn] = API.useUpdateColumnByIdMutation();

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(2, 'Must be more then 2 symbols')
      .required('Title is required'),
  });

  const formikTitle =
    modalType === 'Add column' ? { title: '' } : { title: columnTitle };

  const formik = useFormik({
    initialValues: formikTitle,
    onSubmit: title => handleSubmit(title),
    validationSchema,
  });

  const handleSubmit = async title => {
    if (modalType === 'Add column') {
      try {
        await addColumn({ boardId, title });
      } catch (error) {
        console.log(error.message);
      }
    }

    if (modalType === 'Edit column') {
      if (title.title === titleValue) {
        return Notiflix.Notify.failure('Nothing changed');
      }
      setColumnTitle('');
      try {
        await updateColumn({ columnId, title });
        Notiflix.Notify.success('Your column successfully updated');
        
      } catch (error) {
        console.log(error.message);
      }
    }
    formik.handleReset();
    close();
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
