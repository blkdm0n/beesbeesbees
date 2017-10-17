//*************************************************************************************
//create a subClass for Bee that inherits from Grub <= eat(), food()
//changes => age, color, and adds a job property
//*************************************************************************************
var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};
//*************************************************************************************
//Sets the bee's delegation so it delegates to Grub
//*************************************************************************************
Bee.prototype = Object.create(Grub.prototype);
//*************************************************************************************
//Set the constructor to Bee so we can see where the instance was created otherwise its 
//will show Grub
//*************************************************************************************
Bee.prototype.constructor = Bee;
//*************************************************************************************
//Sample Bee
//*************************************************************************************
// var bee = new Bee();
// bee.eat();
// console.log(bee);
//*************************************************************************************