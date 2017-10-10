export const TOGGLE_DIALOG = 'dialogs/TOGGLE_DIALOGS';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DIALOG:
      return {
        ...state,
        [action.payload.dialogID]: !state[action.payload.dialogID],
      };

    default:
      return state
  }
}

export const toggleDialog = dialogID => dispatch => { dispatch({ type: TOGGLE_DIALOG, payload: { dialogID }})};