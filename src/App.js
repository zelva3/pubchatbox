import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import { Button, Grid, Segment } from 'semantic-ui-react';
import Layout from './components/Layout';
import MessageBox from './components/MessageBox';
import web3 from "./ethereum/web3";

function App() {


  const ethereum = window.ethereum;
  const [accountAddress, setAccountAddress] = useState('');

  useEffect(() => {

    checkConnected();

  }, []);

  const checkConnected = async () => {
    if (typeof ethereum !== 'undefined') {
      const accounts = await web3.eth.getAccounts();
      accounts.length !== 0 && setAccountAddress(accounts[0]);
    }
  }


  ethereum.on('accountsChanged', (accounts) => {
    window.location.reload();
  });

  const connectMetamask = async () => {
    console.log(ethereum.isConnected());
    if (typeof ethereum !== 'undefined') {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setAccountAddress(accounts[0]);
     
    }
    
  }

  return (
    <Layout>
      <Grid centered columns={2}>
        <Grid.Row>
          {accountAddress === '' ?
            <Button onClick={connectMetamask}>Connect</Button>
            : <Button>Connected to {accountAddress}</Button>
          }
        </Grid.Row>
        <Grid.Column >
        <Segment><MessageBox connection={accountAddress} /></Segment>          
        </Grid.Column>
      </Grid>


    </Layout>
  );
}

export default App;
