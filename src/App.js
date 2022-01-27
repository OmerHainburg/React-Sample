
import logo from './logo.svg';
import './App.css';
import Student from './Student';
import SuperButton from "./SuperButton";
import React from 'react';
import Forms from './Form';
import  QuoteMaker from './QuoteMaker';
import Owl from './Owl';
import Friend from './Friend';
import TonightsPlan from './TonightsPlan';
import IncreamentState from './IncreamentState';
import { Greeting } from './Greeting';
import { List } from './List';
import { Button } from './Button';
import { AppState } from './AppState';
import { Toggle } from './Toggle';
import { Clock } from './Clock';
import { ClockInterval } from './ClockInterval';
import Candle from './Candle';

// import ReactDOM from 'react-dom';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!Omer Page.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Student prop1="Omer" prop2="Farooq" />
        <div className="block">
          <SuperButton atext="Click Me" alertText="I've been clicked!" />
        </div>
        <Forms />        
        <QuoteMaker />
        <Owl />
        <Friend />
        <TonightsPlan />
        <h1><Greeting name="Omer Farooq"></Greeting></h1>
        <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
        <Button />
        <AppState />
        <Toggle />
        <IncreamentState />
        <Clock />
        <ClockInterval />
        <Candle />
      </div>
      </header>
    </div>
  );
}
