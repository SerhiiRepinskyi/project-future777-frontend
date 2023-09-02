
import { Formik } from 'formik';
import { validationSchema } from 'validationSchemas/validationSchema';

import Sprite from '../../assets/images/sprite.svg';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
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
  Title,
  FormikForm,
  Label,
  FormikInput,
  Wrap,
  Icon,
  Error,
  Button,
  IconBtn,
} from './EditProfileContent.styled';

import { selectAvatar } from 'redux/auth/authSelectors';
// import Loader from 'components/Loader/Loader';
import {
  useUpdateAvatarMutation,
  useUpdateUserMutation,
} from 'Services/API_Component';

export const EditProfileContent = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [updateAvatar] = useUpdateAvatarMutation();
  const [updateUser] = useUpdateUserMutation();

  const dispatch = useDispatch();
  const currentImage = useSelector(selectAvatar);

  const user = useSelector(state => state.auth.user);
  // const currentImage=useSelector(state=>state.auth.user.avatarURL)

  const handleAvatarChange = async event => {
    const file = event.target.files[0];

    console.log(file);

    if (!file) {
      return;
    }

    const formData = new FormData();
    console.log(formData);

    formData.append('avatarURL', file);
     console.log(formData);
    

    try {
      const response = await updateAvatar(formData);
      console.log(response);

      if (response.data?.avatarURL) {
        const newAvatarURL = response.data.avatarURL;

        dispatch(setAvatar(newAvatarURL));
        Notify.success('Avatar updated successfully!');
        onClose();
      } else {
        Notify.failure('Error updating avatar!');
      }
    } catch (error) {
      Notify.failure('An error occurred:', error);
    }
     onClose();
  };

  const handleSubmit = async values => {
    try {
      const response = await updateUser(values);
      console.log(response.data);
      if (response.error) {
        Notify.failure('Error updating the profile:', response.error);
      } else {
        dispatch(setUser(values));

        Notify.success('User profile updated!');
        onClose();
      }
    } catch (error) {
      Notify.failure('Error updating the profile:', error);
    }
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Title>Edit profile</Title>
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
              >
                <IconPlus aria-label="add">
                  <use href={`${Sprite}#icon-add`}></use>
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
                      autoComplete="off"
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
                    {touched.email && errors.email && (
                      <Error>{errors.email}</Error>
                    )}
                    <Error name="email" component="div" />
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
                    Send
                  </Button>
                </FormikForm>
              </>
            )}
          </Formik>
        </FormWrap>
      </Container>
    </>
  );
};
