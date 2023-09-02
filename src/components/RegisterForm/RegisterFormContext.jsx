import { useFormikContext } from 'formik';
import UI_MSGS from 'constants/AuthUIConstants';
import Sprite from '../../assets/images/sprite.svg';
import {
  FormikForm,
  FormikInput,
  Icon,
  IconBtn,
  Wrap,
  Label,
  Button,
  Error,
} from './RegisterForm.styled';
/* FIXME:
OD: ці паттерни в інпутах непотрібні-> викликають
 помилки. Валідація зроблена через yup-схему.

          pattern={EMAIL_REGEXP}
            pattern={PASSWORD_REGEXP}
          pattern={NAME_REGEXP}
           */
export const RegisterFormContext = ({
  showPassword,
  togglePassword,
}) => {
  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    isValid,
    dirty,
    handleSubmit,
  } = useFormikContext();

  return (
    <FormikForm onSubmit={handleSubmit}>
      <Label htmlFor="name">
        <FormikInput
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
          title={UI_MSGS.INPUT_NAME_TITLE}
        />
        {touched.name && errors.name && (
          <Error>{errors.name}</Error>
        )}
        <Error name="name" component="div" />
      </Label>

      <Label htmlFor="email">
        <FormikInput
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          title={UI_MSGS.INPUT_EMAIL_TITLE}
        />
        {touched.email && errors.email && <Error>{errors.email}</Error>}
        <Error name="email" component="div" />
      </Label>

      <Label htmlFor="password">
        <Wrap>
          <FormikInput
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Create a password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            title={UI_MSGS.INPUT_PWD_TITLE}
          />
          <IconBtn
            type="button"
            onClick={togglePassword}
            active={showPassword}
            className={showPassword ? 'active' : ''}
          >
            <Icon>
              <use href={`${Sprite}#icon-eye`}></use>
            </Icon>
          </IconBtn>
        </Wrap>

        {touched.password && errors.password && (
          <Error>{errors.password}</Error>
        )}
        <Error name="password" component="div" />
      </Label>

      <Button type="submit" disabled={!dirty || !isValid}>
        Register Now
      </Button>
    </FormikForm>
  );
};
