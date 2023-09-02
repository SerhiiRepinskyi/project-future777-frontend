export const NAME_REGEXP = /^[a-zA-Z0-9@$!%*?& -]*$/;

export const EMAIL_REGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;  // /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
//                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
//                         "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
export const PASSWORD_REGEXP = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};:'",.<>/?]*$/;
//                            "^[a-zA-Z0-9@$!%*?& -_#+=]*$"
export const NO_SPACE_REGEXP = /^\S*$/;

export const THEME_LIST = ["light", "dark", "violet"];
