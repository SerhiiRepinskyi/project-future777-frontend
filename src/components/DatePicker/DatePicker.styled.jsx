import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import styled from '@emotion/styled';

export const DateCalendarStyled = styled(DateCalendar)`
  .MuiDateCalendar-root {
    font-family: 'Poppins';
    background: 'var(--primary-bg-color)';
    color: 'var(--primary-text-color)';
  }
`;

export const DatePickerStyles = {
  '.MuiTypography-root': {
    width: '24px',
    m: '5px',
    fontSize: '14px',
    fontWeight: 500,
    fontFamily: 'Poppins',
    color: 'var(--secondary-text-color)',
  },
  '.MuiPickersCalendarHeader-label': {
    fontSize: '14px',
    fontWeight: 600,
    fontFamily: 'Poppins',
    color: 'var(--primary-text-color)',
  },
  '.MuiDateCalendar-root': {
    width: '235px',
  },
  '.MuiPaper-root': {
    backgroundColor: 'var(--primary-bg-color)',
  },
  '.MuiYearCalendar-root': {
    width: '265px',
  },
  '.MuiPickersDay-root': {
    color: 'var(--primary-text-color)',
  },
  '.MuiButtonBase-root': {
    width: '24px',
    height: '24px',
    m: '5px',
    color: 'var(--primary-text-color)',
  },

  '.MuiPickersArrowSwitcher-spacer': {
    width: '0px',
  },
  '.MuiPickersFadeTransitionGroup-root': {
    overflow: 'hidden',
  },
  '.MuiButtonBase-root:hover': {
    backgroundColor: 'var(--default-screen-page-link-color)',
    color: 'var(--primary-bg-color)',
  },
  '.MuiPickersYear-yearButton.Mui-selected': {
    backgroundColor: 'var(--button-bg-color)',
    color: 'var(--primary-bg-color)',
  },
  '.MuiPickersYear-yearButton:hover': {
    backgroundColor: 'var(--button-bg-color)',
    color: 'var(--primary-bg-color)',
  },
  '.MuiPickersDay-today': {
    backgroundColor: 'var(--button-bg-color)',
    color: 'var(--primary-bg-color)',
    border: '1px solid var(--button-bg-color)',
  },
  '.MuiPickersDay-dayOutsideMonth': {
    fontWeight: 400,
    color: 'rgba(255, 255, 255, 0.18)',
  },
  '.MuiButtonBase-root.Mui-disabled': {
    fontWeight: 400,
    color: 'rgba(255, 255, 255, 0.18)',
  },
  '.css-qa7bje-MuiButtonBase-root-MuiPickersDay-root.Mui-disabled:not(.Mui-selected)':
    {
      fontWeight: 400,
      color: 'rgba(255, 255, 255, 0.38)',
    },
  'MuiPickersYear-yearButton.Mui-selected': {
    backgroundColor: 'var(--button-bg-color) !important',
  },
  'MuiPickersYear-yearButton.Mui-selected:hover': {
    backgroundColor: 'var(--button-bg-color) !important',
  },
  width: '265px',
  height: '295px',
  backgroundColor: 'var(--primary-bg-color)',
  border: '1px solid var(--default-screen-page-link-color)',
  color: 'var(--primary-text-color)',
  borderRadius: '8px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: -0.36,
  marginBottom: 0,
};
