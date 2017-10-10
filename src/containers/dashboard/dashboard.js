import React from 'react'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import {
  TableCell,
} from 'material-ui';
import {
  Grid, TableView, TableHeaderRow, TableFilterRow
} from '@devexpress/dx-react-grid-material-ui';

import {
  SortingState,
  LocalSorting,
  FilteringState,
  LocalFiltering,
} from '@devexpress/dx-react-grid';

const getStatus = (val) => {
  if (val) {
    return "Approved";
  } else if (val === false) {
    return "Rejected";
  }
  return "NEW";
};

const styles = theme => ({
  cell: {
    paddingRight: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    whiteSpace: 'normal',
  },
});

const CustomCell = withStyles(styles, { name: 'TableCell' })(({classes, children, style}) => (
  <TableCell
    style={{
      ...style,
    }}
    className={classes.cell}
  >
    {children}
  </TableCell>
));

@firebaseConnect(['/claims'])
@connect(
  ({ firebase: { data: { claims }}}) => ({ claims }),
  (dispatch, props) => ({ createClaimUpdater: (claimID, status) => () => props.firebase.update(`/claims/${claimID}`, {status})})
)
class Dashboard extends React.Component {
  renderGrid() {
    return (
      <Grid
        columns={[
          { name: 'claimID', title: 'Claim ID' },
          { name: 'name', title: 'Name' },
          { name: 'email', title: 'Email' },
          { name: 'policyID', title: 'Policy ID' },
          { name: 'claimType', title: 'Claim type' },
          { name: 'claimAmount', title: 'Claim amount' },
          { name: 'dateOccured', title: 'Date occured' },
          { name: 'status', title: 'Status' },
          { name: 'actions', title: 'Actions' },
        ]}
        rows={
          Object.keys(this.props.claims).map(k => ({ claimID: k, ...this.props.claims[k] }))
        }>
        <SortingState />
        <LocalSorting />
        <FilteringState />
        <LocalFiltering />
        <TableView
          tableCellTemplate={({ row, column, style }) => {
            if (column.name === 'actions') {
              return (
                <CustomCell style={style}>
                  {!row.status && <Button color="primary" raised onClick={this.props.createClaimUpdater(row.claimID, true)}>Approve</Button>}
                  {(row.status || row.status === undefined) && <Button raised onClick={this.props.createClaimUpdater(row.claimID, false)}>Reject</Button>}
                </CustomCell>
              );
            }
            if (column.name === 'status') {
              return (
                <CustomCell style={style}>
                  <span>{getStatus(row.status)}</span>
                </CustomCell>
              );
            }
            return undefined;
          }}
        />
        <TableHeaderRow allowSorting />
        <TableFilterRow />
      </Grid>
    )
  }

  render() {
    const { claims } = this.props;

    if(!isLoaded(claims)) {
      return <span>loading</span>
    }

    if(isEmpty(claims)) {
      return <span>empty</span>
    }

    return this.renderGrid()
  }
}

export default Dashboard;