import { useState } from 'react'
import reactLogo from './assets/undraw.svg'
import viteLogo from './assets/logo.png'
import './App.css'
import { Client, Account} from 'appwrite';
import { render } from 'react-dom';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('658d7b3746ed317621f8'); // Replace with your project ID

export const account = new Account(client);

const urlParams = new URLSearchParams(window.location.search);
const secret = urlParams.get('secret');
const userId = urlParams.get('userId');

const promise = account.updateVerification(userId, secret);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});


function App() {

  return (
    <>
      <div>
        <a href="https://flutter.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>chaliye shuru karte hai verification</h1>
      <div className="card">
        <button onClick={() => {
         <li><link to = '/verify'></link></li>
        }}>
          verifying...
        </button>
        <p>
           <code>flutter/react</code> will make a change
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}




export default App 

