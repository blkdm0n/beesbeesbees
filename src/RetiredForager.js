//*************************************************************************************
//create a sublClass for RetiredForagerBee that inherits from Forager superClass
//*************************************************************************************
var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};
//*************************************************************************************
//Set prototype for each instance of the subClass
//*************************************************************************************
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
//*************************************************************************************
//Set the constructor for the subClass
//*************************************************************************************
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
//*************************************************************************************
//an updated forage() method
//*************************************************************************************
RetiredForagerBee.prototype.forage = function() {
  return `I am too old, let me play cards instead`;
};
//*************************************************************************************
//a gamble() method that adds to treasureChest and always wins
//*************************************************************************************
RetiredForagerBee.prototype.gamble = function(winnings) {
  this.treasureChest.push(winnings);
};
//*************************************************************************************
