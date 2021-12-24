import React from "react";
import { useSelector } from "react-redux";
import  AppDispatcher  from "@redux/dispatchers/appDispatcher";

import "./Counter.css";



export default function Counter() {

const myvalue=useSelector((state) => {
 return state.UpdateNum
})


  return (

    <div className="counter">

      <button onClick={() => {

AppDispatcher.useDecrease()

}}>

        

        -

      </button>

      <h1>{myvalue}</h1>

      <button onClick={() => AppDispatcher.useIncrease()}>+</button>

    </div>

  );

}