import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { firebaseStateReducer } from 'react-redux-firebase'
import dialogs from './dialogs';

export default combineReducers({
  routing: routerReducer,
  firebase: firebaseStateReducer,
  form: formReducer,
  dialogs,
})