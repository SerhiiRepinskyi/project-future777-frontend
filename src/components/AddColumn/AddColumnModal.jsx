import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Modal, Box, IconButton } from '@mui/material';
import {
  ComponentWrapper,
  FormStyled,
  InputStyled,
  Title,
} from './AddColumnModal.Styled';
import { ButtonWithIcon } from 'components/Buttons/Button';
import sprite from '../../assets/images/sprite.svg';


const AddColumnModal = ({ isOpen, onClose }) => {
const validationSchema = Yup.object({
    title: Yup.string()
      .min(2, 'Must be more than 2 symbols')
      .required('Title is required')
      .matches(
        /^(\w*)$/,
        'Title may contain only letters, apostrophe, dash and spaces.'
      ),
  });

  const formik = useFormik({
    initialValues: { title: '' },
    onSubmit: () => {
      console.log('Title => ', formik.values.title);
      formik.handleReset();
      onClose();
    },
    validationSchema,
  });

  const handleSubmit = () => {
    formik.handleSubmit(); 
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ComponentWrapper>
          <Title >
          Add column
        </Title>
          <IconButton onClick={onClose} sx={{ position: 'absolute', top: '6px', right: '6px', zIndex: 1 }}>
            <svg stroke="#fff" strokeOpacity="1" width="18" height="18">
              <use href={sprite + '#icon-x-close'} />
            </svg>
          </IconButton>
          <FormStyled onSubmit={formik.handleSubmit}>
            <InputStyled
              id="title"
              name="title"
              placeholder="Title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            <ButtonWithIcon title={'Add'} type='submit' onClick={handleSubmit} />
          </FormStyled>
        </ComponentWrapper>
      </Box>
    </Modal>
  );
};

export default AddColumnModal;