import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import styled from '@emotion/styled';

const DateCalendarStyled = styled(DateCalendar)`
  .MuiDateCalendar-root {
    font-family: 'Poppins';
    background: '#1F1F1F';
    color: '#ffffff';
  }
`;

const DatePickerStyles = {
  '.MuiTypography-root': {
    width: '24px',
    m: '5px',
    fontSize: '14px',
    fontWeight: 500,
    fontFamily: 'Poppins',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  '.MuiPickersCalendarHeader-label': {
    fontSize: '14px',
    fontWeight: 600,
    fontFamily: 'Poppins',
    color: '#FFF',
  },
  '.MuiDateCalendar-root': {
    width: '235px',
  },
  '.MuiPaper-root': {
    backgroundColor: '#1F1F1F',
  },
  '.MuiYearCalendar-root': {
    width: '265px',
  },
  '.MuiPickersDay-root': {
    color: '#FFF',
  },
  '.MuiButtonBase-root': {
    width: '24px',
    height: '24px',
    m: '5px',
    color: '#fff',
  },

  '.MuiPickersArrowSwitcher-spacer': {
    width: '0px',
  },
  '.MuiPickersFadeTransitionGroup-root': {
    overflow: 'hidden',
  },
  '.MuiButtonBase-root:hover': {
    backgroundColor: '#BEDBB0',
    color: '#1F1F1F',
  },
  '.MuiPickersYear-yearButton.Mui-selected': {
    backgroundColor: '#BEDBB0',
    color: '#1F1F1F',
  },
  '.MuiPickersYear-yearButton:hover': {
    backgroundColor: '#BEDBB0',
    color: '#1F1F1F',
  },
  '.MuiPickersDay-today': {
    backgroundColor: '#BEDBB0',
    color: '#1F1F1F',
    border: '1px solid #BEDBB0',
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
  width: '265px',
  height: '295px',
  backgroundColor: '#1F1F1F',
  border: '1px solid #BEDBB0',
  color: '#FFF',
  borderRadius: '8px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: -0.36,
  marginBottom: 0,
};

const DatePickerCmponent = ({ onChange }) => {
  return (
    <div>
      {/* <ThemeProvider theme={theme}> */}
      <DateCalendarStyled
        sx={DatePickerStyles}
        onChange={onChange}
        format="LL"
        disablePast
        showDaysOutsideCurrentMonth
      />
      {/* </ThemeProvider> */}
    </div>
  );
};

export default DatePickerCmponent;
