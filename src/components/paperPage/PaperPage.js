import React from 'react';
import styles from './paperPage.scss';
import Paper from 'material-ui/Paper';

export default props => (
  <div className={styles.container}>
    <Paper elevation={12} className={styles.paper}>
      {props.children}
    </Paper>
  </div>
)