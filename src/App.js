import logo from './logo.svg';
import './App.css';
import PubChatBox_Contract from './ethereum/PubChatBox';
import { useEffect } from 'react';
import {Button} from 'semantic-ui-react';

function App() {

  useEffect(()=>{
   loadMessages(); 
  },[]);

  const loadMessages = async () => {
    const messages = await PubChatBox_Contract.methods.displayallmsgs().call()
    console.log(messages);
  }

  const connectMetamask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      window.ethereum.request({ method: 'eth_requestAccounts' });
    }
    console.log(window.ethereum);
    console.log(window.web3);
    window.ethereum.request({ method: 'eth_requestAccounts' });
    try {
      // Request account access if needed
      await window.ethereum.enable();
      // Acccounts now exposed
      // return web3;
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div className="App">
      <Button onClick={connectMetamask}>Connect</Button>
    </div>
  );
}

export default App;
