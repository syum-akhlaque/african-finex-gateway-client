import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const StepFive = () => {
    
    
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory()
    const onSubmit = data => {
    
             history.push({  
                pathname: '/'
            })
    };
    

    return ( 
        <div className="uk-card uk-text-center uk-position-center uk-margin-large-top uk-card-default uk-card-body uk-width-1-2@m">
            <h2 className="uk-card-title uk-text-italic uk-text-bolder">passo - 5/5</h2> <br/>
            <p className = 'uk-text-italic uk-text-success '> Congratulations! You have made it successfully. Remember your internal transaction ID. If you need any help customer support will ask for it</p>
            <h1 className = 'uk-text-italic  '>369246</h1>
            <p className = 'uk-text-italic  '>ID X, qtt token, Token, timestamp</p>
            <form onSubmit={handleSubmit(onSubmit)}>    
                <button className="uk-button uk-button-primary uk-margin-top uk-width-1-1">Done</button>
            </form>
        </div>
    );
};


export default StepFive;