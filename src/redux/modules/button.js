import { createAction, handleActions } from "redux-actions";

const TRANSPORT = "button/TRANSPORT";

export const transportAction = createAction(TRANSPORT);

const INITIAL_STATE = {
  value: 0
};

//const { value } = this.props;

export default handleActions(
  {
    [TRANSPORT]: (state, action) => {
        const value = action.payload.value
        console.log(" >>>>>>>>>>> handleAction : " + value);
        console.log(" >>>>>>>>>>> handleAction state : " + state.console);

      //console.log(">>>>> action.payload.value : " + action.payload.value);
      //console.log(">>>>>>>>>>> 1");
      
      //this.props.navigation.navigate('ButtonNext');
      //   return {
          //     this.props.navigation.navigate('ButtonNext', { value });
          //   }
      //console.log(" 11 >>>>>> value : " + value);
      //return this.props.navigation.navigate('ButtonNext', { value });
      //console.log("valeu : "  +  action.payload.value );
      return {

      }
    } 
  },
  INITIAL_STATE
);
