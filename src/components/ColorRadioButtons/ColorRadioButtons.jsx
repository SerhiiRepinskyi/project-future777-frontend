import * as React from 'react';
import Radio from '@mui/material/Radio';

export default function ColorRadioButtons({ onColorChange, value }) {
  const [selectedValue, setSelectedValue] = React.useState('grey');

  const handleChange = event => {
    setSelectedValue(event.target.value);
    onColorChange(event.target.value);
  };

  const controlProps = item => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
  });

  return (
    <div>
      <Radio
        {...controlProps('blue')}
        sx={{ color: '#8FA1D0', '&.Mui-checked': { color: '#8FA1D0' } }}
      />
      <Radio
        {...controlProps('pink')}
        sx={{ color: '#E09CB5', '&.Mui-checked': { color: '#E09CB5' } }}
      />
      <Radio
        {...controlProps('green')}
        sx={{ color: '#BEDBB0', '&.Mui-checked': { color: '#BEDBB0' } }}
      />
      <Radio
        {...controlProps('grey')}
        sx={{ color: 'grey', '&.Mui-checked': { color: 'grey' } }}
      />
    </div>
  );
}
