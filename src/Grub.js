//create a superclass for grub
  //age = 0;
  //color = 'pink'
  //food = 'jelly'
  //eat method();

var Grub = function() {
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
};

Grub.prototype.eat = function() {
  console.log('nom nom nom');
};

// var grub = new Grub();
// console.log(grub);
// grub.eat();
