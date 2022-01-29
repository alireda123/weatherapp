import React from 'react';
import './App.css';
import {useState, useEffect} from "react";
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay'
import Practice from './Practice/Practice';
import Add from "./Practice/Add"

function App() {

  return (
    <div>
    <div className="App">
      <h1 className="text-7xl p-10 flex justify-center items-center border-b-slate-800 border-b-2">Weather App</h1>
    </div>
    <div>
      <WeatherDisplay />
    </div>
    </div>
  );
}

export default App;
