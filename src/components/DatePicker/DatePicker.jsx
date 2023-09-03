import { DateCalendarStyled, DatePickerStyles } from "./DatePicker.styled";


const DatePickerCmponent = ({ onChange }) => {
  return (
    <div>
      <DateCalendarStyled
        sx={DatePickerStyles}
        onChange={onChange}
        format="LL"
        disablePast
        showDaysOutsideCurrentMonth
      />
    </div>
  );
};

export default DatePickerCmponent;
