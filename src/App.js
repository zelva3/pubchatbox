import logo from './logo.svg';
import './App.css';
import PubChatBox_Contract from './ethereum/PubChatBox';
import { useEffect, useState } from 'react';
import {Button} from 'semantic-ui-react';

function App() {

  useEffect(()=>{
   loadMessages(); 
  },[]);

  const [accountAddress, setAccountAddress] = useState('empty');

  const loadMessages = async () => {
    const messages = await PubChatBox_Contract.methods.displayallmsgs().call()
    console.log(messages);
  }

  const connectMetamask = async () => {
    
    if (typeof window.ethereum !== 'undefined') {
      const accounts = window.ethereum.request({ method: 'eth_requestAccounts' });
      // const account = accounts[0];
      console.log(accountAddress);
      setAccountAddress(accounts[0]);
      console.log(accounts);
      console.log(accountAddress);
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
    <div className="App">
      <Button onClick={connectMetamask}>Connect</Button>
      <div>{accountAddress}</div>
    </div>
  );
}

export default App;
