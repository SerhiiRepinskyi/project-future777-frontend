import { Modal, Box, Typography, useMediaQuery } from '@mui/material';
import { ButtonClose } from 'components/ModalBoard/ModalBoard.styled';
import sprite from '../../assets/images/sprite.svg';
import { Report } from 'notiflix';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Notiflix from 'notiflix';
import {
  ComponentWrapper,
  FormStyled,
  InputStyled,
  TextareaStyled,

} from './ModalHelp.styled';
import { ButtonWithoutIcon} from "components/Buttons/Button";
import { useDispatch, useSelector } from 'react-redux';
import { API } from 'Services/API';
import { setError } from 'redux/auth/authAPISlice';
const ModalStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  borderRadius: 8 / 4,
  border: '1px solid rgba(190, 219, 176, 0.50)',
  background: '#151515',
  padding: 24/8,
};

const titleStyles = {
  color: 'var(--primary-text-color)',
  fontSize: 18,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: -0.36,
  marginBottom: 24 / 8,
  fontFamily: 'Poppins',
};



const ModalHelp = ({ open, handleClose }) => {
  const adaptiveStyle = useMediaQuery('(min-width: 1440px)');
    const dispatch = useDispatch()
    const[helpUser] = API.useHelpUserMutation()
    const email = useSelector(state => state.auth.user.email);
  const handleSubmit = async () => {
        try {
            const response = await helpUser({
                email: formik.values.email,
                comment: formik.values.comment,
            })
            if (response) {
                handleClose();
                
            Report.success(
                    'Email successfully sent',
                    'Our developer has engaged in an epic battle to provide you with an answer. Brace yourself for the victory writing, and in the meantime, hold tight!',
                    'Ok'
                );  
            }
            formik.resetForm()    
        }
        catch (error) {
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
  comment: Yup.string()
    .required('Comment is required'),
});

    const formik = useFormik({
        initialValues: { email: email, comment: "" , },
        onSubmit: ({ title }) => handleSubmit(title),
        validationSchema,
    });
    
    return (
      <ComponentWrapper> 
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        
      >
        <Box sx={{ ...ModalStyles, width: adaptiveStyle ? 400 : 335,  background:'var(--modal-bg-color)' }}>
          <Typography variant="h2" sx={titleStyles} >
            Need help
          </Typography>
            <ButtonClose type="button" onClick={handleClose} >
            <svg style={{ stroke: 'var(--primary-text-color)' }} width="18" height="18">
              <use href={sprite + '#icon-x-close'} />
            </svg>
          </ButtonClose>
         
        <FormStyled onSubmit={formik.handleSubmit}>
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
            sx={{ marginTop: 24, background:'var(--primary-text-color)' }}
                onClick={() => {
                  (formik.values.email === '' && Notiflix.Notify.warning('Email field must be filled in')) || (formik.values.comment === '' && Notiflix.Notify.warning('Comment field must be filled in'));
                  if (!validationSchema.isValidSync({ email: formik.values.email })) {
                    Notiflix.Notify.failure('Please enter a valid email address');
                  }
                }}
            >
            Send
            </ButtonWithoutIcon> 
         </FormStyled>            
         </Box>
      </Modal>
        </ComponentWrapper>
    );
}; 

    


export default ModalHelp;