import React from 'react';

const Home = () => {
    return (
       <>
        <div className="uk-position-center uk-margin-top  uk-width-1-2@m">
        <div className="uk-flex">

            <div className="uk-card uk-card-default uk-card-body uk-margin-left">
                <h2 className="uk-card-title uk-text-italic uk-text-center uk-text-bolder">Stable Coin Gateway - BUY</h2>  
                <p className="uk-text-italic ">Want To buy Coin ?? </p> <br/>
                <a href='/PageOne' class="uk-button uk-button-secondary uk-width-1-1">BUY NOW</a>          
            </div>

            <div className="uk-card uk-card-default uk-card-body uk-margin-left">
                <h2 className="uk-card-title uk-text-italic uk-text-center uk-text-bolder">Stable Coin Gateway - SELL</h2>  
                <p className="uk-text-italic ">Want To Sell Coin ?? </p> <br/>
                <a href='/stepOne' class="uk-button uk-button-secondary uk-width-1-1">SELL NOW</a>          
            </div>     

        </div>
        </div>
      
       </>
    );
};

export default Home;