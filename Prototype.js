let myName = "Keshav      ";
let myName02 = "Karan      "



String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
  
}

myName.trueLength();


let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }

}


Object.prototype.keshav = function(){
  console.log(`keshav is present in all objects`);
  
}

heroPower.keshav();
myHeroes.keshav();

Array.prototype.heyKeshav = function(){
  console.log(`Keshav says hello`);
  
}

myHeroes.heyKeshav();
// heroPower.heyKeshav();

// inheritance

const User = {
    name: "Chai",
    email: "Chai@gmail.com"
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssisgnment: `JS assignment`,
    fullTime: true,
    __proto__: TeachingSupport
}

console.log(TASupport.isAvailable);


Teacher.__proto__ = User;

//Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

console.log(TeachingSupport.makeVideo);

