import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const PageOne = () => {
    const {selectedCountry, setSelectedCountry}  = useContext(userContext);
    const [ country, setCountry]  = useState([]);
    
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory()

    const onSubmit = data => {
        const sellStepOneInfo ={
            coin: selectedCountry.currencies[0].code,
            quantity: data.quantity
        }
        history.push({  
            pathname: '/pageTwo',
            state: sellStepOneInfo

        })
    };
    
    const handleSelectCountry = (e) => {
        const selectedCountry = country.filter( allCountry => allCountry.name == e.target.value)
        setSelectedCountry(selectedCountry[0])
    };
 
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
          .then((res) => res.json())
          .then((data) => setCountry(data));
      }, []);

    return ( 
        <div className="uk-card uk-position-center uk-margin-large-top uk-card-default uk-card-body uk-width-1-2@m">
            <h2 className="uk-card-title uk-text-italic uk-text-center uk-text-bolder">Stable Coin Gateway - BUY</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="uk-fieldset"> 

                    <div className="uk-margin">
                        <label className="uk-form-label" >Select your coin...</label>
                        <div className="uk-form-controls">
                            <select onChange={handleSelectCountry} name='country' className="uk-select" ref={register({ required: true })}>
                            <option  value="">Select your coin...</option>
                              {country.map( country => <option  value={country.name} key={country.name}> {country.name} - ( {country.currencies[0].code})</option>)}
                            </select>
                            {errors.country && <span>This field is required</span>}
                        </div>
                    </div>   

                    <div className="uk-margin">
                        <label className="uk-form-label" >Quantity</label>
                        <input name='quantity' className="uk-input" type="number" placeholder="Quantity" ref={register({ required: true })}/>
                        {errors.quantity && <span>This field is required</span>}
                    </div>
                    
                    <small className="uk-text-italic ">Total Cost @Price AOA/TAOA</small> <br/><br/>
                    <button class="uk-button uk-button-secondary uk-width-1-1">Next</button>

                </fieldset>
            </form>
        </div>
    );
};

export default PageOne;