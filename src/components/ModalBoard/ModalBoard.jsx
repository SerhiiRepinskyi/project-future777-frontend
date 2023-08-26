import { ButtonWithIcon } from "../Button";
import ModalLayout from "../ModalLayout";
import { useState } from "react";
import { useFormik } from "formik";
import { Typography, List, ListItemIcon } from "@mui/material";
import {
  FormStyled,
  InputStyled,
  TransparentSVG,
  UlStyled,
  LiStyled,
} from "./ModalBoard.styled";
import sprite from "../../assets/images/sprite.svg";

import * as Yup from "yup";

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
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const handleSubmit = (title) => {
    console.log("Title => ", title);
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
      <ModalLayout
        title={"New board"}
        openModal={open}
        handleClose={handleClose}
      >
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
            <li>
              <TransparentSVG>
                <use href={sprite + "#icon-Project"} />
              </TransparentSVG>
            </li>
            <li>
              <TransparentSVG>
                <use href={sprite + "#icon-star"} />
              </TransparentSVG>
            </li>
            <li>
              <TransparentSVG>
                <use href={sprite + "#icon-loading"} />
              </TransparentSVG>
            </li>
            <li>
              <TransparentSVG>
                <use href={sprite + "#icon-puzzle"} />
              </TransparentSVG>
            </li>
            <li>
              <TransparentSVG>
                <use href={sprite + "#icon-container"} />
              </TransparentSVG>
            </li>
            <li>
              <TransparentSVG>
                <use href={sprite + "#icon-lightning"} />
              </TransparentSVG>
            </li>
            <li>
              <TransparentSVG>
                <use href={sprite + "#icon-colors"} />
              </TransparentSVG>
            </li>
            <li>
              <TransparentSVG>
                <use href={sprite + "#icon-hexagon"} />
              </TransparentSVG>
            </li>
          </UlStyled>

          <Typography variant="h2" sx={titleStyle}>
            Background
          </Typography>
          <UlStyled>
            <LiStyled>
              <img
                src="../../assets/images/bcgCompressed/bcg-desktop-1-1.jpg"
                alt=""
                // width="24px"
                // height="24px"
              />
            </LiStyled>
            <LiStyled>
              <img src="" alt="" />
            </LiStyled>
            <LiStyled>
              <img src="" alt="" />
            </LiStyled>
            <LiStyled>
              <img src="" alt="" />
            </LiStyled>
            <LiStyled>
              <img src="" alt="" />
            </LiStyled>
            <LiStyled>
              <img src="" alt="" />
            </LiStyled>
            <LiStyled>
              <img src="" alt="" />
            </LiStyled>
            <LiStyled>
              <img src="" alt="" />
            </LiStyled>
            <LiStyled>
              <img src="" alt="" />
            </LiStyled>
            <LiStyled>
              <img src="" alt="" />
            </LiStyled>
            <LiStyled>
              <img src="" alt="" />
            </LiStyled>
            <LiStyled>
              <img src="" alt="" />
            </LiStyled>
            <LiStyled>
              <img src="" alt="" />
            </LiStyled>
            <LiStyled>
              <img src="" alt="" />
            </LiStyled>
            <LiStyled>
              <img src="" alt="" />
            </LiStyled>
            <LiStyled>
              <img src="" alt="" />
            </LiStyled>
          </UlStyled>

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
