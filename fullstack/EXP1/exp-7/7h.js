function User(name, age) {
  this.name = name;
  this.age = age;

  this.display = function() {
    return "Name: " + this.name + ", Age: " + this.age;
  };

  Object.defineProperty(this, "userAge", {
    get: function() { return this.age; },
    set: function(newAge) { this.age = newAge; }
  });
}

let user1;

function createUser() {
  user1 = new User("Alice", 25);
  document.getElementById("result").innerHTML = "User Created!";
}

function updateAge() {
  if(user1) {
    user1.userAge = 30;
    document.getElementById("result").innerHTML = "Age Updated!";
  } else {
    document.getElementById("result").innerHTML = "Create a user first!";
  }
}

function displayUser() {
  if(user1) {
    document.getElementById("result").innerHTML = user1.display();
  } else {
    document.getElementById("result").innerHTML = "Create a user first!";
  }
}
