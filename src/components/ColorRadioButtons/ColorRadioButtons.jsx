import * as React from 'react';
import Radio from '@mui/material/Radio';

export default function ColorRadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('d');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  const controlProps = item => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
  });

  return (
    <div>
      <Radio
        {...controlProps('a')}
        sx={{ color: '#8FA1D0', '&.Mui-checked': { color: '#8FA1D0' } }}
      />
      <Radio
        {...controlProps('b')}
        sx={{ color: '#E09CB5', '&.Mui-checked': { color: '#E09CB5' } }}
      />
      <Radio
        {...controlProps('c')}
        sx={{ color: '#BEDBB0', '&.Mui-checked': { color: '#BEDBB0' } }}
      />
      <Radio
        {...controlProps('d')}
        sx={{ color: 'grey', '&.Mui-checked': { color: 'grey' } }}
      />
    </div>
  );
}
