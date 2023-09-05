import { ErrorMessage, useFormikContext } from 'formik';
import UI_MSGS from 'constants/AuthUIConstants';
import Sprite from '../../assets/images/sprite.svg';
import { Notify } from 'notiflix';
import {
  FormikForm,
  FormikInput,
  Icon,
  IconBtn,
  Wrap,
  Label,
} from './RegisterForm.styled';
import { notifyInit } from 'helpers/notifyInit';
import { ButtonAuth } from 'components/Buttons/Button';
export const RegisterFormContext = ({ showPassword, togglePassword }) => {
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
        {touched.name && errors.name && dirty && (
          <ErrorMessage
            name="name"
            render={msg => {
              Notify.warning(` ${msg}`, notifyInit);
            }}
          />
        )}
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
        {touched.email && errors.email && dirty && (
          <ErrorMessage
            name="email"
            render={msg => {
              Notify.warning(` ${msg}`, notifyInit);
            }}
          />
        )}
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
            aria-label="Toggle Password Visibility"
          >
            <Icon>
              <use href={`${Sprite}#icon-eye`}></use>
            </Icon>
          </IconBtn>
        </Wrap>

        {touched.password && errors.password && dirty && (
          <ErrorMessage
            name="password"
            render={msg => {
              Notify.warning(` ${msg}`, notifyInit);
            }}
          />
        )}
      </Label>
      <ButtonAuth
        title="Register Now"
        type="submit"
        disabled={!dirty || !isValid}
      ></ButtonAuth>

      {/* <Button type="submit" disabled={!dirty || !isValid} aria-label="Submit">
        Register Now
      </Button> */}
    </FormikForm>
  );
};
