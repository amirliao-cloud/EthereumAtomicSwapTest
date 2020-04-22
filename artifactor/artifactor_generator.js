const Artifactor = require("@truffle/artifactor");
const artifactor = new Artifactor(".");

const contractData = {
    contractName: "HashedTimelock",        // String; optional.
    abi: [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_receiver",
                    "type": "address"
                },
                {
                    "name": "_hashlock",
                    "type": "bytes32"
                },
                {
                    "name": "_timelock",
                    "type": "uint256"
                }
            ],
            "name": "newContract",
            "outputs": [
                {
                    "name": "contractId",
                    "type": "bytes32"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_contractId",
                    "type": "bytes32"
                },
                {
                    "name": "_preimage",
                    "type": "bytes32"
                }
            ],
            "name": "withdraw",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_contractId",
                    "type": "bytes32"
                }
            ],
            "name": "refund",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_contractId",
                    "type": "bytes32"
                }
            ],
            "name": "getContract",
            "outputs": [
                {
                    "name": "sender",
                    "type": "address"
                },
                {
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "name": "hashlock",
                    "type": "bytes32"
                },
                {
                    "name": "timelock",
                    "type": "uint256"
                },
                {
                    "name": "withdrawn",
                    "type": "bool"
                },
                {
                    "name": "refunded",
                    "type": "bool"
                },
                {
                    "name": "preimage",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "contractId",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "hashlock",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "name": "timelock",
                    "type": "uint256"
                }
            ],
            "name": "LogHTLCNew",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "contractId",
                    "type": "bytes32"
                }
            ],
            "name": "LogHTLCWithdraw",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "contractId",
                    "type": "bytes32"
                }
            ],
            "name": "LogHTLCRefund",
            "type": "event"
        }
    ]
};

artifactor.save(contractData);
// The file ./MyContract.json now exists, which you can
// import into your project like any other Javascript file.

