import { ErrorMessage, Formik } from 'formik';
import { validationSchema } from 'validationSchemas/validationSchema';
import UI_MSGS from 'constants/AuthUIConstants';

import Sprite from '../../assets/images/sprite.svg';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Notify, Report } from 'notiflix';
import { setAvatar, setUser } from 'redux/user/userAPISlice';

import {
  Container,
  FormWrap,
  AvatarWrapper,
  IconAvatar,
  IconButton,
  IconPlus,
  Img,
  ImgWrapper,
  FormikForm,
  Label,
  FormikInput,
  Wrap,
  Icon,
  IconBtn,
} from './ModalEditProfile.styled';
import { notifyInit } from 'helpers/notifyInit';

import { selectAvatar } from 'redux/auth/authSelectors';
import Loader from 'components/Loader/Loader';
import {
  useUpdateAvatarMutation,
  useUpdateUserMutation,
} from 'Services/API_Component';
import ModalLayout from 'components/ModalLayout/ModalLayout';
import { ButtonWithoutIcon } from 'components/Buttons/Button';

export const ModalEditProfile = ({ title, open, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [updateAvatar, { isLoading }] = useUpdateAvatarMutation();
  const [updateUser, { isLoading: isUpdateUserLoading }] =
    useUpdateUserMutation();

  const dispatch = useDispatch();
  const currentImage = useSelector(selectAvatar);

  const user = useSelector(state => state.auth.user);
  // const currentImage=useSelector(state=>state.auth.user.avatarURL)

  const handleAvatarChange = async event => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const formData = new FormData();

    formData.append('avatarURL', file);

    try {
      const response = await updateAvatar(formData);

      if (response.data?.avatarURL) {
        const newAvatarURL = response.data.avatarURL;

        dispatch(setAvatar(newAvatarURL));
        Report.success('Successful', 'Avatar updated successfully!', 'Okay');
        // handleClose();
      } else {
        Report.failure('Error!', 'Error updating avatar!', 'Okay');
      }
    } catch (error) {
      Report.failure('Error!', `'An error occurred:' ${error}`, 'Okay');
    }
    // handleClose();
  };

  const handleSubmit = async values => {
    const trimmedValues = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    };
    try {
      const response = await updateUser(trimmedValues);

      if (response.error) {
        Notify.failure('Error updating the profile:', response.error);
      } else {
        dispatch(setUser(trimmedValues));

        Report.success('Successful', 'User profile updated!', 'Okay');
        handleClose();
      }
    } catch (error) {
      Notify.failure('Error updating the profile:', error);
    }
  };

  return (
    <>
      <ModalLayout title={title} open={open} handleClose={handleClose}>
        {(isLoading || isUpdateUserLoading) && <Loader />}
        <Container sx={{ width: { 0: '77vw', 375: '287px', 768: '352px' } }}>
          <FormWrap>
            <AvatarWrapper>
              <ImgWrapper>
                {currentImage.includes('gravatar') ? (
                  <IconAvatar aria-label="User picture">
                    <use href={`${Sprite}#icon-user`}></use>
                  </IconAvatar>
                ) : (
                  <Img src={currentImage} alt="User picture" />
                )}

                <IconButton
                  onClick={() => document.getElementById('avatarURL').click()}
                  aria-label="add avatar"
                >
                  <IconPlus>
                    <use href={`${Sprite}#icon-plus`}></use>
                  </IconPlus>
                  <input
                    id="avatarURL"
                    name="avatarURL"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    style={{ display: 'none' }}
                  />
                </IconButton>
              </ImgWrapper>
            </AvatarWrapper>

            <Formik
              initialValues={{
                name: `${user.name}`,
                email: `${user.email}`,
                password: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                dirty,
                handleBlur,
                handleChange,
                isValid,
              }) => (
                <>
                  <FormikForm>
                    <Label htmlFor="name">
                      <FormikInput
                        autoComplete="off"
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
                        autoComplete="off"
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
                          autoComplete="off"
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

                      {touched.password&&errors.password && dirty && (
                        <ErrorMessage
                          name="password"
                          render={msg => {
                            Notify.warning(` ${msg}`, notifyInit);
                          }}
                        />
                      )}
                    </Label>

                    {/* <Button
                      type="submit"
                      disabled={!dirty || !isValid}
                      aria-label="Submit"
                    >
                      Send
                    </Button> */}
                    <ButtonWithoutIcon
                      title={'Send'}
                      type={'submit'}
                      disabled={!isValid}
                    ></ButtonWithoutIcon>
                  </FormikForm>
                </>
              )}
            </Formik>
          </FormWrap>
        </Container>
      </ModalLayout>
    </>
  );
};
