import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import WAValidator from "wallet-address-validator";

const StepThree = () => {
    const {iban, setIban}  = useContext(userContext);
    
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory()
    const onSubmit = data => {
        setIban(data.iban);
             history.push({  
                pathname: '/stepFour'
            })
    };
    

    return ( 
        <div className="uk-card uk-text-center uk-position-center uk-margin-large-top uk-card-default uk-card-body uk-width-1-2@m">
            <h2 className="uk-card-title uk-text-italic uk-text-bolder">Step - 3/5</h2> <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="uk-fieldset "> 
                    <div className="uk-margin">
                        <input name='iban' className="uk-input" type="text" placeholder="Enter Your BSC address" ref={register({ required: true })}/>
                        {errors.iban && <span>This field is required</span>}
                    </div>
                </fieldset><br/>
                    
                <a  className=" uk-text-italic " href='https://www.binance.org/en/smartChain' target= '_blanck'>Where can I find my IBAN</a>
                
                <button className="uk-button uk-button-secondary uk-margin-top uk-width-1-1">Next</button>
               
            </form>
        </div>
    );
};

export default StepThree;