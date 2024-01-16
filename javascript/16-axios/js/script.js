// Axios
console.log(axios);

// Http requests and responses

// GET
const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",

      //   Headers
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
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

// POST
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

const postUser = async () => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1,
      }
    );
    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  postUser();
});
