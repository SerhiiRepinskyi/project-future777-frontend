// import ModalLayout from "components/ModalLayout/ModalLayout";
import {  useFormik } from 'formik';
import * as Yup from "yup";
import {
  ComponentWrapper,
  FormStyled,
  InputStyled,
} from './ModalHelp.styled';
import { ButtonWithIcon } from "components/Buttons/Button";




const ModalHelp = ({ open, handleClose }) => {
    const handleSubmit =  async() => {
     
 }
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
        initialValues: { title: '' },
        onSubmit: ({ title }) => handleSubmit(title),
        validationSchema,
    });
    
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

    


export default ModalHelp;