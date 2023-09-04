import { Report } from 'notiflix';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { FormStyled, InputStyled, TextareaStyled } from './ModalHelp.styled';
import { ButtonWithoutIcon } from 'components/Buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { API } from 'Services/API';
import { setError } from 'redux/auth/authAPISlice';
import ModalLayout from 'components/ModalLayout/ModalLayout';

const ModalHelp = ({ title, open, handleClose }) => {
  const dispatch = useDispatch();
  const [helpUser] = API.useHelpUserMutation();
  const email = useSelector(state => state.auth.user.email);
  const handleSubmit = async () => {
    try {
      const response = await helpUser({
        email: formik.values.email,
        comment: formik.values.comment,
      });
      if (response) {
        handleClose();

        Report.success(
          'Email successfully sent',
          'Our developer has engaged in an epic battle to provide you with an answer. Brace yourself for the victory writing, and in the meantime, hold tight!',
          'Ok'
        );
      }
      formik.resetForm();
    } catch (error) {
      if (error.status === 400) {
        console.log('All field must be filled in');
      } else {
        console.log('An error occurred:', error.data.message);
        dispatch(setError(error));
      }
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please enter a valid email address')
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        'Please enter a valid email address'
      )
      .required('Email is required'),
    comment: Yup.string().required('Comment is required'),
  });

  const formik = useFormik({
    initialValues: { email: email, comment: '' },
    onSubmit: ({ title }) => handleSubmit(title),
    validationSchema,
  });
console.log(formik.values.email)
  return (
    <>
      <ModalLayout title={'Need help'} open={open} handleClose={handleClose}>
        <FormStyled sx={{width: {0: "77vw", 375: "287px", 768: "352px"}}} onSubmit={formik.handleSubmit}>
          <InputStyled
            id="email"
            name="email"
            placeholder="Email address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <TextareaStyled
            id="comment"
            name="comment"
            placeholder="Comment"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comment}
          />

          <ButtonWithoutIcon
            title={'Send'}
            type={'submit'}
            sx={{ marginTop: 24, background: 'var(--primary-text-color)' }}
             onClick={() => {
               if (!formik.values.email) {
                 Notiflix.Notify.warning('Email field must be filled in');
               } else if (formik.values.comment === '') {
                 Notiflix.Notify.warning('Comment field must be filled in');
               }else if (!validationSchema.isValidSync({ email: formik.values.email })) {
              Notiflix.Notify.failure('Please enter a valid email address');
               }
            }}
          >
            Send
          </ButtonWithoutIcon>
        </FormStyled>
      </ModalLayout>
    </>
  );
};

export default ModalHelp;
