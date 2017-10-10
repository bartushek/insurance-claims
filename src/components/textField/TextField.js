import React from 'react';
import MUITextField from 'material-ui/TextField';

const TextField = ({ input, meta, ...other }) => {
  return (
    <MUITextField
      onChange={input.onChange}
      {...other}
    />
  )
};

export default TextField;