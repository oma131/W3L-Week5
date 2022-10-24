const { ethers } = require('ethers')

const RPC_URL = "https://eth-goerli.g.alchemy.com/v2/rERViZCWRmskcJ23cVrYQsouDXwBCnGY"

const abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
]

const CONTRACT_ADDRESS = '0x361AE4Db557B6FBBbeBeAE90f76EB28024B936c0'

const PRIVATE_KEY = "f0f89d4a934b6aa581844160a04e8777d724c8fcf7e04324f0c40302a72125c8"

const provider = new ethers.providers.JsonRpcProvider(RPC_URL)

// Look up the current block number
provider.getBlockNumber()
  .then((res) => console.log(res)
)

// // Get the balance of an account (by address or ENS name, if supported by network)
provider.getBalance("0xcae4fF8c4cB2D2B2623d3C8379f34Fc04AC8f3d8")
  .then(
  (res) => {
    console.log(res)
    // Often you need to format the output to something more         user-friendly,
    // such as in ether (instead of wei)
    const balanceInEther = ethers.utils.formatEther(res)
    console.log(balanceInEther)
  }
)

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY)

// Signer connected to a provider
const signerWithProvider = signer.connect(provider)

// Send ether to an ens name/address.
// const tx = signerWithProvider.sendTransaction({
//   to: "0xd19BE0d119b911C454bf352caB895f0Fc51f521c",
//   value: ethers.utils.parseEther("0.05")
// });

// Interact with a contract
const TOKEN_CONTRACT = new ethers.Contract(CONTRACT_ADDRESS, abi, signerWithProvider);

//Getting the Token Name
TOKEN_CONTRACT.name().
  then(
    (res) => {
      console.log(res)
    }
  )

//Getting the Token symbol
TOKEN_CONTRACT.symbol().
  then(
    (res) => {
      console.log(res)
    }
  )
//Getting the Token balance
TOKEN_CONTRACT.balanceOf(CONTRACT_ADDRESS).
  then(
    (res) => {
      console.log(res)
    }
  )