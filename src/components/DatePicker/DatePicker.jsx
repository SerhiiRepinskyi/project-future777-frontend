import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import styled from '@emotion/styled';

const DateCalendarStyled = styled(DateCalendar)`
  .MuiDateCalendar-root {
    font-family: 'Poppins';
    background: '#1F1F1F';
    color: '#ffffff';
  }
`;

const DatePickerCmponent = ({ onChange }) => {

  return (
    <div>
      {/* <ThemeProvider theme={theme}> */}
      <DateCalendarStyled
        disablePast
        onChange={onChange}
        format="LL"
        showDaysOutsideCurrentMonth
      />
      {/* </ThemeProvider> */}
    </div>
  );
};

export default DatePickerCmponent;
