import React, { useContext } from 'react';
import { userContext } from '../../../App';
import { useHistory } from 'react-router-dom';

const PageFour = () => {
    //const [wallet]  = useContext(userContext);
    const {selectedCountry,wallet, bank} = useContext(userContext);
    const swapId = Math.random().toString(36).substr(2, 9)
    console.log(selectedCountry,wallet, bank)
    
    return ( 
        <div className="uk-card uk-text-center uk-position-center uk-margin-large-top uk-card-default uk-card-body uk-width-1-2@m">
            <h3 className="uk-card-title uk-text-italic uk-text-center uk-text-bolder">Step - 4/4</h3>     
            <h4 >Transfers funds to the following account</h4>   
            <h2 className="uk-card-title  uk-text-bolder">
                IBN : HPKBEIU16J2J7  <br/>
                SWAP ID : {swapId}
            </h2> 
            <p className=" uk-text-italic uk-text-center">As soon as the funds are received the transaction to your BSC wallet will be made the following address.</p> 
            <p className = ' uk-text-danger '> wallet Address: {wallet}</p>
            <a  className=" uk-text-italic " href='https://www.binance.org/en/smartChain' target= '_blanck'>How long does it usually take?</a>  
            <button className="uk-button uk-button-secondary uk-margin-top uk-width-1-1">Buy</button>    
        </div>
    );
};

export default PageFour;