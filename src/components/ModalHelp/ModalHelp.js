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
import { ButtonWithoutIcon } from "components/Buttons/Button";
import ModalLayout from 'components/ModalLayout/ModalLayout';
import { useDispatch } from 'react-redux';
import { API } from 'Services/API';
import { setError } from 'redux/auth/authAPISlice';



const ModalHelp = ({ open, handleClose }) => {
    const dispatch = useDispatch()
    const[helpUser] = API.useHelpUserMutation()
    
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
        email: Yup.string().email()
            .required('Email is required'),
        comment: Yup.string()
        .required('Comment is required'),
    });

    const formik = useFormik({
        initialValues: { email: "", comment: "" , },
        onSubmit: ({ title }) => handleSubmit(title),
        validationSchema,
    });
    
    return (
    <ModalLayout
        title={'Need help'}
        open={open}
        handleClose={handleClose}
 
            // sx={{ ...ModalStyles, width: '400px', height: '355px' }}
            //СПИТАТИ СТВОРИТИ ОКРЕМИЙ ./ModalLayoutStyles і тоді змінити
        >
      <ComponentWrapper>
        <FormStyled onSubmit={formik.handleSubmit}>
            <InputStyled
                id="email"
                name="email"
                placeholder="email address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
             <TextareaStyled
                id="comment"
                name="comment"
                placeholder="comment"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.comment}
            /> 

                    <ButtonWithoutIcon title={'Add'} type={'submit'} onClick={() => {
                        (formik.values.email === '' && Notiflix.Notify.warning('Email field must be filled in')) || (formik.values.comment === '' && Notiflix.Notify.warning('Comment field must be filled in'));
                    }} />
        </FormStyled>
        </ComponentWrapper>
    </ModalLayout>

    );
}; 

    


export default ModalHelp;