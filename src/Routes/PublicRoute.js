import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { logineDetails } from '../utility/Uitility';

function PublicRoute({ component: Component, restricated = false, ...rest }) {
    console.log(logineDetails() , restricated );
    return (
       <Route
            {...rest}
            render={(props) => {
                return(
                    logineDetails() && restricated ? <Redirect to="/" /> : <Component {...props}/>
                )
            }}
       />
    )
}

export default PublicRoute;

// to={...rest}
// render={(props) => {
//     return (
//         logineDetails() && restricated ? <Redirect to="/> : <componant />
   
//  )
