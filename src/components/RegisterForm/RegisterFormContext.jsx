import { useFormikContext } from 'formik';

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
          pattern="^[a-zA-Z0-9@$!%*?& -]*$"
          title="Only letters, digits, and certain symbols are allowed."
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
          pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
          title="Please enter a valid email address"
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
            pattern="^[a-zA-Z0-9@$!%*?& -_#+=]*$"
            title="Password must contain at least one letter and at least one number"
          />{' '}
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
