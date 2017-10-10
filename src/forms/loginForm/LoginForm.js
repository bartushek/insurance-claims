import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import { LOGIN_FORM } from '../formsIndex';
import Typography from 'material-ui/Typography';
import { red } from 'material-ui/colors';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%',
  },
  error: {
    color: red[500],
  }
});

const TextFieldWrapped = props => (
  <TextField
    id={props.name}
    label={props.label}
    className={props.className}
    value={props.value}
    onChange={props.input.onChange}
    margin={props.margin}
    type={props.type}
  />
);

@withStyles(styles)
@reduxForm({
  form: LOGIN_FORM,
})
class LoginForm extends React.Component {
  render() {
    const props = this.props;
    const { handleSubmit, anyTouched, error } = props;
    return (
      <form onSubmit={ handleSubmit }>
        {anyTouched &&
        error &&
          <Typography className={props.classes.error}>
            {error}
          </Typography>
        }
        <div>
          <Field  label="Email"
                  required
                  className={props.classes.textField}
                  margin="normal" name="email" component={TextFieldWrapped} type="email" />
          <Field  label="Password"
                  required
                  className={props.classes.textField}
                  margin="normal" name="password" component={TextFieldWrapped} type="password" />
          <button type="submit" style={{ display: 'none' }}>Submit</button>
        </div>
      </form>
    )
  }
}

export default LoginForm;