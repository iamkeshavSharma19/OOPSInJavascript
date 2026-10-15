function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
      console.log(`Welcome ${this.username}`);
      
    }

    return this;
}

const userOne = new User("Keshav", 12, true);

console.log(userOne);

//At the end of the day User and UserInfo are exactly same.

class UserInfo {
  constructor (username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
      console.log(`Welcome ${this.username}`);
      
    }
  }
}

const userTwo = new UserInfo("Karan", 13, false);

console.log(userTwo);
