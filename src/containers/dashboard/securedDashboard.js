import React from 'react'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Typography from 'material-ui/Typography';
import PaperPage from '../../components/paperPage';
import RestrictedArea from '../../components/restrictedArea';
import Dashboard from './index';

class SecuredDashboard extends React.Component {
  render() {
    return (
      <PaperPage>
        <Typography type="headline" component="h3">
          Travel insurance claim
        </Typography>
        <RestrictedArea>
          <Dashboard />
        </RestrictedArea>
      </PaperPage>
    )
  }
}

export default SecuredDashboard;