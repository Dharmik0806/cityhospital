import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { logineDetails } from '../utility/Uitility';

function PrivateRoute({component : Component , restricated = false , ...rest}) {
    return (
       <Route 
       {...rest}
       render={(props) => {
            return(
                logineDetails() ?  <Component {...props} /> : <Redirect to="/auth"/> 
            )
       }}
       />
    );
}

export default PrivateRoute;