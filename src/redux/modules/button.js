import { createAction, handleActions } from "redux-actions";

const TRANSPORT = "button/TRANSPORT";

export const transport = createAction(TRANSPORT);

const INITIAL_STATE = {
  name: 0
};

//const { value } = this.props;

export default handleActions(
  {
    [TRANSPORT]: (state, action) => {
        console.log(">>> moduel name : " + action.payload.name,)
        console.log(">>> moduel age : " + action.payload.age,)
       return { 
           name: action.payload.name,
           age: action.payload.age,
           address: action.payload.address,
           habit: action.payload.habit,
       }
    }
  },
  INITIAL_STATE
);
