//*************************************************************************************
//create a subClass for ForagerBee that inherits from Bee superClass
//*************************************************************************************
var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};
//*************************************************************************************
//Set the prototype of the subClass to delegate to the superClass
//*************************************************************************************
ForagerBee.prototype = Object.create(Bee.prototype);
//*************************************************************************************
//Set constructor for ForagerBee class
//*************************************************************************************
ForagerBee.prototype.constructor = ForagerBee;
//*************************************************************************************
//add a forage() method
//*************************************************************************************
ForagerBee.prototype.forage = function (treasure) {
 this.treasureChest.push(treasure);
};
//*************************************************************************************

