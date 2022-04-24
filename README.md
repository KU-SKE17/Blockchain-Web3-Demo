# Blockchain Web3.0 Demo

Learn how to build a Web 3.0 Application using Web 3.0 methodologies, Solidity and Metamask

Course: [Youtube](https://www.youtube.com/watch?v=Wn_Kb3MR_cU)

Github: [adrianhajdin/project_web3.0](https://github.com/adrianhajdin/project_web3.0)

## Tools

- [Vite.js](https://vitejs.dev/guide/): for react framework
- [Tailwindcss](https://tailwindcss.com/): for react UI without css file
- [Hardhat](https://hardhat.org/): for running solidity locally
- [MetaMask](https://metamask.io/): for blockchain account
- [Alchemy](https://www.alchemy.com/): for create blockchain application
- [Hostinger](https://www.hostinger.com/): for deploy app to cloud service

## Step-by-Step Tutorial

Create folders

- `/client` -> for web3.0 app
- `/smart_contract` -> for blockchain code

Setup client project

```bash
$ cd client

# initial vite.js
$ npm create vite@latest
# ✔ Project name: … ./
# ✔ Package name: … krypt
# ✔ Select a framework: › react
# ✔ Select a variant: › react
$ npm install

# initial tailwindcss
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```

Config UI to tailwindcss

- in [tailwind.config.js](client/tailwind.config.js)

  ```js
  module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  ```

- in [index.css](client/src/index.css)

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- in [App.jsx](client/src/App.jsx)

  ```jsx
  const App = () => {
    return (
      <div className="App">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    );
  };
  export default App;
  ```

> **Testing**: run `npm run dev`

Setup smart_contract project

```bash
$ cd smart_contract

# initial empty package.js
$ npm init -y

# install hardhat package
$ npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-waffle ethers

# initial hardhat project
$ npx hardhat
# ❯ Create a basic sample project
# ❯ enter
# ❯ y
```

> **Testing**: run `npx hardhat test`

Develop react app (in client folder)

- create [/components](client/src/components)
- update [App.jsx](client/src/App.jsx)

Develop smart contract (in smart_contract folder)

- delete [contracts/Greeter.sol](smart_contract/contracts/Greeter.sol)
- create [contracts/Transactions.sol](smart_contract/contracts/Transactions.sol)
- delete [scripts/sample-script.js](smart_contract/scripts/sample-script.js)
- create [scripts/deploy.js](smart_contract/scripts/deploy.js)

Setup MetaMask

- download chrome extension: [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)
- crete `Ropsten` account
- go to account detail (click 'Export Private Key'), get/copy `Private Key`
- get some ETH from faucet webs (ex. [egorfine](https://faucet.egorfine.com/))

Setup Alchemy Project

![alchemy](https://i.ibb.co/9v5ynRW/alchemy.png)

- go to https://dashboard.alchemyapi.io/apps
- create new app
  - name: krypt
  - chain: Ethereum
  - network: Ropsten
- go to app detail, get/copy `HTTP Key`

Get back to smart_contract folder

- update [hardhat.config.js](smart_contract/hardhat.config.js) (with `Private Key` and `HTTP Key` we got)
- deploy hardhat, to get/copy `Transactions address`

  ```bash
  $ npx hardhat run scripts/deploy.js --network ropsten
  ```

Go back to client folder

- create [src/utils](client/src/utils)
- in [utils/constants.js](client/src/utils/constants.js), paste `Transactions address` as contractAddress
- all context in [utils/Transactions.json](client/src/utils/Transactions.json) copy from [smart_contract/~/Transactions.json](smart_contract/artifacts/contracts/Transactions.sol/Transactions.json)

We finished connecting smart contract part

Let's continue with the web application

- create [src/context/TransactionContext.jsx](client/src/context/TransactionContext.jsx)
- update [src/components](client/src/components)
- update [src/utils/](client/src/utils)

Testing

![transaction-1](https://i.ibb.co/RH7Q8gM/transaction-1-ui.png)
![transaction-2](https://i.ibb.co/n1SxMmm/transaction-2-confirm.png)
![transaction-3](https://i.ibb.co/5110YYY/transaction-3-output.png)
![metamask](https://i.ibb.co/N24cCMd/metamask.png)

Deploy to production

- build client app

  ```bash
  $ npm run build
  ```

- move files in [client/dist](client/dist) to [hostinger](https://www.hostinger.com/) service
- install SSH to app service (hostinger)
