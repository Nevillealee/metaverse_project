const Block = require('./block');

class BlockChain {
  constructor(){
    this.chain = [this.initRootBlock()];
  }

  initRootBlock(){
    return new Block(0, Date.now, "Root block in the chain.", null)
  }

  prevBlock(){
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock){
    newBlock.prevHash = this.prevBlock().hash;
    newBlock.hash = newBlock.computeHash();
    this.chain.push(newBlock);
  }

  validateChain(){
    // Checking validity
    for(let i = 1; i < this.chain.length; i++) {
      let currentBlock = this.chain[i];
      let nextBlock= this.chain[i - 1];
    // Checking current blcok hash

      if(currentBlock.hash !== currentBlock.computeHash()) {
          return false;
      }
      // Comparing current block hash with the next block

      if(currentBlock.prevHash !== nextBlock.hash) {
          return false;
      }
      return true;
    }
  }
}

module.exports = BlockChain;