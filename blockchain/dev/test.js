const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();


const bc1 = {
"chain": [
{
"index": 1,
"timestamp": 1611806008080,
"transactions": [],
"nonce": 100,
"hash": "0",
"previousBlockHash": "0"
},
{
"index": 2,
"timestamp": 1611806307133,
"transactions": [],
"nonce": 18140,
"hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
"previousBlockHash": "0"
},
{
"index": 3,
"timestamp": 1611806544441,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "e5ae64f01ed54875a072ff8fa550c74d",
"transactionId": "4043207fc1c947309a276c9201975f8d"
},
{
"amount": 5900,
"sender": "958UURHH3898605789ut54GTGDNV93",
"recipient": "84UESU8H4638RT87640U9IW98H9H",
"transactionId": "fe0c8447fc1a44f78c45fd8cdb616402"
},
{
"amount": 50,
"sender": "958UURHH3898605789ut54GTGDNV93",
"recipient": "84UESU8H4638RT87640U9IW98H9H",
"transactionId": "ea8e1aa3859c40789e976730e6915774"
},
{
"amount": 450,
"sender": "958UURHH3898605789ut54GTGDNV93",
"recipient": "84UESU8H4638RT87640U9IW98H9H",
"transactionId": "3465518c7c6e4298b68f77f6aad10737"
}
],
"nonce": 49140,
"hash": "0000175f1b781eccb0a8fb935301b060bf49b67db5b12155acbcac2e61ffa36b",
"previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
},
{
"index": 4,
"timestamp": 1611806741864,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "e5ae64f01ed54875a072ff8fa550c74d",
"transactionId": "3daef953d43f42cdb1a4de80ed2391e0"
},
{
"amount": 45,
"sender": "958UURHH3898605789ut54GTGDNV93",
"recipient": "84UESU8H4638RT87640U9IW98H9H",
"transactionId": "54a51209c9874eadbb34ca1af2338fa4"
},
{
"amount": 145,
"sender": "958UURHH3898605789ut54GTGDNV93",
"recipient": "84UESU8H4638RT87640U9IW98H9H",
"transactionId": "bc26ed5035704b34a11cd06c71e7fbfb"
},
{
"amount": 245,
"sender": "958UURHH3898605789ut54GTGDNV93",
"recipient": "84UESU8H4638RT87640U9IW98H9H",
"transactionId": "c3d39aeb2a7f4320ab89b088d5bbc6c8"
},
{
"amount": 345,
"sender": "958UURHH3898605789ut54GTGDNV93",
"recipient": "84UESU8H4638RT87640U9IW98H9H",
"transactionId": "0568d285e1aa4f6a9c9a5d63872b6d9e"
}
],
"nonce": 1119,
"hash": "00007f760205a65704f6e3542238ee301a3df205c8cd011bf0e8e1e63265ca98",
"previousBlockHash": "0000175f1b781eccb0a8fb935301b060bf49b67db5b12155acbcac2e61ffa36b"
},
{
"index": 5,
"timestamp": 1611806822337,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "e5ae64f01ed54875a072ff8fa550c74d",
"transactionId": "928cdd95e060417bbc91e795852274d7"
}
],
"nonce": 1902,
"hash": "0000758fc9d6479424e9bc5c2b65147144a5b77eedd87b0fccd9b841e878b17e",
"previousBlockHash": "00007f760205a65704f6e3542238ee301a3df205c8cd011bf0e8e1e63265ca98"
},
{
"index": 6,
"timestamp": 1611806852072,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "e5ae64f01ed54875a072ff8fa550c74d",
"transactionId": "db24c055dc804c6ba59a02fa9079d73b"
}
],
"nonce": 259235,
"hash": "0000fc224ddf92f6c496b8ee7518ac57a591042af0dda5446fcac80977e37611",
"previousBlockHash": "0000758fc9d6479424e9bc5c2b65147144a5b77eedd87b0fccd9b841e878b17e"
}
],
"pendingTransactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "e5ae64f01ed54875a072ff8fa550c74d",
"transactionId": "b6f67207cade4b0aaf8d8167b05cb23e"
}
],
"currentNodeUrl": "http://localhost:3001",
"networkNodes": []
}















console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));














