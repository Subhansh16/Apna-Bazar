import React,{ useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {

  const [{},dispatch]= useStateValue();
  useEffect(() => {
      //will only run whe the app component 

      auth.onAuthStateChanged(authUser => {
        console.log('THE USER IS >>>', authUser);
        //the user just logged in/ the user was logged in 
        if(authUser){
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        }   //the user is logged out  
       else {
          dispatch({
            type: 'SET_USER',
            user: null
          })
          
        }
      })
  }, [])
  return (
  
    //BEM
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={[<Header />, <Home />]} />

        <Route path="/checkout" element={[<Header />, <Checkout />]}    />
       
        <Route path="/payment" element={[<Header />, <Payment />]}    />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;