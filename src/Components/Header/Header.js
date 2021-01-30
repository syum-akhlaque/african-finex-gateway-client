import React from 'react';

const Header = () => {
    return (
        <nav className="uk-navbar-container uk-margin " uk-navbar>
        <div className="uk-navbar-left uk-background-secondary">
          <a className="uk-navbar-item uk-logo" href="/">Africa Finex Gateway</a>
          <ul className="uk-navbar-nav uk-margin-medium-left ">
              <li>
                  <a href="/">Buy Coin</a>
              </li>
              <li>
                  <a href="/">Cell Coin</a>
              </li>
              <li>
                    <a href="/">About Us</a>
              </li>           
          </ul>   
       </div>
    </nav>
    );
};

export default Header;