import * as yup from 'yup';
import {
  NAME_REGEXP,
  EMAIL_REGEXP,
  PASSWORD_REGEXP,
  NO_SPACE_REGEXP,
} from 'constants/userConstans';
import UI_MSGS from '../constants/AuthUIConstants';

export const profileValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, UI_MSGS.YUP_NAME1_ERR)
    .max(32, UI_MSGS.YUP_NAME2_ERR)
    .matches(NAME_REGEXP, UI_MSGS.YUP_NAMEREGEXP_ERR),
  email: yup
    .string()
    .matches(EMAIL_REGEXP, UI_MSGS.YUP_EMAIL_ERR)
    .required(UI_MSGS.YUP_EMAIL_REQ),
  password: yup
    .string()
    // .required(UI_MSGS.YUP_PWD_REQ)
    .min(8, UI_MSGS.YUP_PWD_MIN_ERR)
    .max(64, UI_MSGS.YUP_PWD_MAX_ERR)
    .matches(NO_SPACE_REGEXP, UI_MSGS.YUP_PWD_SPACE_ERR)
    .matches(PASSWORD_REGEXP, UI_MSGS.YUP_PWD_REGEXP_ERR),
});
