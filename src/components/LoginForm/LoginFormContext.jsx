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
} from '../RegisterForm/RegisterForm.styled';

export const LoginFormContext = ({ showPassword, togglePassword }) => {
  const { values, dirty, handleSubmit } = useFormikContext();

  return (
    <FormikForm onSubmit={handleSubmit}>
      <Label htmlFor="email">
        <FormikInput
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={values.email}
        />
      </Label>

      <Label htmlFor="password">
        <Wrap>
          <FormikInput
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm a password"
            value={values.password}
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
      </Label>

      <Button type="submit" disabled={!dirty}>
        Log In Now
      </Button>
    </FormikForm>
  );
};
