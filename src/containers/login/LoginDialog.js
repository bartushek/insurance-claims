import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { SubmissionError } from 'redux-form'
import LoginForm from '../../forms/loginForm';
import Button from 'material-ui/Button';
import { submit as formSubmitActionCreator } from 'redux-form';
import { LOGIN_FORM } from '../../forms/formsIndex';
import { firebaseConnect } from 'react-redux-firebase';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog'
import { toggleDialog } from '../../modules/dialogs';
import styles from './login.scss';

export const DIALOG_ID = 'loginDialog';

@firebaseConnect()
@connect(
  ({ dialogs: { loginDialog }}) => ({ loginDialog }),
  dispatch => bindActionCreators({
    submitForm: () => formSubmitActionCreator(LOGIN_FORM),
    toggleDialog: () => toggleDialog(DIALOG_ID),
    goToDashboard: () => push('/dashboard'),
  }, dispatch)
)
class Home extends React.Component {
  handleLoginError = ({message}) => {
    throw new SubmissionError({
      _error: message
    })
  };

  handleLoginSubmit = values => {
    try {
      return this.props.firebase.login({
        email: values.email,
        password: values.password,
      }).then(() => {
        this.props.toggleDialog();
        this.props.goToDashboard();
      }).catch(this.handleLoginError);
    } catch (e) {
      this.handleLoginError(e);
    }
  }

  render() {
    const props = this.props;
    return (
      <div className={styles.loginPage}>
        <Dialog open={props.loginDialog} onRequestClose={props.toggleDialog}>
          <div className={styles.dialog}>
          <DialogTitle>Sign In</DialogTitle>
          <DialogContent>
            <LoginForm onSubmit={this.handleLoginSubmit} onSubmitFail={() => {}} />
          </DialogContent>
          <DialogActions>
            <Button onClick={props.submitForm} dense color="primary">
              Login
            </Button>
          </DialogActions>
          </div>
        </Dialog>
      </div>
    )
  }
}

export default Home;