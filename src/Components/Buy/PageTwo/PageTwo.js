import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import WAValidator from "wallet-address-validator";

const PageTwo = () => {
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
                pathname: '/pageThree'
            })
            
        }
        else {
            alert("Address INVALID");
        }
        
    };
    

    return ( 
        <div className="uk-card uk-text-center uk-position-center uk-margin-large-top uk-card-default uk-card-body uk-width-1-2@m">
            <h2 className="uk-card-title uk-text-italic uk-text-center uk-text-bolder">Step - 2/4</h2> <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="uk-fieldset "> 
                <small>Test with: 3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5</small>
                    <div className="uk-margin">
                        <input name='btcAddress' className="uk-input" type="text" placeholder="Enter Your BSC address" ref={register({ required: true })}/>
                        {errors.quantity && <span>This field is required</span>}
                    </div>
                </fieldset>
                    
                <h3 className="uk-text-italic ">You will receive your TAOA in this address</h3> 
                <p className = 'uk-text-italic uk-text-danger '> Pay close attention mistakes will make you loose all your assets and there is nothing we can do to help</p>
                
                <a  className=" uk-text-italic " href='https://www.binance.org/en/smartChain' target= '_blanck'>Don't have a BSC wallet yet?</a>
                
                <button className="uk-button uk-button-secondary uk-margin-top uk-width-1-1">Next</button>
               
            </form>
        </div>
    );
};

export default PageTwo;