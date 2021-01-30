import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import WAValidator from "wallet-address-validator";

const StepTwo = () => {
    const {wallet, setWallet}  = useContext(userContext);
    
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory()
    const onSubmit = data => {

        // const regex = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;
        // const test = regex.test(data.btcAddress)
        const valid = WAValidator.validate(data.btcAddress, "BTC");
        if (valid) {
            setWallet(data.btcAddress);
             history.push({  
                pathname: '/stepThree'
            })
            
        }
        else {
            alert("Address INVALID");
        }
        
    };
    

    return ( 
        <div className="uk-card uk-text-center uk-position-center uk-margin-large-top uk-card-default uk-card-body uk-width-1-2@m">
            <h2 className="uk-card-title uk-text-italic uk-text-bolder">Step - 2/5</h2> <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="uk-fieldset "> 
                <small >Test with: 3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5</small>
                    <div className="uk-margin">
                        <input name='btcAddress' className="uk-input" type="text" placeholder="Enter Your BSC address" ref={register({ required: true })}/>
                        {errors.quantity && <span>This field is required</span>}
                    </div>
                </fieldset>
                    
                <p className = 'uk-text-italic uk-text-danger '> If for some reason we can not proceed with your sale (Which is rare) we will completely return your assets. Please provide a BSC valid wallet address that you have access to. Pay close attention to not input any incorrect information.</p>
                
                <a  className=" uk-text-italic " href='https://www.binance.org/en/smartChain' target= '_blanck'>Don't have a BSC wallet yet?</a>
                
                <button className="uk-button uk-button-secondary uk-margin-top uk-width-1-1">Next</button>
               
            </form>
        </div>
    );
};

export default StepTwo;