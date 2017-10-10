import React from 'react';
import { Route } from 'react-router-dom'
import Dashboard from '../dashboard'
import IconButton from 'material-ui/IconButton';
import LoginDialog, { DIALOG_ID } from '../login';
import Claim from '../claim';
import styles from './App.scss';
import PermIdentityIcon from 'material-ui-icons/PermIdentity';
import ExitToApp from 'material-ui-icons/ExitToApp';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleDialog } from '../../modules/dialogs';
import { firebaseConnect } from 'react-redux-firebase'
import RestrictedArea from '../../components/restrictedArea';
import { push } from 'react-router-redux'
import { withRouter } from 'react-router-dom'

@withRouter
@firebaseConnect()
@connect(
    null,
    dispatch => bindActionCreators({
        toggleDialog: () => toggleDialog(DIALOG_ID),
        goToHome: () => push('/'),
    }, dispatch),
)
class App extends React.Component {
    logout = () => {
        this.props.firebase.logout();
        this.props.goToHome();
    }

    render() {
        const loginButton = (
            <IconButton color="contrast" onClick={this.props.toggleDialog}>
                <PermIdentityIcon />
            </IconButton>
        );

        return (
            <div className="App">
        <span className={styles.dashboardBtn}>
          <RestrictedArea alternate={loginButton}>
            <span>
              <IconButton color="contrast" onClick={this.logout}>
                <ExitToApp />
              </IconButton>
            </span>
          </RestrictedArea>
        </span>
                <main>
                    <Route exact path="/" component={Claim} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </main>
                <LoginDialog />
            </div>
        );
    }
}

export default App;
