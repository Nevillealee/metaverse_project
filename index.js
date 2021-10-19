const http = require('http');
const Block = require('./block');
const BlockChain = require('./block-chain');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  let chain = new BlockChain();

  chain.addBlock(new Block(1, Date.now, {sender: "Momo Yaoyorozu", recipient: "Izuku Midoriya", amount: 20.00}));

  chain.addBlock(new Block(2, Date.now, {sender: "Shoto Todoroki", recipient: "Tomura Shigaraki", amount: 55.00}));
  res.end(JSON.stringify(chain));
});

server.listen(port, hostname, () => {
  let chain = new BlockChain();
  console.log(JSON.stringify(chain));
});
