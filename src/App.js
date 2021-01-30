import logo from './logo.svg';
import './App.css';
import '../node_modules/uikit/dist/css/uikit.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Header from './Components/Header/Header';
import PageOne from './Components/Buy/PageOne/PageOne';
import PageTwo from './Components/Buy/PageTwo/PageTwo';
import PageThree from './Components/Buy/PageThree/PageThree';
import PageFour from './Components/Buy/PageFour/PageFour';
import StepTwo from './Components/Sell/StepTwo/StepTwo';
import StepThree from './Components/Sell/StepThree/StepThree';
import StepFour from './Components/Sell/StepFour/StepFour';
import StepFive from './Components/Sell/StepFive/StepFive';
import Home from './Components/Home/Home';
import StepOne from './Components/Sell/StepOne/StepOne';
export const userContext = createContext();

function App() {
  const [selectedCountry, setSelectedCountry] = useState({});
  const [wallet, setWallet] = useState('');
  const [bank, setBank] = useState('');
  const [iban, setIban] = useState('');
  const [txid, setTxid] = useState('');

  return (
      <>
       <userContext.Provider value = {{
        selectedCountry, setSelectedCountry, wallet, setWallet, bank, setBank,iban, setIban,txid, setTxid
       }}>
        <Router>
        <Header/> 
          <Switch>
            <Route exact path="/">  
              
                <Home/>
            </Route>
            <Route exact path="/pageOne">  
              <PageOne/>
            </Route> 
            <Route exact path="/pageTwo">  
              <PageTwo/>
            </Route> 
            <Route exact path="/pageThree">  
              <PageThree/>
            </Route> 
            <Route exact path="/pageFour">  
              <PageFour/>
            </Route>
            <Route exact path="/stepOne">  
              <StepOne/>
            </Route>
            <Route exact path="/stepTwo">  
              <StepTwo/>
            </Route>
            <Route exact path="/stepThree">  
              <StepThree/>
            </Route>
            <Route exact path="/stepFour">  
              <StepFour/>
            </Route>
            <Route exact path="/stepFive">  
              <StepFive/>
            </Route>
            <Route path='*'>
              <h2 className = 'text-center py-5'> 4O4  not found .......</h2>
            </Route>
          </Switch>
        </Router>
       </userContext.Provider>
      </> 
  );
}

export default App;
