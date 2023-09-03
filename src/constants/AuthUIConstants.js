
const YUP_NAME1_ERR = 'Name must be at least 2 characters';
const YUP_NAME2_ERR = 'Name must be at most 32 characters';
const YUP_NAMEREGEXP_ERR =
  'Only Latin letters, digits, and certain symbols are allowed.';
const INPUT_NAME_TITLE =
  'Only Latin letters, digits, and certain symbols are allowed.';

const YUP_EMAIL_ERR = 'Invalid email format';
const YUP_EMAIL_REQ = 'Email is required';
const INPUT_EMAIL_TITLE =
  'Please enter a valid email address (e.g., example@mail.com)';

const YUP_PWD_REQ = 'Password is required';
const YUP_PWD_MIN_ERR = 'Password must be at least 8 characters';
const YUP_PWD_MAX_ERR = 'Password must be at most 64 characters';
const YUP_PWD_SPACE_ERR = 'Password cannot contain spaces';
const YUP_PWD_REGEXP_ERR =
  'Password must contain only Latin letters, digits, and certain symbols';
const INPUT_PWD_TITLE =
  'Password must contain only Latin letters, digits, and certain symbols';

const UI_MSGS = {
  YUP_EMAIL_ERR,
  YUP_NAME1_ERR,
  YUP_NAME2_ERR,
  YUP_NAMEREGEXP_ERR,
  YUP_EMAIL_REQ,
  YUP_PWD_REQ,
  YUP_PWD_MIN_ERR,
  YUP_PWD_MAX_ERR,
  YUP_PWD_SPACE_ERR,
  YUP_PWD_REGEXP_ERR,
  INPUT_NAME_TITLE,
  INPUT_EMAIL_TITLE,
  INPUT_PWD_TITLE,
};

export default UI_MSGS;
