import { ErrorMessage, useFormikContext } from 'formik';
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
} from '../RegisterForm/RegisterForm.styled';
import { notifyInit } from 'helpers/notifyInit';
import { Notify } from 'notiflix';

export const LoginFormContext = ({ showPassword, togglePassword }) => {
  const { values, dirty, touched, errors, handleSubmit } = useFormikContext();

  return (
    <FormikForm onSubmit={handleSubmit}>
      <Label htmlFor="email">
        <FormikInput
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={values.email}
          title={UI_MSGS.INPUT_EMAIL_TITLE}
        />
        {touched.email && errors.email && (
          <ErrorMessage
            name="email"
            render={msg => {
              Notify.failure(` ${msg}`, notifyInit);
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
            placeholder="Confirm a password"
            value={values.password}
            title={UI_MSGS.INPUT_PWD_TITLE}
          />{' '}
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
        {touched.password && errors.password && (
          <ErrorMessage
            name="password"
            render={msg => {
              Notify.failure(` ${msg}`, notifyInit);
            }}
          />
        )}
      </Label>

      <Button type="submit" disabled={!dirty} aria-label="Submit">
        Log In Now
      </Button>
    </FormikForm>
  );
};
