import React,{Fragment} from 'react';
import spinner from './Spinner.png';


export const Spinner = () => {
    return (
        <Fragment>
            <img src = {spinner} alt= 'Loading...' style={{width : '1000px', margin : 'auto' , display : 'block'}}/>
        </Fragment>
    )
};

export default Spinner;
