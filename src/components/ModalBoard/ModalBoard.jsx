import { useFormik } from "formik";
import { Typography } from "@mui/material";
import {
  FormStyled,
  InputStyled,
  TransparentSVG,
  UlStyled,
  LiStyled,
  UlBgStyled,
  ImgStyled,
  LiIconsStyled,
} from './ModalBoard.styled';
import sprite from "../../assets/images/sprite.svg";
import * as Yup from "yup";
import { ButtonWithIcon } from "components/Buttons/Button";
import ModalLayout from "components/ModalLayout/ModalLayout";
import { useState } from "react";
import { arrIcons } from "./data";
import { backgroundImg } from "./data";
import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useAddBoardsMutation } from "redux/boards/boardSlice";

const titleStyle = {
  color: "#FFF",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  letterSpacing: -0.36,
  // marginBottom: 24 / 8,
};

const ModalBoard = ({ open, handleClose }) => {
  const token = useSelector((state) => state.auth.token);
  // const [titleInputText, setTitleInputText] = useState('');
  const [iconIndex, setIconIndex] = useState(null);
  const [bgImgIndex, setBgImgIndex] = useState(null);
  const [addBoards] = useAddBoardsMutation();
  console.log(token);

  // console.log('data =>', iconIndex, bgImgIndex);

  const handleSubmit = async (title) => {
    console.log("Title => ", title, iconIndex, bgImgIndex);

    try {
      await addBoards({
        boardsData: {
          title: title,
          icon: iconIndex,
          background: bgImgIndex,
        },
        token,
      });
    } catch (error) {
      console.log(error);
    }

    formik.handleReset();
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(2, "Must be more then 2 symbols")
      .required("Title is required")
      .matches(
        /^(\w*)$/,
        "Title may contain only letters, apostrophe, dash and spaces."
      ),
    description: Yup.string(),
  });

  const formik = useFormik({
    initialValues: { title: "" },
    onSubmit: ({ title }) => handleSubmit(title),
    validationSchema,
  });

  return (
    <>
      <ModalLayout title={"New board"} open={open} handleClose={handleClose}>
        <FormStyled onSubmit={formik.handleSubmit}>
          <InputStyled
            id="title"
            name="title"
            placeholder="Title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          <Typography variant="h2" sx={titleStyle}>
            Icons
          </Typography>
          <UlStyled>
            {arrIcons.map((el, index) => {
              return (
                <LiIconsStyled
                  key={index + 1}
                  onClick={() => setIconIndex(index + 1)}
                >
                  <TransparentSVG>
                    <use href={sprite + el} />
                  </TransparentSVG>
                </LiIconsStyled>
              );
            })}
          </UlStyled>

          <Typography variant="h2" sx={titleStyle}>
            Background
          </Typography>
          <UlBgStyled>
            <LiStyled></LiStyled>
            {backgroundImg.map((el, index) => {
              return (
                <LiStyled
                  key={index + 1}
                  onClick={() => setBgImgIndex(index + 1)}
                >
                  <ImgStyled
                    src={el}
                    alt=""
                  />
                </LiStyled>
              );
            })}
          </UlBgStyled>

          <ButtonWithIcon
            title={"Create"}
            type={"submit"}
            // onClick={handleClose}
          />
        </FormStyled>
      </ModalLayout>
    </>
  );
};

export default ModalBoard;
