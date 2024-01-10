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

// Symbols
class Theater {
  constructor(name, city) {
    this.name = name;
    this.city = city;
    this[Symbol("seats")] = 58;
  }
}

const movieTheater = new Theater("Cinemark", "São Paulo");
console.log("Movie theater:", movieTheater);

// Getters and setters
class Post {
  constructor(title, description, author, tags) {
    this.title = title;
    this.description = description;
    this.author = author;
    this.tags = tags;
  }

  get getTitle() {
    return this.title;
  }

  set setTitle(title) {
    if (typeof title !== "string") {
      throw new Error("Title must be a string!");
    }

    this.title = title;
  }

  set setTags(tags) {
    if (!Array.isArray(tags)) {
      throw new Error("Tags must be an array!");
    }

    this.tags = tags;
  }
}

const post = new Post(
  "What it is to be a developer at Kiman?",
  "Learning PL/SQL, Java EE and ReactJS",
  "Gustavo Lemos",
  ["JavaScript", "Programming", "Kiman"]
);

console.log("Post:", post);
post.setTags = ["JavaScript", "Programming", "Kiman", "Java"];
console.log("Post after setting new tags:", post);
console.log("Post title:", post.getTitle);

// Heritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating...`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking...`);
  }
}

const dog = new Dog("Godzilla", "Corgi");

console.log("Creating new Dog:", dog, "that extends Animal");
dog.eat();
dog.bark();
