import React ,{useReducer} from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

import {SET_ALERT,REMOVE_ALERT} from '../types';


//Initialize initial state

const AlertState = props =>{
    const initialState=null;

    


    //Use this to dispatch action and update state. Basically state will be modified by reducers and this is initial reducer configuration
    const [state,dispatch] = useReducer(AlertReducer,initialState);

    //setAlert method to show alert of no value is put in search text box

  const setAlert = (msg, type) => {
    dispatch({type:SET_ALERT,
        payload:{msg,type}
});

    setTimeout(() => {
      dispatch({type:REMOVE_ALERT});
    }, 5000);
  };

    
    return <AlertContext.Provider
    value={{
        alert:state,
        setAlert
    }}>
        {props.children}

    </AlertContext.Provider>
}

export default AlertState;
