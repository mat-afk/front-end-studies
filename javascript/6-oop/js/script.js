// Methods
const user = {
  name: "Markiplier",
  password: "1234",
  age: 31,

  getName: function () {
    return this.name;
  },

  setName: function (name) {
    this.name = name;
  },

  login: function () {
    if (this.isPasswordValid()) {
      console.log("User", this.name, "loggin In...");
    }
  },

  isPasswordValid: function () {
    console.log("Validating password...");
    return true;
  },
};

user.login();
console.log(user.getName());
user.setName("Mateus");
console.log(user.getName());

// Prototypes
const text = "Hello, world!";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const admin = Object.create(user);
console.log("Admin object:", admin);
console.log("Admin's prototype:", Object.getPrototypeOf(admin));

admin.login = function () {
  console.log("Admin", this.name, "loggin In...");
};

admin.login();

// Functions constructors
function createUser(name, password) {
  const user = Object.create({});
  user.name = name;
  user.password = password;

  return user;
}

const user1 = createUser("Markiplier", "1234");
console.log("Creating new user:", user1);

function User(name, password) {
  this.name = name;
  this.password = password;
}

const user2 = new User("Gustavo Lemos", "euteamocaramelo");
console.log("Creating new user:", user2);

// Methods in functions constructors
User.prototype.login = function () {
  console.log("User", this.name, "loggin In...");
};

console.log("User prototype:", Object.getPrototypeOf(user2));
user2.login();

// Classes
class Show {
  constructor(title, genre, numberOfSeasons) {
    this.title = title;
    this.genre = genre;
    this.numberOfSeasons = numberOfSeasons;
  }

  play() {
    console.log(`Playing ${this.title}...`);
  }
}

const breakingBad = new Show("Breaking Bad", "Drama", 5);
console.log("Instantiating:", breakingBad);
breakingBad.play();

// Overriding methods and properties
Show.prototype.play = function () {
  console.log("Nothing to play here...");
};

Show.prototype.genre = "Comedy";

console.log("Overriding methods and properties:");
Show.prototype.play();
breakingBad.play();
console.log("Genre:", breakingBad.genre);
console.log("Genre:", Object.getPrototypeOf(breakingBad).genre);
