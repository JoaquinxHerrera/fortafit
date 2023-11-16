import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';

export default function RowRadioButtonsGroup({gender, onGenderChange}) {
    RowRadioButtonsGroup.propTypes = {
        gender: PropTypes.string, 
        onGenderChange: PropTypes.func.isRequired,
      };
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" sx={{ color: 'white', fontSize:'1.3rem'}}>GENDER</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={gender}
        onChange={onGenderChange}  
      >
        <FormControlLabel value="female" control={<Radio  sx={{ color: 'gray' }}/>} label="Female"  />
        <FormControlLabel value="male" control={<Radio sx={{ color: 'gray' }}/>} label="Male" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>
  );
}