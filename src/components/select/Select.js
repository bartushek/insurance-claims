import React from 'react';
import MUISelect from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

const Select = ({ input, children, meta, label, ...other }) => {
  return (
    <FormControl>
      <InputLabel htmlFor={other.id}>{label}</InputLabel>
      <MUISelect
        input={<Input id={other.id} />}
        onChange={input.onChange}
        {...other}
      >
        {children}
      </MUISelect>
    </FormControl>
  )
};

export default Select;