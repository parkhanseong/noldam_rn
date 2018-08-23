import { createAction, handleActions } from "redux-actions";

const TRANSPORT = "button/TRANSPORT";

export const transportAction = createAction(TRANSPORT);

const INITIAL_STATE = {
  value: 0
};

export default handleActions(
  {
    [TRANSPORT]: (state, action) => ({
      value : action.payload.value
      this.props.navigation.navigate('ButtonNext', { value });
    })
  },
  INITIAL_STATE
);
