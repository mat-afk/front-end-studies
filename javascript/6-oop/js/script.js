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
console.log(admin);
console.log(Object.getPrototypeOf(admin));
admin.login();
