import { createAction, handleActions } from "redux-actions";
import { List, Map, fromJS } from 'immutable';

const SET_SIGN = "sign/SET_SIGN";

export const setSign = createAction(SET_SIGN);

const INITIAL_STATE = Map({
    name: Map({
        // value: '',
        // isValid: null
    }),
    phone: Map({
        // value: '',
        // isValid: null
    }),
    pwd: Map({
        // value: '',
        // isValid: null
    }),
    pwdConfirm: Map({
        // value: '',
        // isValid: null
    })
});

export default handleActions(
  { 
    [SET_SIGN]: (state, { payload:  data  }) => {
        const { type } = data;
        return state.set(type, fromJS(data));
    }
    //imutable 활용
    //return state.set('name', '가나다');
    //return setIn["profile", type] profile 안에 type 
  },
  INITIAL_STATE
);
