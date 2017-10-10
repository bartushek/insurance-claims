import React from 'react'
import Typography from 'material-ui/Typography';
import PaperPage from '../../components/paperPage';
import RestrictedArea from '../../components/restrictedArea';
import Dashboard from './dashboard';

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