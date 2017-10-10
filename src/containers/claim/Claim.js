import React from 'react';
import Typography from 'material-ui/Typography';
import ClaimForm from '../../forms/claimForm';
import PaperPage from '../../components/paperPage';

const Claim = props => (
  <PaperPage>
    <Typography type="headline" component="h3">
      Travel insurance claim
    </Typography>
    <ClaimForm />
  </PaperPage>
);

export default Claim;
