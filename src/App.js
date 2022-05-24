import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';
import Layout from './components/Layout';
import MessageBox from './components/MessageBox';

function App() {

  
  const ethereum = window.ethereum;
  const [accountAddress, setAccountAddress] = useState('');

  
  ethereum.on('accountsChanged', (accounts) => {
    // Handle the new accounts, or lack thereof.
    // "accounts" will always be an array, but it can be empty.
    window.location.reload();
  });

  const connectMetamask = async () => {
    console.log(ethereum.isConnected());
    if (typeof ethereum !== 'undefined') {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      // const account = accounts[0];
      // console.log(ethereum.isConnected());
      // console.log(accountAddress);
      setAccountAddress(accounts[0]);
      // console.log(accounts);
      // console.log(accountAddress);
    }
    // console.log(window.ethereum);
    // console.log(window.web3);
    // window.ethereum.request({ method: 'eth_requestAccounts' });
    // try {
    //   // Request account access if needed
    //   await window.ethereum.enable();
    //   // Acccounts now exposed
    //   // return web3;
    // } catch (error) {
    //   console.error(error);
    // }
  }

  return (
    <Layout>
      {accountAddress == '' ?
        <Button onClick={connectMetamask}>Connect</Button>
        : <Button>Connected to {accountAddress}</Button>
      }
      <MessageBox />
    </Layout>
  );
}

export default App;
