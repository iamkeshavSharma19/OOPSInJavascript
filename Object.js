function multiplyBy5(num) {
    return num * 5;
}


multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score) {
    this.username = username;
    this.score = score;
    this.greeting = function () {
      console.log(`Hello ${this.username}`);
      
    }
}

createUser.prototype.increment = function() {
  this.score ++;
}

createUser.prototype.printMe = function() {
  console.log(`score is ${this.score}`)
}

const chai = new createUser("chai", 25);

console.log(chai);

chai.increment();
console.log(chai);

const tea = new createUser("tea", 250);
console.log(tea);

tea.increment();

tea.printMe();

