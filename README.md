# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `truffle compile`

Compile the contract

### `truffle migrate --reset` (If you are using a local network like ganache)

Deploy the contract

### `truffle migrate --network rinkeby` (For Rinkeby network)

Deploy the contract


## React and Contract dependencies 

### `npm install semantic-ui-react semantic-ui-css --legacy-peer-deps` 

We are using semantic UI for the front end

### `npm install web3` 

For web3

### `npm install @truffle/hdwallet-provider` 

If you are using Rinkeby network, you may need this

## Demo

Currently this project is deployed into Rinkeby network. You can check here: https://pubchatbox.vercel.app/
