import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const StepFour = () => {
    const {txid, setTxid}  = useContext(userContext);
    
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory()
    const onSubmit = data => {
        setTxid(data.iban);
             history.push({  
                pathname: '/stepFive'
            })
    };
    

    return ( 
        <div className="uk-card uk-text-center uk-position-center uk-margin-large-top uk-card-default uk-card-body uk-width-1-2@m">
            <h2 className="uk-card-title uk-text-italic uk-text-bolder">Step - 4/5</h2> <br/>
            <p className = 'uk-text-italic  '> Transfer your tokens token1 to the following BSN (Biance smart chain) address and enter the result in a TXid</p>
            <p className = 'uk-text-italic  '>0xd215423aAd24dA82f782eA845aeD269E621</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="uk-fieldset "> 
                    <div className="uk-margin">
                        <input name='txid' className="uk-input" type="text" placeholder="TXid(mandatory info)" ref={register({ required: true })}/>
                        {errors.txid && <span>This field is required</span>}
                    </div>
                </fieldset><br/>
                    
                <button className="uk-button uk-button-secondary uk-margin-top uk-width-1-1">Done</button>
               
            </form>
        </div>
    );
};


export default StepFour;