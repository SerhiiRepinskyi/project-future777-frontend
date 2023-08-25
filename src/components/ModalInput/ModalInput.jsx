import { TextField, styled } from '@mui/material';

const StyledTextField = styled(TextField)(({ theme }) => ({
  opacity: '0.4px',
  backgroundColor: '#1F1F1F',
  marginBottom: '24px',

  '& label.Mui-focused': {
    color: '#fff',
  },

  '& .MuiInputBase-input': {
    color: '#fff',
    fontFamily: 'Poppins, sans-serif',
    paddingLeft: '18px',
    paddingTop: '14px',
    paddingBottom: '14px',
  },
  '& .MuiFormLabel-root': {
    color: '#fff',
    fontFamily: 'Poppins, sans-serif',
  },

  '& .MuiInputBase-root': {
    borderRadius: '8px',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#BEDBB0',
    },
    '&:hover fieldset': {
      borderColor: '#BEDBB0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#BEDBB0',
    },
  },
}));

const ModalInput = ({ placeholder, options }) => {
  return (
    <StyledTextField
      autoFocus
      id="title"
      margin="dense"
      placeholder={placeholder}
      type="text"
      fullWidth
      {...options}
    />
  );
};

export default ModalInput;
