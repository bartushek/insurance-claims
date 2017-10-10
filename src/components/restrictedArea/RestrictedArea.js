import React from 'react';
import { connect } from 'react-redux';
import { isLoaded, isEmpty, firebaseConnect } from 'react-redux-firebase';

@connect(
  ({ firebase: { auth }}) => ({ auth })
)
class RestrictedArea extends React.Component {
  render() {
    const { auth, ...other } = this.props;
    other.alternate = other.alternate || <span>Permission denied</span>
    if (!isLoaded(auth)) return null;
    if (isEmpty(auth)) return other.alternate;
    return <RestrictedAreaUser {...other}/>;
  }
}

@firebaseConnect(['/users'])
@connect(
  ({ firebase: { auth, data: { users }} }) => ({ auth, users })
)
class RestrictedAreaUser extends React.Component {
  render() {
    const { auth, users, alternate, children } = this.props;
    if (isLoaded(users) && users[auth.uid] && users[auth.uid].role === 'admin') {
      return children;
    }
    return alternate;
  }
}

export default RestrictedArea;
