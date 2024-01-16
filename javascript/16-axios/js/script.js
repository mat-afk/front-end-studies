// Axios
console.log(axios);

// Requests and responses
const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// API data in DOM
const userContainer = document.querySelector("#user-container");

const printUsers = async () => {
  const users = await getUsers();

  users.forEach((user) => {
    const div = document.createElement("div");

    const nameElement = document.createElement("h3");
    nameElement.textContent = user.name;
    div.appendChild(nameElement);

    const emailElement = document.createElement("p");
    emailElement.textContent = user.email;
    div.appendChild(emailElement);

    userContainer.appendChild(div);
  });
};

printUsers();
