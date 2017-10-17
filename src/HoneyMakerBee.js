//*************************************************************************************
//create a subClass for HoneyMakerBee that inherits from Bee superClass
//age = 10; job = make honey; honeypot = 0;
//*************************************************************************************
var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeypot = 0;
};
//*************************************************************************************
//Set the prototype to delegate from the Bee superClass
//*************************************************************************************
HoneyMakerBee.prototype = Object.create(Bee.prototype);
//*************************************************************************************
//Set the constructor to show HoneyMakerBee
//*************************************************************************************
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
//*************************************************************************************
//makeHoney() and giveHoney() methods
//*************************************************************************************
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeypot++;
  console.log(`You now have ${this.honeypot} honeypot(s)`);
};

HoneyMakerBee.prototype.giveHoney = function() {
  if (this.honeypot) {
    this.honeypot--;
    console.log(`You gave away 1 honeypot you have ${this.honeypot} honeypots left`);
  } else  {
    console.log(`No honey left go make some!`);
  }
};
//*************************************************************************************
//Sample HoneyMakerBee subClass
//*************************************************************************************
// var honeyB = new HoneyMakerBee();
// honeyB.makeHoney();
// honeyB.makeHoney();
// honeyB.makeHoney();
// honeyB.giveHoney();
// honeyB.giveHoney();
// honeyB.giveHoney();
// honeyB.giveHoney();