import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import WAValidator from "wallet-address-validator";

const PageThree = () => {
    const {bank, setBank} = useContext(userContext);
    
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory()
    const onSubmit = data => {
        setBank(data.bank)
        history.push({  
            pathname: '/pageFour'  
        }) 
    };
    

    return ( 
        <div className="uk-card uk-text-center uk-position-center uk-margin-large-top uk-card-default uk-card-body uk-width-1-2@m">
            <h2 className="uk-card-title uk-text-italic uk-text-center uk-text-bolder">Step - 3/4</h2> <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="uk-fieldset "> 
                    <div className="uk-margin">
                        <div className="uk-form-controls">
                            <select name='bank' className="uk-select" ref={register({ required: true })}>
                                <option  value="">Choose a local Bank...</option>
                                <option  value='greenBank'> Green Bank</option>
                                <option  value='ific'> IFIC</option>
                                <option  value='switchBank'> Switch Bank </option>
                            </select>
                            {errors.bank && <span>This field is required</span>}
                        </div>
                    </div>   
                </fieldset>
                    
                <p className="uk-text-italic ">Transfers between banks are usually faster. If available give preference to your local bank and the system will automatically find the best P2P for you.</p> 
                
                <a  className=" uk-text-italic " href='https://www.binance.org/en/smartChain' target= '_blanck'>How long does it usually take?</a>
                
                <button className="uk-button uk-button-secondary uk-margin-top uk-width-1-1">Next</button>
               
            </form>
        </div>
    );
};

export default PageThree;