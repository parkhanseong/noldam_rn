import { createAction, handleActions } from "redux-actions";
import { List, Map } from 'immutable';

const TRANSPORT = "button/TRANSPORT";

export const transport = createAction(TRANSPORT);

const INITIAL_STATE = {
  //name: 0
  type: '',
  value: ''
};

//const { value } = this.props;

export default handleActions(
  {

    [TRANSPORT]: (state, { payload: { type, value } }) => {
        const item = Map({
          type,
          value,
        });
        console.log(">>>> item.get: "+ item.get("type"));
        return state.update('values', values => values.push(item));
      },
    // [TRANSPORT]: (state, action) => {
        // console.log(">>> moduel name : " + action.payload.name,)
        // console.log(">>> moduel age : " + action.payload.age,)
    //     console.log("<<< info_ handleAcion : " + action.payload.info_);

    //    return { 
    //        name: action.payload.name,
    //    }
    // }
  },
  INITIAL_STATE
);
