import React from "react";
import { observable } from 'mobx';

export const appState = observable({
    count: 0
    
  });
  

export const handleChange = () => {
    appState.count++;
    console.log( appState.count);
}